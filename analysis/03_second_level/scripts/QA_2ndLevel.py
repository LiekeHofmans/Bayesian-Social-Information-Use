#!/usr/bin/python

# A quick quality check on the level 2 results. 
import os
import glob

############################################ USER INPUT ##############################################
#######################################################################################################
outfile_certaintyE1_confidence='/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/QA/lev2_QA_certaintyE1_confidence.html'
all_feats_certaintyE1_confidence=glob.glob('/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/sub*/certaintyE1_confidence.gfeat/')
outfile_perceived_certaintyE1_confidence='/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/QA/lev2_QA_perceived_certaintyE1_confidence.html'
all_feats_perceived_certaintyE1_confidence=glob.glob('/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/sub*/perceived_certaintyE1_confidence.gfeat/')
outfile_KLdivergence_post2pr='/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/QA/lev2_QA_KLdivergence_post2pr.html'
all_feats_KLdivergence_post2pr=glob.glob('/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/sub*/KLdivergence_post2pr.gfeat/')
outfile_perceived_certaintyE1_confidence_KLdivergence='/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/QA/lev2_QA_perceived_certaintyE1_confidence_KLdivergence.html'
all_feats_perceived_certaintyE1_confidence_KLdivergence=glob.glob('/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/sub*/perceived_certaintyE1_confidence_KLdivergence.gfeat/')
outfile_stayBias='/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/QA/lev2_QA_stayBias.html'
all_feats_stayBias=glob.glob('/home/lhofman/Projects/mushroom_tux/bids/derivatives/second_level/sub*/stayBias.gfeat/')


# which models to run
do_certaintyE1_confidence=1
do_perceived_certaintyE1_confidence=1
do_KLdivergence_post2pr=1
do_perceived_certaintyE1_confidence_KLdivergence=1
do_stayBias=1
#######################################################################################################

# Save all images for all subjects to html file.

# certaintyE1_confidence
if do_certaintyE1_confidence:
    os.system("rm %s"%(outfile_certaintyE1_confidence))

    f = open(outfile_certaintyE1_confidence, "w")
    for file in list(all_feats_certaintyE1_confidence):
      f.write("<p>============================================")
      f.write("<p>%s"%(file))
      f.write("<IMG SRC=\"%s/inputreg/masksum_overlay.png\">"%(file))
      f.write("<IMG SRC=\"%s/inputreg/maskunique_overlay.png\">"%(file))
    f.close()

    
# perceived certainty at E1 and peer confidence at E2
if do_perceived_certaintyE1_confidence:
    os.system("rm %s"%(outfile_perceived_certaintyE1_confidence))

    f = open(outfile_perceived_certaintyE1_confidence, "w")
    for file in list(all_feats_perceived_certaintyE1_confidence):
      f.write("<p>============================================")
      f.write("<p>%s"%(file))
      f.write("<IMG SRC=\"%s/inputreg/masksum_overlay.png\">"%(file))
      f.write("<IMG SRC=\"%s/inputreg/maskunique_overlay.png\">"%(file))
    f.close()
    

    
# KL divergencce with prior as reference
if do_KLdivergence_post2pr:
    os.system("rm %s"%(outfile_KLdivergence_post2pr))

    f = open(outfile_KLdivergence_post2pr, "w")
    for file in list(all_feats_KLdivergence_post2pr):
      f.write("<p>============================================")
      f.write("<p>%s"%(file))
      f.write("<IMG SRC=\"%s/inputreg/masksum_overlay.png\">"%(file))
      f.write("<IMG SRC=\"%s/inputreg/maskunique_overlay.png\">"%(file))
    f.close() 
    
# perceived certainty at E1 and peer confidence at E2 and KLdivergence
if do_perceived_certaintyE1_confidence_KLdivergence:
    os.system("rm %s"%(outfile_perceived_certaintyE1_confidence_KLdivergence))

    f = open(outfile_perceived_certaintyE1_confidence_KLdivergence, "w")
    for file in list(all_feats_perceived_certaintyE1_confidence_KLdivergence):
      f.write("<p>============================================")
      f.write("<p>%s"%(file))
      f.write("<IMG SRC=\"%s/inputreg/masksum_overlay.png\">"%(file))
      f.write("<IMG SRC=\"%s/inputreg/maskunique_overlay.png\">"%(file))
    f.close()
    
# stayBias
if do_stayBias:
    os.system("rm %s"%(outfile_stayBias))

    f = open(outfile_stayBias, "w")
    for file in list(all_feats_stayBias):
      f.write("<p>============================================")
      f.write("<p>%s"%(file))
      f.write("<IMG SRC=\"%s/inputreg/masksum_overlay.png\">"%(file))
      f.write("<IMG SRC=\"%s/inputreg/maskunique_overlay.png\">"%(file))
    f.close()    
    
