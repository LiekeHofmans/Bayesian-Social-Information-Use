#!/bin/bash

# Before running a batch file, make sure there is already a .fsf file for 1 subject of the second-level analysis.
# You can use this .fsf file as template input for the other subjects, as is done by the batch file.
# - To create the initial .fsf file, open fsl by typing <fsl> from the command line. Select FEAT FMRI analysis.
# - From the dropdown menu in the upper right of the Data tab, change “First-level analysis” to “Higher-level analysis”.
# - Keep "Inputs are lower-level FEAT directories".
# - Set number of inputs to number of runs.
# - Select the feat directories belonging to the runs you want to analyze.
# - Leave Output directory empty
# - Go the stats tab and select Fixed effects from the dropdown menu.
# - Click on Full model setup
# - Average runs by setting Number of main EVs to 1, and setting all inputs/runs to 1. 
# - Go to Contrasts tab and keep title = group mean and EV1 = 1. 
# - Click Done and inspect the design matrix window. If ok, you can close this.
# - In the post-stats tab, set Thresholding to none (no need for any stats here) and uncheck the create time series plots (they take up way too much space).
# - Click Save to save the .fsf file as 2ndLevel.fsf in the scripts folder.
# - Adapt fields that change per subject to tamplate names (e.g. {ANATFILE}; see below).

############################################ USER INPUT ##############################################
#######################################################################################################

# Which steps do you want to run (0 = no, 1 = yes)?
do_certaintyE1_confidence=0
do_perceived_certaintyE1_confidence=0
do_KLdivergence_post2pr=0
do_perceived_certaintyE1_confidence_KLdivergence=0
do_stayBias=0
do_QA=1 # run quality check of second level analysis

# Define directories and filenames
dir_bids='/home/lhofman/Projects/mushroom_tux/bids' # where the bids folder is
dir_bids_firstLevel='/home/lhofman/Projects/mushroom_tux/bids/derivatives/first_level' # where the bids first level folder is
dir_anat='/usr/local/fsl/data/standard/MNI152_T1_2mm_brain' # where the standard MNI brain can be found
dir_exclusions='/home/lhofman/fmg-research-mount/mushroom/analysis/participants_to_exclude.csv' # where the list with participants to exclude can be found

dir_fsf_certaintyE1_confidence='/home/lhofman/Projects/mushroom_tux/analysis/second_level/scripts/certaintyE1_confidence.fsf' 
fsf_certaintyE1_confidence='certaintyE1_confidence.fsf'
dir_fsf_perceived_certaintyE1_confidence='/home/lhofman/Projects/mushroom_tux/analysis/second_level/scripts/perceived_certaintyE1_confidence.fsf' 
fsf_perceived_certaintyE1_confidence='perceived_certaintyE1_confidence.fsf'
dir_fsf_KLdivergence_post2pr='/home/lhofman/Projects/mushroom_tux/analysis/second_level/scripts/KLdivergence_post2pr.fsf' 
fsf_KLdivergence_post2pr='KLdivergence_post2pr.fsf'
dir_fsf_perceived_certaintyE1_confidence_KLdivergence='/home/lhofman/Projects/mushroom_tux/analysis/second_level/scripts/perceived_certaintyE1_confidence_KLdivergence.fsf' 
fsf_perceived_certaintyE1_confidence_KLdivergence='perceived_certaintyE1_confidence_KLdivergence.fsf'
dir_fsf_stayBias='/home/lhofman/Projects/mushroom_tux/analysis/second_level/scripts/stayBias.fsf' 
fsf_stayBias='stayBias.fsf'

# How many cores do you want to use?
# Pick a sensible number of cores while leaving enough space for others to do their stuff and does not overburden RAM.
# 1 subject takes about 4 minutes to process.
# nproc # gives number of total logical cores; 
n_cores=20 #10 # 20


#######################################################################################################
#######################################################################################################


# Load list with exclusions
exclusions=( $(tail -n +2 $dir_exclusions | cut -d ',' -f3) )



