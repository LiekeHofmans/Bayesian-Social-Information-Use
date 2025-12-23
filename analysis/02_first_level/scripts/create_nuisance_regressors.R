# This script creates a tsv file with the confound regressors for each subject and run. 
#
# INPUT: 
# Per subject and run, there is one input file with all the confound regressors from HALFpipe:
# - sub-xxx_task-mushroom_run-x_setting-preproc_desc-confounds_regressors.tsv
#
# OUTPUT: 
# Per subject and run, an output file is created with the selected confounds (with or without ICA-AROMA noise components).
#
# Written by Lieke Hofmans, October 2023

library(readr)
library(dplyr)

# SET DIRECTORIES AND FILES ----------------------------------------------------
dir_HALFpipe <- "/home/lhofman/Projects/mushroom_tux/bids/derivatives/halfpipe"
list_confound_files <- list.files(path = dir_HALFpipe, pattern = "_setting-preproc_desc-confounds_regressors.tsv", full.names = TRUE, recursive = TRUE)
# ------------------------------------------------------------------------------

# CREATE FILES -----------------------------------------------------------------
for (iFile in list_confound_files) {
  # import data
  confounds <- read_tsv(iFile, show_col_types = FALSE) 
  # select confounds
  regular <- confounds[,c("trans_x", "trans_y", "trans_z", "rot_x", "rot_y", "rot_z", "framewise_displacement", "csf", "white_matter")]
  max_acompcor <- max(parse_number(names(select(confounds, starts_with("a_comp_cor_0")))))
  max_acompcor <- min(max_acompcor, 6) # if 6 or more components available, select first 6, otherwise select up to max available.
  acompcor <- select(confounds, starts_with("a_comp_cor_01"):ends_with(paste0("a_comp_cor_0", max_acompcor)))
  ICA_aroma <- confounds[,grepl("aroma_noise_",names(confounds))]
  confounds_noAROMA <- do.call("cbind", list(regular, acompcor))
  confounds_withAROMA <- do.call("cbind", list(regular, acompcor, ICA_aroma))
  # write to file
  file_location <- paste0(sub(pattern = "(.*)\\..*$", replacement = "\\1", iFile), "_selection_no_ICAAROMA.tsv")
  write.table(confounds_noAROMA, file = file_location, row.names=FALSE, col.names = FALSE, sep="\t")
  file_location <- paste0(sub(pattern = "(.*)\\..*$", replacement = "\\1", iFile), "_selection_with_ICAAROMA.tsv")
  write.table(confounds_withAROMA, file = file_location, row.names=FALSE, col.names = FALSE, sep="\t")
}
# ------------------------------------------------------------------------------