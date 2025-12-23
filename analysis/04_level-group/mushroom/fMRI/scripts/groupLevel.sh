#!/bin/bash

# Group level analysis is done in the GUI, seperately for each contrast.
# Again, you can first create a design (fsf) file, to run later on. 
# Here is an example for low - high own certainty contrasts.
# - Open fsl by typing <fsl> from the command line. Select FEAT FMRI analysis.
# - From the dropdown menu in the upper right of the Data tab, change “First-level analysis” to “Higher-level analysis”.
# - Select "Inputs are 3D cope images from FEAT directories" from the dropdown menu.
# - Set number of inputs to number of subjects.
# - Select the cope directories belonging to the subjects you want to analyze:
# - Click the Paste button. In the Terminal, type ls /home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/sub*/output.gfeat/cope1.feat/stats/cope1.nii.gz* | sort -V (or wherever your gfeat dirs live).
# - Copy and paste the list into the Input data window by typing ctrl+y.
# - Set Output directory to /home/lhofman/Projects/mushroom_tux/bids/derivatives/group_level/low_minus_high_certainty
# - Go the stats tab and select FLAME1 from the dropdown menu.
# - Click on Full model setup
# - Average subjects by setting Number of main EVs to 1, and setting all inputs/subjects to 1. 
# - Select use automatic outlier de-weighing
# - Go to Contrasts tab and set title = groupmean>0 and EV1 = 1; title = groupmean<0 and EV1 = -1 for positive and negative contrast.
# - Click Done and inspect the design matrix window. If ok, you can close this.
# - In the post-stats tab, set Thresholding to cluster and keep z-threshold at 3.1 and cluster threshold at 0.05. 
# - Uncheck the create time series plots (they take up way too much space).
# - Click Go or Save to save the .fsf file as group_ownCertainty.fsf in the group_level scripts folder.


############################################ USER INPUT ##############################################
#######################################################################################################

# Which steps do you want to run (0 = no, 1 = yes)?
do_ownCertaintyE1=0 # run group level for certainty (from certaintyE1_confidence model)
do_peerConfidence=0 # run group level for confidence averaged across low and high certainty conditions (from certaintyE1_confidence model)
do_perceived_certaintyE1=0 # run group level for perceived number of mushrooms for self (from perceived_certaintyE1_confidence model)
do_perceived_confidence=0 # run group level for perceived number of mushrooms for other (from perceived_certaintyE1_confidence model)
do_KLdivergence_post2pr=0 # run group level for KL divergence with prior as reference (from KLdivergence_post2pr model)
do_perceived_certaintyE1_fullModel=0 # run group level for perceived number of mushrooms for self (from perceived_certaintyE1_confidence_KLdivergence model)
do_perceived_confidence_fullModel=0 # run group level for perceived number of mushrooms for other (from perceived_certaintyE1_confidence_KLdivergence model)
do_KLdivergence_fullModel=0 # run group level for KL divergence with prior as reference (from perceived_certaintyE1_confidence_KLdivergence model)
do_stayBias=0 # run group level for stay bias (from stayBias model)

do_createMask=0
do_ownCertaintyE1_masked=0
do_peerConfidence_masked=0
do_perceived_certaintyE1_masked=0
do_perceived_confidence_masked=0
do_KLdivergence_post2pr_masked=0
do_perceived_certaintyE1_fullModel_masked=0
do_perceived_confidence_fullModel_masked=0
do_KLdivergence_fullModel_masked=0
do_stayBias_masked=0

# run group analysis using TFCE in a non-parametric way
# Takes way longer than the standard analysis while results were equivalent,
# so did not use this method in the end.
do_ownCertaintyE1_TFCE=0 
do_peerConfidence_masked_TFCE=0

# define directories
dir_designFiles='/home/lhofman/Projects/mushroom_tux/analysis/group_level/scripts'
dir_brainTemplates='/home/lhofman/brain_templates'
dir_examplefunc='/home/lhofman/Projects/mushroom_tux/bids/derivatives/first_level/sub-003/certaintyE1_confidence_interaction/run-1_output.feat/example_func.nii.gz'
dir_output_group='/home/lhofman/Projects/mushroom_tux/bids/derivatives/group_level'
#######################################################################################################



#######################################################################################################
# Run group level feat (takes about 20 min per contrast (positive + negative) including automatic outlier deweighting (otherwise about 2 min)
#######################################################################################################

if [[ $do_ownCertaintyE1 == 1 ]]; then 
    #feat $dir_designFiles/group_ownCertaintyE1.fsf
    feat $dir_designFiles/group_ownCertaintyE1_mainEffects.fsf
    now=`date`     
    echo "===> feat for own certainty has finished at $now" 
fi