#######################################################################################################
# Run second level analysis for certainty and confidence 
#######################################################################################################
if [[ $do_certaintyE1_confidence == 1 ]]; then 
   
    # Loop over subjects
    for subdir in $dir_bids_firstLevel/sub-* ; do  
        (           
        sub="${subdir##*/}" #keep only subject ID as sub-xxx, without full directory
        subnr=$(echo $subdir | sed 's/[^0-9]*//g') #keep only subject ID as xxx, without full directory
        subnr="${subnr#"${subnr%%[!0]*}"}" # remove leading zeros
        
        # Only running analysis for participants not in exclusion list
        if printf '%s\n' ${exclusions[@]} | grep -q --line-regexp $subnr; then
            echo "===> $sub is in exclusion list; Skipping second-level analysis."
        else
            now=`date`
            echo "===> Starting processing of $sub at $now"

            # Copy the design file into the subject directory
            outputdir=$dir_bids/derivatives/second_level/$sub/certaintyE1_confidence
            mkdir -p $outputdir
            cp $dir_fsf_certaintyE1_confidence $outputdir
        
            # Adapt subject-specific information in the design file                       
            INPUT1=$subdir/certaintyE1_confidence/run-1_output.feat
            INPUT2=$subdir/certaintyE1_confidence/run-2_output.feat
            INPUT3=$subdir/certaintyE1_confidence/run-3_output.feat

            sed -i -e "s|{OUTPUTDIR}|$outputdir|g" \
                -e "s|{ANATFILE}|$dir_anat|g" \
                -e "s|{INPUT1}|$INPUT1|g" \
                -e "s|{INPUT2}|$INPUT2|g" \
                -e "s|{INPUT3}|$INPUT3|g" \
                $outputdir/$fsf_certaintyE1_confidence
                
            # Run second level analysis
            feat $outputdir/$fsf_certaintyE1_confidence              
            now=`date` 
            echo "===> feat for $sub has finished at $now" 
        fi
        ) & 
        
        # allow to execute up to $n_cores jobs in parallel
        if [[ $(jobs -r -p | wc -l) -ge $n_cores ]]; then
            wait -n
        fi
         
    done      
    wait    
fi
#######################################################################################################



#######################################################################################################
# Run second level analysis for perceived number of mushrooms for self and other (takes about 1 min per subject).
#######################################################################################################
if [[ $do_perceived_certaintyE1_confidence == 1 ]]; then 
   
    # Loop over subjects
    for subdir in $dir_bids_firstLevel/sub-* ; do  
        (           
        sub="${subdir##*/}" #keep only subject ID as sub-xxx, without full directory
        subnr=$(echo $subdir | sed 's/[^0-9]*//g') #keep only subject ID as xxx, without full directory
        subnr="${subnr#"${subnr%%[!0]*}"}" # remove leading zeros
        
        # Only running analysis for participants not in exclusion list
        if printf '%s\n' ${exclusions[@]} | grep -q --line-regexp $subnr; then
            echo "===> $sub is in exclusion list; Skipping second-level analysis."
        else
            now=`date`
            echo "===> Starting processing of $sub at $now"

            # Copy the design file into the subject directory
            outputdir=$dir_bids/derivatives/second_level/$sub/perceived_certaintyE1_confidence
            mkdir -p $outputdir
            cp $dir_fsf_perceived_certaintyE1_confidence $outputdir
        
            # Adapt subject-specific information in the design file                       
            INPUT1=$subdir/perceived_certaintyE1_confidence/run-1_output.feat
            INPUT2=$subdir/perceived_certaintyE1_confidence/run-2_output.feat
            INPUT3=$subdir/perceived_certaintyE1_confidence/run-3_output.feat

            sed -i -e "s|{OUTPUTDIR}|$outputdir|g" \
                -e "s|{ANATFILE}|$dir_anat|g" \
                -e "s|{INPUT1}|$INPUT1|g" \
                -e "s|{INPUT2}|$INPUT2|g" \
                -e "s|{INPUT3}|$INPUT3|g" \
                $outputdir/$fsf_perceived_certaintyE1_confidence
                
            # Run second level analysis
            feat $outputdir/$fsf_perceived_certaintyE1_confidence        
            now=`date` 
            echo "===> feat for $sub has finished at $now" 
        fi 
        
        ) & 
        
        # allow to execute up to $n_cores jobs in parallel
        if [[ $(jobs -r -p | wc -l) -ge $n_cores ]]; then
            wait -n
        fi
         
    done      
    wait    
