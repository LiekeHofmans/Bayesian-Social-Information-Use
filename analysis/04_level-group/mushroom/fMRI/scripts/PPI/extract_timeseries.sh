#!/bin/bash


# For each subject,
# for each contrast,
# we create a subject-specific ROI (a).
# We then extract the timeseries for that ROI (b).

############################################ USER INPUT ##############################################
#######################################################################################################

################################################################################
# Which steps do you want to run (0 = no, 1 = yes)?
################################################################################
do_mountFMG=0 # Mounts the FMG project folder to a directory on the tux


################################################################################
# Define directories and filenames
################################################################################
dir_exclusions='/home/lhofman/fmg-research-mount/mushroom/analysis/participants_to_exclude.csv' # where the list with participants to exclude can be found
output_file="/home/lhofman/fmg-research-mount/mushroom/bids/derivatives/mri/group_level/group_timeseries_data.csv"
dir_bids='/home/lhofman/Projects/mushroom_tux/bids' 
mkdir -p "$(dirname "$output_file")"

################################################################################
# Define contrast-specific settings
################################################################################

declare -A contrast_glm=( # the glm which was used to test the model
    [perceived_certaintyE1]=perceived_certaintyE1_confidence
    [perceived_confidence]=perceived_certaintyE1_confidence
    [KLdivergence_post2pr]=KLdivergence_post2pr
)
declare -A contrast_num=( # the rank of the contrast within the model
    [perceived_certaintyE1]=1
    [perceived_confidence]=2
    [KLdivergence_post2pr]=1
)
declare -A contrast_polarity=( # looking at positive or negative contrast?
    [perceived_certaintyE1]=neg
    [perceived_confidence]=pos
    [KLdivergence_post2pr]=pos
)
declare -A contrast_clusters=( # which clusters to extract?
    [perceived_certaintyE1]="2"
    [perceived_confidence]="2 3 4"
    [KLdivergence_post2pr]="1 2"
)


#######################################################################################################
# Mount FMG folder (needs password for both tux and fmgstorage and sudo rights) so all files are available
#######################################################################################################
if [[ $do_mountFMG == 1 ]]; then 
    mkdir -p /home/lhofman/fmg-research-mount/mushroom
    sudo mount -t cifs "//fmg-research.uva.nl/psychology$/fMRI Projects/fMRI Project Mushroom" /home/lhofman/fmg-research-mount/mushroom -o username=lhofman,domain=uva,noexec,uid=$(id -u),gid=$(id -g)
fi
#######################################################################################################


#######################################################################################################
# Extract timeseries (takes about 3h for ~70 participants and 6 ROIs)
#######################################################################################################

# =============================
# Initialize output file
# =============================
all_labels=()
for contrast in "${!contrast_glm[@]}"; do
    polarity=${contrast_polarity[$contrast]}
    for cluster in ${contrast_clusters[$contrast]}; do
        label="${contrast}_${polarity}_cluster${cluster}"
        all_labels+=("$label")
    done
done

# Write header: sID,run,TR + one column per contrast_cluster combo
header="sID,run,TR"
for label in "${all_labels[@]}"; do
    header+=",$label"
done
echo "$header" > "$output_file"

# =============================
# Load list with exclusions
# =============================
exclusions=( $(tail -n +2 $dir_exclusions | cut -d ',' -f3) )