if [[ $do_peerConfidence == 1 ]]; then 
    #feat $dir_designFiles/group_peerConfidence.fsf
    feat $dir_designFiles/group_peerConfidence_mainEffects.fsf
    now=`date`   
    echo "===> feat for peer confidence has finished at $now" 
fi


if [[ $do_perceived_certaintyE1 == 1 ]]; then 
    feat $dir_designFiles/group_perceived_certaintyE1.fsf  
    now=`date`  
    echo "===> feat for perceived certainty at E1 has finished at $now" 
fi


if [[ $do_perceived_confidence == 1 ]]; then 
    feat $dir_designFiles/group_perceived_confidence.fsf  
    now=`date`  
    echo "===> feat for perceived confidence at peer estimate has finished at $now" 
fi


if [[ $do_KLdivergence_post2pr == 1 ]]; then 
    feat $dir_designFiles/group_KLdivergence_post2pr.fsf  
    now=`date`  
    echo "===> feat for KL divergence with prior as reference has finished at $now" 
fi


if [[ $do_perceived_certaintyE1_fullModel == 1 ]]; then 
    feat $dir_designFiles/group_perceived_certaintyE1_fullModel.fsf  
    now=`date`  
    echo "===> feat for perceived certainty at E1 has finished at $now" 
fi

if [[ $do_perceived_confidence_fullModel == 1 ]]; then 
    feat $dir_designFiles/group_perceived_confidence_fullModel.fsf  
    now=`date`  
    echo "===> feat for perceived confidence at peer estimate has finished at $now" 
fi

if [[ $do_KLdivergence_fullModel == 1 ]]; then 
    feat $dir_designFiles/group_KLdivergence_fullModel.fsf  
    now=`date`  
    echo "===> feat for KL divergence with prior as reference has finished at $now" 
fi

if [[ $do_stayBias == 1 ]]; then 
    feat $dir_designFiles/group_stayBias.fsf  
    now=`date`  
    echo "===> feat for stayBias has finished at $now" 
fi
#######################################################################################################


#######################################################################################################
# Create mask
#######################################################################################################

if [[ $do_createMask == 1 ]]; then 
    
    # transform all masks to correct dimensions   
    flirt -in $dir_brainTemplates/MNI/MNI_prob_FrontalLobe.nii.gz  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/MNI/MNI_prob_FrontalLobe_transformed.nii.gz \
      -applyxfm -usesqform
      
    flirt -in $dir_brainTemplates/MNI/MNI_prob_Insula.nii.gz  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/MNI/MNI_prob_Insula_transformed.nii.gz \
      -applyxfm -usesqform
         
    flirt -in $dir_brainTemplates/NeubertCingulateOrbitoFrontalParcellation/CingulateOrbitoFrontal_thr50_summaryimage_2mm.nii.gz  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/NeubertCingulateOrbitoFrontalParcellation/CingulateOrbitoFrontal_thr50_summaryimage_2mm_transformed.nii.gz \
      -applyxfm -usesqform
      
    flirt -in $dir_brainTemplates/MarsTPJParcellation/TPJ_thr25_2mm.nii.gz  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/MarsTPJParcellation/TPJ_thr25_2mm_transformed.nii.gz \
      -applyxfm -usesqform
    
    flirt -in $dir_brainTemplates/NeubertVentralFrontalParcellation/VentralFrontal_thr75_summaryimage_2mm.nii.gz  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/NeubertVentralFrontalParcellation/VentralFrontal_thr75_summaryimage_2mm_transformed.nii.gz \
      -applyxfm -usesqform
      
    flirt -in $dir_brainTemplates/SalletDorsalFrontalParcellation/DorsalFrontal_thr50_summaryimage_2mm.nii.gz  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/SalletDorsalFrontalParcellation/DorsalFrontal_thr50_summaryimage_2mm_transformed.nii.gz \
      -applyxfm -usesqform  
       
    flirt -in $dir_brainTemplates/K5wholePutamen.nii  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/K5wholePutamen_transformed.nii \
      -applyxfm -usesqform

    flirt -in $dir_brainTemplates/K5wholeCaudate.nii  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/K5wholeCaudate_transformed.nii \
      -applyxfm -usesqform
      
    flirt -in $dir_brainTemplates/K5vS.nii  \
      -ref $dir_examplefunc \
      -out $dir_brainTemplates/K5vS_transformed.nii \
      -applyxfm -usesqform      
    
    # create left lateralized masks out of right masks
    fslswapdim $dir_brainTemplates/MarsTPJParcellation/TPJ_thr25_2mm_transformed.nii.gz -x y z $dir_brainTemplates/MarsTPJParcellation/TPJ_thr25_2mm_transformed_left.nii.gz
    
    # combine all masks
    fslmaths $dir_brainTemplates/MNI/MNI_prob_FrontalLobe_transformed.nii.gz \
        -add $dir_brainTemplates/MNI/MNI_prob_Insula_transformed.nii.gz \
        -add $dir_brainTemplates/MarsTPJParcellation/TPJ_thr25_2mm_transformed.nii.gz \
        -add $dir_brainTemplates/MarsTPJParcellation/TPJ_thr25_2mm_transformed_left.nii.gz \
        -add $dir_brainTemplates/K5wholePutamen_transformed.nii \
        -add $dir_brainTemplates/K5wholeCaudate_transformed.nii \
        -add $dir_brainTemplates/K5vS_transformed.nii \
        $dir_brainTemplates/combinedMasks