fi
#######################################################################################################


#######################################################################################################
# Run second level analysis for perceived number of mushrooms for self and other and KL divergence (takes about 1 min per subject).
#######################################################################################################
if [[ $do_perceived_certaintyE1_confidence_KLdivergence == 1 ]]; then 
   
    # Loop over subjects
    for subdir in $dir_bids_firstLevel/sub-* ; do  
        (           
        sub="${subdir##*/}" #keep only subject ID as sub-xxx, without full directory
        subnr=$(echo $subdir | sed 's/[^0-9]*//g') #keep only subject ID as xxx, without full directory
        subnr="${subnr#"${subnr%%[!0]*}"}" # remove leading zeros
        
        # Only running analysis for participants not in exclusion list
        if printf '%s\n' ${exclusions[@]} | grep -q --line-regexp $subnr; then
            echo "===> $sub is in exclusion list; Skipping second-level analysis."
        else
            now=`date`
            echo "===> Starting processing of $sub at $now"

            # Copy the design file into the subject directory
            outputdir=$dir_bids/derivatives/second_level/$sub/perceived_certaintyE1_confidence_KLdivergence
            mkdir -p $outputdir
            cp $dir_fsf_perceived_certaintyE1_confidence_KLdivergence $outputdir
        
            # Adapt subject-specific information in the design file                       
            INPUT1=$subdir/perceived_certaintyE1_confidence_KLdivergence/run-1_output.feat
            INPUT2=$subdir/perceived_certaintyE1_confidence_KLdivergence/run-2_output.feat
            INPUT3=$subdir/perceived_certaintyE1_confidence_KLdivergence/run-3_output.feat

            sed -i -e "s|{OUTPUTDIR}|$outputdir|g" \
                -e "s|{ANATFILE}|$dir_anat|g" \
                -e "s|{INPUT1}|$INPUT1|g" \
                -e "s|{INPUT2}|$INPUT2|g" \
                -e "s|{INPUT3}|$INPUT3|g" \
                $outputdir/$fsf_perceived_certaintyE1_confidence_KLdivergence
                
            # Run second level analysis
            feat $outputdir/$fsf_perceived_certaintyE1_confidence_KLdivergence       
            now=`date` 
            echo "===> feat for $sub has finished at $now" 
        fi 
        
        ) & 
        
        # allow to execute up to $n_cores jobs in parallel
        if [[ $(jobs -r -p | wc -l) -ge $n_cores ]]; then
            wait -n
        fi
         
    done      
    wait    
fi
#######################################################################################################



#######################################################################################################
# Run second level analysis for perceived number of mushrooms for self and other (takes about 1 min per subject).
#######################################################################################################
if [[ $do_KLdivergence_post2pr == 1 ]]; then 
   
    # Loop over subjects
    for subdir in $dir_bids_firstLevel/sub-* ; do  
        (           
        sub="${subdir##*/}" #keep only subject ID as sub-xxx, without full directory
        subnr=$(echo $subdir | sed 's/[^0-9]*//g') #keep only subject ID as xxx, without full directory
        subnr="${subnr#"${subnr%%[!0]*}"}" # remove leading zeros
        
        # Only running analysis for participants not in exclusion list
        if printf '%s\n' ${exclusions[@]} | grep -q --line-regexp $subnr; then
            echo "===> $sub is in exclusion list; Skipping second-level analysis."
        else
            now=`date`
            echo "===> Starting processing of $sub at $now"

            # Copy the design file into the subject directory
            outputdir=$dir_bids/derivatives/second_level/$sub/KLdivergence_post2pr
            mkdir -p $outputdir
            cp $dir_fsf_KLdivergence_post2pr $outputdir
        
            # Adapt subject-specific information in the design file                       
            INPUT1=$subdir/KLdivergence_post2pr/run-1_output.feat
            INPUT2=$subdir/KLdivergence_post2pr/run-2_output.feat
            INPUT3=$subdir/KLdivergence_post2pr/run-3_output.feat

            sed -i -e "s|{OUTPUTDIR}|$outputdir|g" \
                -e "s|{ANATFILE}|$dir_anat|g" \
                -e "s|{INPUT1}|$INPUT1|g" \
                -e "s|{INPUT2}|$INPUT2|g" \
                -e "s|{INPUT3}|$INPUT3|g" \
                $outputdir/$fsf_KLdivergence_post2pr
                
            # Run second level analysis
            feat $outputdir/$fsf_KLdivergence_post2pr  
            now=`date` 
            echo "===> feat for $sub has finished at $now" 
        fi 
        
        ) & 
        
        # allow to execute up to $n_cores jobs in parallel
        if [[ $(jobs -r -p | wc -l) -ge $n_cores ]]; then
            wait -n
        fi
         
    done      
    wait    
