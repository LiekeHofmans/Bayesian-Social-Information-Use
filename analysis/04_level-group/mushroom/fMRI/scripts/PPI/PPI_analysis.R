# Check if there is an interaction between brain areas as a function of belief update (PPI)
# I extracted the timeseries from multiple ROIs relating to 
# - low own certainty (uncertainty)
# - higher peer confidence
# - KL divergence
#
# Question: does the connectivity (relationship) between two of these brain areas
# depend on (interact with) belief update?
# Or: Does A interact more strongly with B when the person is updating their belief compared to when they are not?
#
# Steps: 
# - Combine timeseries and psychological regressor (KL divergence (belief update)) per TR
# - Convolve KL divergence wit HRF
# - Run model: target_timeseries ~ seed_timeseries * KL divergence + (1 | sID)
# 
# Lieke Hofmans, May 2025

rm(list = ls())
library("readr")
library("dplyr")
library("neuRosim")
library("lmerTest")

# TR information
# ==============================================================================
TR_sec <- 2 # in seconds

# directories
# ==============================================================================
setwd("P:/fMRI Projects/fMRI Project Mushroom/analysis")
analysis_wd <- getwd()
bids_dir <- "P:/fMRI Projects/fMRI Project Mushroom/bids"
beh_dir <- file.path(bids_dir, "derivatives/beh/mushroom")
mri_dir <- file.path(bids_dir, "derivatives/mri/group_level")


# load and combine data
# ==============================================================================
df_params <- read.csv(file.path(beh_dir, "group_task-mushroom_preproc-trialwise-params_forfMRI_allTrials.csv"))
df_timeseries <- read.csv(file.path(mri_dir, "group_timeseries_data.csv")) 
df_combined <- data.frame()

# retrieve timing files for each subject and run
for (iSubject in unique(df_params$sID)) {
  iSub <- paste("sub-", sprintf("%03d", iSubject), sep="")
  
  for (iRun in c(1,2,3)) {
    if (file.exists(file.path(bids_dir, iSub, "func", paste(iSub, "_task-mushroom_run-", iRun, "_events.tsv", sep="")))) {
      df_params_thisRun <- df_params[df_params$sID==iSubject & df_params$run==iRun,]
      df_timing <- read_delim(file.path(bids_dir, iSub, "func", paste(iSub, "_task-mushroom_run-", iRun, "_events.tsv", sep="")), delim="\t", show_col_types = FALSE)
      df_timing <- df_timing[df_timing$trial_number %in% df_params_thisRun$trial_number,]
      
      # Extract timing of social information and values of KL divergence 
      params_KLdpost2pr <- data.frame(
        onset = df_timing$onset_SI[df_timing$filler_trial==0],
        duration = df_timing$duration_SI[df_timing$filler_trial==0],
        KLd = scale(df_params_thisRun$KLd[df_params_thisRun$filler_trial==0], scale=F)
      )
        
     # Extract timeseries
     df_ts_thisRun <- df_timeseries %>%
       filter(sID == iSubject, run == iRun) %>%
       mutate(time_sec = (TR-1) * TR_sec) # TR starts from 1
     n_TRs <- nrow(df_ts_thisRun)
     total_time <- n_TRs * TR_sec
     time_vec <- seq(0, total_time - TR_sec, by = TR_sec)
    
     # Create stick function modulated by KL divergence
     stick_KLd <- rep(0, length(df_ts_thisRun$time_sec))
     for (j in seq_len(nrow(params_KLdpost2pr))) {
       idx <- which.min(abs(df_ts_thisRun$time_sec - params_KLdpost2pr$onset[j])) #Find the idx in time_sec that is closest in time to the actual onset.
       stick_KLd[idx] <- params_KLdpost2pr$KLd[j] # and place KL value there
     }
     
     # Convolve with double-gamma HRF
     hrf <- canonicalHRF(seq(0, 32, by = TR_sec))  # default is double-gamma
     KLd_HRF <- convolve(stick_KLd, rev(hrf), type = "open")[1:length(stick_KLd)]
     
     # Add convolved regressor to dataframe
     df_ts_thisRun$KLd_HRF <- KLd_HRF
     
     # Append to result
     df_combined <- bind_rows(df_combined, df_ts_thisRun)
     
    }
  }
}

# Run PPI analysis
# Focus on low certainty and peer confidence ROIs only, 
# because KL divergence was no longer present when including all regressors in 
# the same model. Probably due to high intercorrelation.
# ==============================================================================

# Check if connection between ROIs responding to low certainty and peer confidence are more strongly connected depending on KL divergence
fit_uncertainty_confidence2 <- lmer(scale(perceived_confidence_pos_cluster2) ~ scale(perceived_certaintyE1_neg_cluster2) * scale(KLd_HRF) + (1 + scale(perceived_certaintyE1_neg_cluster2) * scale(KLd_HRF) | sID), data = df_combined); summary(fit_uncertainty_confidence2)
fit_uncertainty_confidence3 <- lmer(scale(perceived_confidence_pos_cluster3) ~ scale(perceived_certaintyE1_neg_cluster2) * scale(KLd_HRF) + (1 + scale(perceived_certaintyE1_neg_cluster2) * scale(KLd_HRF) | sID), data = df_combined); summary(fit_uncertainty_confidence3)
fit_uncertainty_confidence4 <- lmer(scale(perceived_confidence_pos_cluster4) ~ scale(perceived_certaintyE1_neg_cluster2) * scale(KLd_HRF) + (1 + scale(perceived_certaintyE1_neg_cluster2) * scale(KLd_HRF) | sID), data = df_combined); summary(fit_uncertainty_confidence4)
# No interaction


# Correlate subject-level relationship between ROI-activity related to uncertainty and peer confidence with subject-level average KL divergence 
# ==============================================================================

ranefs2 <- ranef(fit_uncertainty_confidence2)$sID[[2]]# Extract subject level beta confidence ~ low certainty
ranefs3 <- ranef(fit_uncertainty_confidence3)$sID[[2]]
ranefs4 <- ranef(fit_uncertainty_confidence4)$sID[[2]]

df_mean <- df_params %>%                              # Calculate subject level mean KL divergence
  group_by(sID) %>%
  summarise(mean_KLd = mean(KLd, na.rm = TRUE))
df_mean$ranefs2 <- ranefs2                            # Combine ranefs with mean KL divergence
df_mean$ranefs3 <- ranefs3      
df_mean$ranefs4 <- ranefs4      

cor.test(df_mean$ranefs2, df_mean$mean_KLd)           # Correlate betas with mean KL divergence: r = 0.16, p = 0.241
cor.test(df_mean$ranefs3, df_mean$mean_KLd)           # r = 0.09, p = 0.520
cor.test(df_mean$ranefs4, df_mean$mean_KLd)           # r = 0.08, p = 0.545

