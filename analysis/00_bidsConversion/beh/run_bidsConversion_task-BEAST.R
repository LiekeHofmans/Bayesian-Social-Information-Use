# This script preprocesses data from the BEAST task, imported from Lioness. 
#
# INPUT: 
# One file containing raw data from the BEAST task (raw_data). 
#
# OUTPUT: 
# This script creates one csv file that includes task parameters and participant responses. 
# Variables of no interest are removed and some variable names have been renamed.
# A file describing each variable can be found in the same folder as the outputted csv file. 
#
# Written by Lieke Hofmans, October 2022



# LOAD REQUIRED PACKAGES -------------------------------------------------------
list.of.packages <- c("tidyverse", "dplyr", "readr", "openxlsx", "zoo")
new.packages <- list.of.packages[!(list.of.packages %in% installed.packages()[,"Package"])]
if(length(new.packages)) install.packages(new.packages)

library(tidyverse)
library(dplyr)
library(readr)
library(openxlsx)
library(zoo)
# ------------------------------------------------------------------------------


# SET WORKING DIRECTORY --------------------------------------------------------
dir_rawdata <- "S:/fMRI Projects/fMRI Project Mushroom/raw_data/group/LIONESS Results - BEAST_mushroom 20221006_0303.xlsx" # hah, maybe working with Rprojects wouldn't be such a bad idea...
dir_bids <- "S:/fMRI Projects/fMRI Project Mushroom/bids/group/" 
# ------------------------------------------------------------------------------


### IMPORT RAW DATA ------------------------------------------------------------
BEASTdata <- read.xlsx(dir_rawdata, sheet = "decisions", na.strings = c("", "NA")) 
# ------------------------------------------------------------------------------


### CLEAN DATA -----------------------------------------------------------------
# Add subject number to each row
BEASTdata$subjectID <- na.locf(BEASTdata$subjectID)
# select only relevant variabels adn rename for clarity
BEASTdata <- BEASTdata %>%
  select(subjectID, period, nAnimals:estimate_revised, time_estimate, time_revise, confidence1, confidence2, points) %>%
  rename(sID = subjectID, 
         trial = period,
         n_animals = nAnimals,
         social_info = socialInfo, 
         confidence_estimate = confidence1, # In het algemeen, hoe zeker voelde jij je over hoe goed je eerste schatting was (voor het zien van de schatting van de eerdere deelnemer)? (Helemaal niet zeker, Een beetje zeker, Best wel zeker, Heel zeker)
         confidence_revise = confidence2, # In het algemeen, hoe zeker voelde jij je over hoe goed je tweede schatting was? (Helemaal niet zeker, Een beetje zeker, Best wel zeker, Heel zeker)
         bonus_amount = points) %>%
  arrange(sID) %>%
  filter(!is.na(n_animals))
# reformat bonus points to euro
BEASTdata$bonus_amount = BEASTdata$bonus_amount / 100

  
# SAVE DATA IN BIDS FOLDER -----------------------------------------------------
write_csv(BEASTdata, file.path(dir_bids, "group_task-BEAST.csv"))
# ------------------------------------------------------------------------------
  