#!/bin/bash
#######################################################################################################
# Script to preprocess already bidsified nifti files using fmriprep
#######################################################################################################

# Installation requirements:
#   - python3 (including pip3)
#   - docker (to install Halfpipe)
#   - HalfPipe

# If you don't want to waste your time by moving files from your project folder to a folder on the
# server, you can mount (map) your project folder to one of the directories on the server: 
# sudo mount -t cifs "//fmgstorage.fmg.uva.nl/psychology$/fMRI Projects/fMRI Project Mushroom" /home/lhofman/projects -o username=lhofman,domain=uva,noexec,uid=$(id -u),gid=$(id -g)


############################################# USER INPUT ##############################################
#######################################################################################################

# Which steps do you want to run (0 = no, 1 = yes)?
do_fMRIPrep=1 # Run preprocessing using HALFipe

# Define directories and filenames
dir_halfpipe='/home/lhofman/HALFpipe/halfpipe-halfpipe-latest.simg' # where your halfpipe program is located
subjects_to_run='HALFpipe_subjectsToRun.txt' # HALFpipe needs an explicit list of subjects if there is already some preprocessed data in the bids folder.

#######################################################################################################
#######################################################################################################

##################################### Run HALFpipe's fMRIPrep #########################################

if [[ $do_fMRIPrep == 1 ]]; then
    #singularity run --contain --cleanenv --bind /:/ext /home/lhofman/HALFpipe/halfpipe-halfpipe-latest.simg --keep none #--subject-list $dir_subject_list
    singularity run --contain --cleanenv --bind /:/ext $dir_halfpipe --keep none
    # command for fmriprep, if needed:
    #fmriprep-docker --fs-license-file "/home/lhofman/Documents/bids_withTopup/bids_STC_ICA_APPA_test/license.txt" --use-aroma "/home/lhofman/Documents/bids_withTopup/bids_STC_ICA_APPA_test" "/home/lhofman/Documents/bids_withTopup/bids_STC_ICA_APPA_test/derivatives"
fi

#######################################################################################################





