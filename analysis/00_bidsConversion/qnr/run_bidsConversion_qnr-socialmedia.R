# This script preprocesses data from the Social Network/Media Form from Qualtrics. 
#
# INPUT: 
# There are two files containing raw Qualtrics data, an old and a new one that can be found in the fMRI Mushroom folder (raw_data). 
# The old file contains data from the first set of participants, before we changed Qualtrics account. 
# The new file contains data from all participants who completed the questionnaire after the account-change.
# There are no differences in questions/flow/etc. between the two questionnaires. 
#
# OUTPUT: 
# This script creates one csv file that includes answers from participants who 
# finished the form, from both data files.
# Variables of no interest are removed and some variable names have been renamed.
# A file describing each variable can be found in the same folder as the outputted csv file. 
#
# Written by Lucia Hendrikse, Fleur Korzilius & Lieke Hofmans, October 2022



# LOAD REQUIRED PACKAGES -------------------------------------------------------
list.of.packages <- c("tidyverse", "dplyr", "readr", "data.table", "naniar")
new.packages <- list.of.packages[!(list.of.packages %in% installed.packages()[,"Package"])]
if(length(new.packages)) install.packages(new.packages)

library(tidyverse)
library(dplyr)
library(readr)
library(data.table)
library(naniar)
# ------------------------------------------------------------------------------


# SET WORKING DIRECTORY --------------------------------------------------------
#setwd("Z:/fMRI Projects/fMRI Project Mushroom/SocialNetwork data/raw_data")
dir_rawdata <- "S:/fMRI Projects/fMRI Project Mushroom/raw_data/group" # hah, maybe working with Rprojects wouldn't be such a bad idea...
dir_bids <- "S:/fMRI Projects/fMRI Project Mushroom/bids/group/" 
dir_checklistfile <- "S:/fMRI Projects/fMRI Project Mushroom/Participant recruitment/Checklistbestand.csv"# this is usually pw protected; convert to readable csv first (and remove when no longer needed)
# ------------------------------------------------------------------------------


### IMPORT RAW DATA ------------------------------------------------------------
SocialMediaDataNew <- read.csv(file.path(dir_rawdata, "SocialNetwork - NEW Mushroom_September 29, 2022_08.00.csv"), na.strings = c("", "NA"), encoding = "UTF-8") # new questionnaire
SocialMediaDataOld <- read.csv(file.path(dir_rawdata, "SocialNetwork - Mushroom_September 29, 2022_07.09.csv"), na.strings = c("", "NA"), encoding = "UTF-8") # old questionnaire
checklistfile <-
  read.csv(dir_checklistfile,
           sep = ";",
           na.strings = c("", "NA")) 
# ------------------------------------------------------------------------------


### CLEAN QUESTIONNAIRE DATA ---------------------------------------------------

# Qualtrics inserted whitespace in front of ResID in old questionnaire --> remove whitespace
SocialMediaDataOld$ResID <-
  trimws(SocialMediaDataOld$ResID, which = c("both"))
# Combine old and new questionnaires
SocialMediaDataComplete <-
  rbind(SocialMediaDataNew, SocialMediaDataOld)
# Rename 1 ResID (was incorrectly inserted in raw data)
SocialMediaDataComplete <- SocialMediaDataComplete %>%
  mutate(ResID = recode(ResID, "r_2ehje1jzavhgcuc" = "R_2EhjE1jzAVhgcuC"))
# Remove participants who did not completely fill in questionnaire and variables of no interest 
SocialMediaDataComplete <- SocialMediaDataComplete %>%
  filter(Finished == "True", !is.na(ResID)) %>%
  filter(ResID != "R_2EuB0q2yaIOnGZv") %>% # this was one of the experimenters' tests   
  select(RecordedDate, Duration..in.seconds., GREWUP_1:Educatie, -empty)

# Test if ResIDs in social network data match those in checklist file
checklistfile <- checklistfile %>%
  filter(!is.na(Vragenlijst.ingevuld..datum.))
which(!SocialMediaDataComplete$ResID %in% checklistfile$ResID)

# Replace ResIDs with subject ID and bring to front
SocialMediaDataComplete$ResID <- checklistfile$PPnr[match(SocialMediaDataComplete$ResID, checklistfile$ResID)]
SocialMediaDataComplete <- SocialMediaDataComplete %>%
  rename(sID = ResID) %>%
  relocate(sID) %>%
  arrange(sID)

# Reformat RecordedDate to time between completion of questionnaire and fMRI scan
OverviewTestDates <- SocialMediaDataComplete[,c("sID", "RecordedDate")]
OverviewTestDates$ScanDate <- checklistfile$MRI.afspraak..datum.[match(SocialMediaDataComplete$sID, checklistfile$PPnr)]
OverviewTestDates$RecordedDate <- sub(" .*", "", OverviewTestDates$RecordedDate)
OverviewTestDates$ScanDate <- sub(" .*", "", OverviewTestDates$ScanDate)
OverviewTestDates$RecordedDate <- strptime(as.character(OverviewTestDates$RecordedDate), "%Y-%m-%d")
OverviewTestDates$ScanDate <- strptime(as.character(OverviewTestDates$ScanDate), "%d-%m-%Y")
SocialMediaDataComplete$RecordedDate <- as.numeric(difftime(OverviewTestDates$ScanDate, OverviewTestDates$RecordedDate))
SocialMediaDataComplete <- rename(SocialMediaDataComplete, test_delay_days = RecordedDate)