fi 
#######################################################################################################


#######################################################################################################
# Run group level feat, but masked
#######################################################################################################


if [[ $do_ownCertaintyE1_masked == 1 ]]; then 
    feat $dir_designFiles/group_ownCertaintyE1_mainEffects_masked.fsf
    now=`date`     
    echo "===> feat for own certainty has finished at $now" 
fi


if [[ $do_peerConfidence_masked == 1 ]]; then 
    feat $dir_designFiles/group_peerConfidence_mainEffects_masked.fsf
    now=`date`   
    echo "===> feat for peer confidence has finished at $now" 
fi


if [[ $do_perceived_certaintyE1_masked == 1 ]]; then 
    feat $dir_designFiles/group_perceived_certaintyE1_masked.fsf  
    now=`date`  
    echo "===> feat for perceived certainty at E1 has finished at $now" 
fi

if [[ $do_perceived_confidence_masked == 1 ]]; then 
    feat $dir_designFiles/group_perceived_confidence_masked.fsf  
    now=`date`  
    echo "===> feat for perceived confidence at peer estimate has finished at $now" 
fi


if [[ $do_KLdivergence_post2pr_masked == 1 ]]; then 
    feat $dir_designFiles/group_KLdivergence_post2pr_masked.fsf  
    now=`date`  
    echo "===> feat for KL divergence with prior as reference has finished at $now" 
fi

if [[ $do_perceived_certaintyE1_fullModel_masked == 1 ]]; then 
    feat $dir_designFiles/group_perceived_certaintyE1_fullModel_masked.fsf  
    now=`date`  
    echo "===> feat for perceived certainty at E1 has finished at $now" 
fi

if [[ $do_perceived_confidence_fullModel_masked == 1 ]]; then 
    feat $dir_designFiles/group_perceived_confidence_fullModel_masked.fsf  
    now=`date`  
    echo "===> feat for perceived confidence at peer estimate has finished at $now" 
fi

if [[ $do_KLdivergence_fullModel_masked == 1 ]]; then 
    feat $dir_designFiles/group_KLdivergence_fullModel_masked.fsf  
    now=`date`  
    echo "===> feat for KL divergence with prior as reference has finished at $now" 
fi

if [[ $do_stayBias_masked == 1 ]]; then 
    feat $dir_designFiles/group_stayBias_masked.fsf  
    now=`date`  
    echo "===> feat for stayBias has finished at $now" 
fi

#######################################################################################################

#######################################################################################################
# Run group level feat using TFCE (25 min per one-sided contrast for 5000 permutations) (not used in the end)
#######################################################################################################

if [[ $do_ownCertaintyE1_TFCE == 1 ]]; then 
    mkdir -p $dir_output_group/ownCertaintyE1.gfeat/cope1.feat/TFCE
    randomise -i $dir_output_group/ownCertaintyE1.gfeat/cope1.feat/filtered_func_data -o $dir_output_group/ownCertaintyE1.gfeat/cope1.feat/TFCE/pos_ownCertaintyE1_TFCE -1 -T -n 5000
    fslmaths $dir_output_group/ownCertaintyE1.gfeat/cope1.feat/filtered_func_data -mul -1 $dir_output_group/ownCertaintyE1.gfeat/cope1.feat/neg_filtered_func_data
    randomise -i $dir_output_group/ownCertaintyE1.gfeat/cope1.feat/neg_filtered_func_data -o $dir_output_group/ownCertaintyE1.gfeat/cope1.feat/TFCE/neg_ownCertaintyE1_TFCE -1 -T -n 5000
    now=`date`     
    echo "===> feat for own certainty has finished at $now" 
fi

if [[ $do_peerConfidence_masked_TFCE == 1 ]]; then 
    mkdir -p $dir_output_group/peerConfidence_masked.gfeat/cope1.feat/TFCE
    randomise -i $dir_output_group/peerConfidence_masked.gfeat/cope1.feat/filtered_func_data -o $dir_output_group/peerConfidence_masked.gfeat/cope1.feat/TFCE/pos_peerConfidence_masked_TFCE -m $dir_brainTemplates/combinedMasks -1 -T -n 5000
    now=`date`     
    echo "===> feat for peer confidence has finished at $now" 
fi


#######################################################################################################