# =============================
#  Loop over participants 
# =============================
echo "Start time: $(date)"    
for subdir in $dir_bids/derivatives/first_level/sub-* ; do  
#for subdir in "$dir_bids/derivatives/first_level/sub-003" "$dir_bids/derivatives/first_level/sub-006" ; do

    
    #subdir=$dir_bids/derivatives/first_level/sub-003       
    sub="${subdir##*/}" #keep only subject ID as sub-xxx, without full directory
    subnr=$(echo $subdir | sed 's/[^0-9]*//g') #keep only subject ID as xxx, without full directory
    subnr="${subnr#"${subnr%%[!0]*}"}" # remove leading zeros
    echo "Processing $sub..."
    
    # Only running for participants not in exclusion list
    if printf '%s\n' ${exclusions[@]} | grep -q --line-regexp $subnr; then
        echo "===> $sub is in exclusion list; Skipping."
        continue
    fi
    
    # Temporary storage for subject data
    tmpdir=$(mktemp -d)
    
    # Store in an array: data_by_label_runs_lines[label]="multiline string with all runs stacked"
    declare -A data_by_label_runs_lines
    
    # =============================
    #  Loop over contrasts 
    # =============================
    
    for contrast in "${!contrast_glm[@]}"; do  
        glm=${contrast_glm[$contrast]}
        num=${contrast_num[$contrast]}
        polarity=${contrast_polarity[$contrast]}
        clusters=${contrast_clusters[$contrast]}
                     
        # =============================
        #  Loop over clusters 
        # =============================
    
        for cluster in $clusters; do
            label="${contrast}_${polarity}_cluster${cluster}"
            combined_runs_data=""
            
            # ==================================================================
            # A. Create subject-specific ROI
            # ==================================================================
        
            # Extract cluster mask  
            zstat=$dir_bids/derivatives/second_level/$sub/$glm.gfeat/cope${num}.feat/stats/zstat1.nii.gz
            if [ "$polarity" == "pos" ]; then
                group_mask=$dir_bids/derivatives/group_level/${contrast}_masked.gfeat/cope1.feat/cluster_mask_zstat1.nii.gz   
                fslmaths $group_mask -thr $cluster -uthr $cluster -bin $tmpdir/cluster_mask.nii.gz # extract cluster from group mask
                fslmaths $zstat -mas $tmpdir/cluster_mask.nii.gz $tmpdir/masked_zstat.nii.gz # apply mask to subject-level zstat
            else
                group_mask=$dir_bids/derivatives/group_level/${contrast}_masked.gfeat/cope1.feat/cluster_mask_zstat2.nii.gz 
                fslmaths $group_mask -thr $cluster -uthr $cluster -bin $tmpdir/cluster_mask.nii.gz # extract cluster from group mask
                fslmaths $zstat -mas $tmpdir/cluster_mask.nii.gz $tmpdir/masked_zstat.nii.gz # apply mask to subject-level zstat
                fslmaths $tmpdir/masked_zstat.nii.gz -mul -1 $tmpdir/masked_zstat.nii.gz #Multiply image by -1 tas it seems fslmaths does not handle negative values well       
            fi
            
            # Find the peak 
            peak_val=$(fslstats $tmpdir/masked_zstat.nii.gz -R | awk '{print $2}')
            # Make range slightly fuzzy to avoid issues with floating points
            lower=$(echo "$peak_val - 0.001" | bc)
            upper=$(echo "$peak_val + 0.001" | bc)
            # Mask the peak voxel
            fslmaths $tmpdir/masked_zstat.nii.gz -thr $lower -uthr $upper -bin $tmpdir/peak_mask.nii.gz

            # Create a 3mm sphere around the peak voxel, which will serve as subject-specific mask for this contrast
            fslmaths $tmpdir/peak_mask.nii.gz -kernel sphere 3 -fmean -bin $tmpdir/3mm_sphere.nii.gz
            
            # ==================================================================
            # B. Extract timeseries for each run
            # ==================================================================
                       
            # Loop over runs
            for run in $dir_bids/$sub/func/*_bold.nii.gz; do  
                # Extract run number from filename
                run_number=$(echo $run | awk -F'/' '{ print $(NF) }' | awk -F'-' '{ print $5 }' | awk -F'_' '{ print $1 }') # run_number is either 1, 2, or 3 
                
                # Path to the timeseries data for this run: 4d functional data
                timeseries=$dir_bids/derivatives/first_level/$sub/$glm/run-${run_number}_output.feat/filtered_func_data.nii.gz
                
                # Extract timeseries from 3mm sphere ROI
                fslmeants -i $timeseries \
                  -m $tmpdir/3mm_sphere.nii.gz \
                  -o $tmpdir/subject_timeseries.txt # Each line in subject_timeseries.txt is a single time point (TR) value from one cluster in one run of one contrast.
                  
                # Add metadata (sID, run, TR) + timeseries values
                nTR=$(wc -l < $tmpdir/subject_timeseries.txt)
                for ((tr=1; tr<=nTR; tr++)); do
                    val=$(sed -n "${tr}p" $tmpdir/subject_timeseries.txt)
                    combined_runs_data+="${subnr},${run_number},${tr},${val}"$'\n'
                done                          
                
            done # run loop 
            
            data_by_label_runs_lines[$label]="$combined_runs_data"
                  
        done # cluster loop
    done  # contrast loop            
    
    # Now we have for each contrast-cluster combo a vertical block of lines:
    # Each line: sID,run,TR,value
    # We want to merge them side by side, matching lines by sID,run,TR    

    # To do this:
    # - Get all unique sID,run,TR triples (should be same for all labels)
    # - For each triple, print sID,run,TR, then all values for that triple side by side
    
    # Extract unique lines of sID,run,TR from first label
    first_label="${all_labels[0]}"
    # Extract triples (without last column = value)
    triples=$(echo "${data_by_label_runs_lines[$first_label]}" | cut -d',' -f1-3)
    
    # Prepare output lines
    while IFS= read -r triple; do
        row="$triple"
        # For each label get value corresponding to triple
        for label in "${all_labels[@]}"; do
            val=$(echo "${data_by_label_runs_lines[$label]}" | grep "^$triple," | cut -d',' -f4)
            # If missing, fill NA
            if [ -z "$val" ]; then
                val="NA"
            fi
            row+=",$val"
        done
        echo "$row" >> "$output_file"
    done <<< "$triples"
    
    rm -r $tmpdir      
        
done  # subject loop    
echo "End time: $(date)" 