# Rename variables 
# -as required by Digymatex consortium
dimy_variabels <- c("autonomy_c1", "autonomy_c2", "autonomy_c3",	"autonomy_w1",	"autonomy_w2",	"autonomy_w3",	
                    "literacy_1",	"literacy_2",	"literacy_3",	"growth_1",	"growth_2",	"growth_3",	"risk_1",	"risk_2",	"risk_3",	
                    "emotion_n1",	"emotion_n2",	"emotion_n3",	"emotion_a1",	"emotion_a2",	"emotion_a3",	
                    "support_1", "support_2",	"support_3",	"support_4",	"respect_1",	"respect_2",	"respect_3",	"respect_4", 
                    "citizenship_1", "citizenship_2", "citizenship_3")
setnames(SocialMediaDataComplete, 
         old = colnames(subset(SocialMediaDataComplete, select = Autonomy.in.Choice_1:Digital.Citizenship_3)), 
         new = dimy_variabels)
# -to English
setnames(SocialMediaDataComplete, 
         old = c("Duration..in.seconds.", "Q89", "Geslacht", "Leeftijd", "Educatie"), 
         new = c("duration_secs", "TTNR", "gender", "age", "education"))

# Recode values to numeric
recode_media_freq <- function(df_col) (recode(df_col, "Weet ik niet" = 0, "Minder vaak" = 1, "Om de paar weken" = 2, "1-2 dagen per week" = 3, "3-5 dagen per week" = 4, 
                                         "Ongeveer eens per dag" = 5, "2-3 keer per dag" = 6, "11-50 keer per dag" = 7, "50-100 keer per dag" = 8, "Vaker dan 100 keer per dag" = 9))
recode_CIUS <- function(df_col) (recode(df_col, "nooit (1)" = 1, "zelden (2)" = 2, "soms (3)" = 3, "vaak (4)" = 4, "heel vaak (5)" = 5))
recode_dymi <- function(df_col) (recode(df_col, "Nooit" = 1, "Zelden" = 2, "Soms" = 3, "Vaak" = 4, "Altijd" = 5, 
                                        "Helemaal niet waar voor mij" = 1, "Niet echt waar voor mij" = 2, "Niet waar of onwaar voor mij" = 3, "Meestal waar voor mij" = 4, "Erg waar voor mij" = 5))

SocialMediaDataComplete <- SocialMediaDataComplete %>% mutate(
    SCWEEK=recode(SCWEEK, "Geen - Ik word niet eenzaam" = 1, "In de buurt van mensen zijn, zelfs als ik niet met ze praat" = 2, 
                       "Informele praatjes, b.v. met een winkelbediende of kapper" = 3,  "…Èn gesprek per week met een vriend / vrienden" = 4, 
                       "Twee of drie gesprekken per week met een vriend / vrienden" = 5, "…Èn gesprek per dag met een vriend / vrienden" = 6, 
                       "Twee of drie gesprekken per dag met een vriend / vrienden" = 7, "Meer dan bovenstaande" = 8),
    MEDIA_OTHER1=recode(MEDIA_OTHER1, "Ja" = 1, "Nee" = 0),
    FB1=recode(FB1, "Weet ik niet" = 0, "Nooit" = 1, "Bijna nooit" = 2, "Soms" = 3, "Vaak" = 4),
    MEDIA_USE1=recode(MEDIA_USE1, "nooit" = 1, "1 dag per week of minder" = 2, "2-3 dagen per week" = 3, "(bijna) dagelijks" = 4),
    MEDIA_USE2=recode(MEDIA_USE2, "Ik gebruik geen social media" = 1, "minder dan 1 uur" = 2, "1-2 uur" = 3, "2-4 uur" = 4, "4-6 uur" = 5, "6-8 uur" = 6, "8 uur of meer" = 7),
    gender=recode(gender, "man" = 1, "Man" = 1, "vrouw" = 2, "Vrouw" = 2, "Anders" = 3),
    education=recode(education, "Geen / Basis onderwijs" = 1, "VMBO / MAVO / LBO" = 2, "HAVO" = 3, "VWO/Gymnasium" = 4, "MBO" = 5, "HBO (bachelor/master)" = 6, "WO (bachelor/master)" = 7, "wo (bachelor/master)" = 7),
    across(matches("MEDIA_FREQ"), recode_media_freq),
    across(matches("CIUS"), recode_CIUS),
    across(matches(dimy_variabels), recode_dymi)
)
# ------------------------------------------------------------------------------


# CREATE COMPLEMENTARY DEIDENTIFIED DATAFILE -----------------------------------
SocialMediaDataDeidentified <- SocialMediaDataComplete %>% 
  replace_with_na_at(c("GREWUP_1", "NSSQ", "DBNR", "MEDIA_NAMES"), condition = ~is.character(.x))
# ------------------------------------------------------------------------------


# SAVE DATA IN BIDS FOLDER -----------------------------------------------------
write_csv(SocialMediaDataComplete, file.path(dir_bids, "group_qnr-socialmedia.csv"))
write_csv(SocialMediaDataDeidentified, file.path(dir_bids, "group_qnr-socialmedia_deidentified.csv"))
# ------------------------------------------------------------------------------

