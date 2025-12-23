library("rjson")
library("reshape2")
library("tidyverse")

# Preprocessed fMRI data was quality checked by 2 raters at first, 
# as either "yes" (=include), "no" (=exclude), or "uncertain" (=discuss).
# Quite some image had a regional drop of signal to noise, and were rated as "uncertain".
# After consultation with Steven Scholte, head MRI at the institute, it was decided to keep these subjects, 
# because some signal is better than no signal.
# Lieke than rated the images again, mainly focusing on movement and the carpetplot. 

# New ratings Rater 3 (Lieke Hofmans)
ratings_3 <- fromJSON(file = "S:/fMRI Projects/fMRI Project Mushroom/bids/derivatives/mri/fmriprep/exclude.json")
ratings_3 <- as.data.frame(ratings_3)
# remove t1 information (which was good for everyone)
skull_strip_elements <- which(ratings_3 == "skull_strip_report")
skull_strip_elements <- c(skull_strip_elements-1, skull_strip_elements, skull_strip_elements+1)
t1_norm_rpt_elements <- which(ratings_3 == "t1_norm_rpt")
t1_norm_rpt_elements <- c(t1_norm_rpt_elements-1, t1_norm_rpt_elements, t1_norm_rpt_elements+1)
ratings_3 <- ratings_3[c(-skull_strip_elements, -t1_norm_rpt_elements)]
# reformat data
run <- t(ratings_3[, grepl("run", names(ratings_3))])
sub <- t(ratings_3[, grepl("sub", names(ratings_3))])
type <- t(ratings_3[, grepl("type", names(ratings_3))])
rating <- t(ratings_3[, grepl("rating", names(ratings_3))])
ratings_3 <- as.data.frame(cbind(sub, run, type, rating))
colnames(ratings_3) <- c("sub", "run", "type", "rating")


# Save which participants should be excluded
failed_QC <- unique(ratings_3$sub[ratings_3$rating == "bad"])
participants_to_exclude <- read.csv("S:/fMRI Projects/fMRI Project Mushroom/analysis/participants_to_exclude.csv")
participants_to_exclude <- add_row(participants_to_exclude, exclude_fmri = as.numeric(failed_QC), reason = rep("Failed fmriprep QC", length(failed_QC)))
write_csv(participants_to_exclude, "S:/fMRI Projects/fMRI Project Mushroom/analysis/participants_to_exclude.csv")