fi
#######################################################################################################


#######################################################################################################
# Run second level analysis for stay bias (takes about 1 min per subject).
#######################################################################################################
if [[ $do_stayBias == 1 ]]; then 
   
    # Loop over subjects
    for subdir in $dir_bids_firstLevel/sub-* ; do  
        (           
        sub="${subdir##*/}" #keep only subject ID as sub-xxx, without full directory
        subnr=$(echo $subdir | sed 's/[^0-9]*//g') #keep only subject ID as xxx, without full directory
        subnr="${subnr#"${subnr%%[!0]*}"}" # remove leading zeros
        
        # Only running analysis for participants not in exclusion list
        if printf '%s\n' ${exclusions[@]} | grep -q --line-regexp $subnr; then
            echo "===> $sub is in exclusion list; Skipping second-level analysis."
        else
            now=`date`
            echo "===> Starting processing of $sub at $now"

            # Copy the design file into the subject directory
            outputdir=$dir_bids/derivatives/second_level/$sub/stayBias
            mkdir -p $outputdir
            cp $dir_fsf_stayBias $outputdir
        
            # Adapt subject-specific information in the design file                       
            INPUT1=$subdir/stayBias/run-1_output.feat
            INPUT2=$subdir/stayBias/run-2_output.feat
            INPUT3=$subdir/stayBias/run-3_output.feat

            sed -i -e "s|{OUTPUTDIR}|$outputdir|g" \
                -e "s|{ANATFILE}|$dir_anat|g" \
                -e "s|{INPUT1}|$INPUT1|g" \
                -e "s|{INPUT2}|$INPUT2|g" \
                -e "s|{INPUT3}|$INPUT3|g" \
                $outputdir/$fsf_stayBias
                
            # Run second level analysis
            feat $outputdir/$fsf_stayBias 
            now=`date` 
            echo "===> feat for $sub has finished at $now" 
        fi 
        
        ) & 
        
        # allow to execute up to $n_cores jobs in parallel
        if [[ $(jobs -r -p | wc -l) -ge $n_cores ]]; then
            wait -n
        fi
         
    done      
    wait    
fi
#######################################################################################################



#######################################################################################################
# Run quality check second level
#######################################################################################################
if [[ $do_QA == 1 ]]; then 
    mkdir -p $dir_bids/derivatives/second_level/QA
    touch $dir_bids/derivatives/second_level/QA/lev2_QA_certaintyE1_confidence.html
    touch $dir_bids/derivatives/second_level/QA/lev2_QA_perceived_certaintyE1_confidence.html
    touch $dir_bids/derivatives/second_level/QA/lev2_QA_KLdivergence_post2pr.html
    touch $dir_bids/derivatives/second_level/QA/lev2_QA_perceived_certaintyE1_confidence_KLdivergence.html
    touch $dir_bids/derivatives/second_level/QA/lev2_QA_stayBias.html
    python3 QA_2ndLevel.py # saves html file with images from all subjects in bids/derivatives/second_level
    # make sure to adapt python script to current models
fi
#######################################################################################################



