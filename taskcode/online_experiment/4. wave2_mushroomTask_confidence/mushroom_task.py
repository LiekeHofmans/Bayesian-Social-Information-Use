#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on July 09, 2021, at 15:46
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

import pandas as pd
from numpy import random
from random import sample
from random import shuffle 



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'mushroom_task'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\OneDrive\\UvA\\projects\\SocialInformation_Uncertainty\\taskcode\\mushroom_with_SI_confidence\\mushroom_task.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1805, 1203], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()
window_dimension = win.size[0] / win.size[1]
window_y = 0.5
window_x = window_y * window_dimension
aperture_size = window_y * 0.4 # size of square where the mushrooms can be shown (in one direction)
mushroom_size = aperture_size * 0.50 # size of mushroom is 1/10th of screen heigth

# background color
bg_color=colors.Color((-0.4000, -0.4000, -0.4000), space='rgb')
win.color = bg_color

# Initialize components for Routine "import_wave1_data"
import_wave1_dataClock = core.Clock()

# Initialize components for Routine "informedConsent"
informedConsentClock = core.Clock()
IC1 = ("Dear participant,\n\nFirst, thank you for your interest!\nBefore the study starts, it is important that you are informed about the procedures. "
"Therefore, we would like you to read this information letter carefully.\nPlease do not hesitate to ask for clarification about this text or the general procedure. "
"If anything is unclear, the researcher will answer your questions.\n\n\n"
"You can go back and forth through the instructions by pressing the LEFT and RIGHT arrow keys.\n\n\n"
"Now press the RIGHT arrow key to move on to the next instruction.")

IC2 = ("Type of Research:\n\nYou will participate in an online estimation study.\n\nThe study will start with a short personality questionnaire, followed by an estimation game. This will take approximately 30 minutes in total.\n\n\n")

IC3 = ("Voluntary participation:\n\nThere are no consequences if you decide not to participate in this study.\n"
"During the study, you are free to stop participating at any moment, without giving a reason for doing so.\n"
"Within seven days after participation, you are allowed to withdraw your data from this study and your data will be deleted permanently.")

IC4 = ("Your privacy is guaranteed:\n\n"
"Your personal information (about who you are) remains confidential and will not be shared without your explicit consent.\n"
"Your research data will be analyzed by the researchers who collected the information. "
"Research data published in scientific journals will be anonymous and cannot be traced back to you as an individual. "
"Completely anonymized data can be shared with other researchers.")

IC5 = ("Discomfort, risks and insurance:\n\n"
"As with any research at the University of Amsterdam (UvA), a standard liability insurance applies.\n\n\n\n\n"
"Compensation:\n\nA flat fee of £3.00 upon completion of the study, plus a bonus of up to £1.50 depending on your performance in the estimation game.")

IC6 = ("Further information:\n\nShould you have questions about this study at any given moment, please contact the responsible researcher,\n"
"Lieke Hofmans (l.hofmans@uva.nl).\n\nFormal complaints about this study can be addressed to the Ethics Review Board, "
"Helle Larsen (h.larsen@uva.nl).")

IC7 = ("Informed consent:\n\nBy pressing ENTER you register you give informed consent:\n"
"You are well informed, have read the aforementioned information carefully, and wish to start the study.\n\n\n"
"If you wish to go over the information once more, you can use the LEFT and RIGHT arrow keys to go back and forth.\n\n"
"If you do not wish to start the study, you can leave the study now.")

ICDict = { "1": IC1,
              "2": IC2, 
              "3": IC3, 
              "4": IC4, 
              "5": IC5, 
              "6": IC6,
              "7": IC7,
}

currentIC = "1"


informed_consent = visual.TextStim(win=win, name='informed_consent',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
informed_consent_responses = keyboard.Keyboard()
progress_bar_fixed = visual.Rect(
    win=win, name='progress_bar_fixed',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
progress_bar = visual.Rect(
    win=win, name='progress_bar',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='green', fillColor='green',
    opacity=None, depth=-4.0, interpolate=True)
progress_IC = visual.TextStim(win=win, name='progress_IC',
    text='',
    font='Open Sans',
    units='height', pos=(0, 0.48), height=0.02, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "instrPrac"
instrPracClock = core.Clock()
response = keyboard.Keyboard()
Pr1 = ("PART 2: ESTIMATION GAME\n\n\nBefore we start the game, we will provide you with some instructions, "
"followed by a few practice rounds.\n\n"
"You can go back and forth through the instructions by pressing the LEFT and RIGHT arrow keys.\n\n\n"
"Now press the RIGHT arrow key to move on to the next instruction.") 

Pr2 = ("In this game, you are part of a community for which the main food resource is mushrooms\n\n"
"These mushrooms are harvested from a forest in the vicinity of your village. "
"Soon, it will be time to harvest, and the leader of the community has asked you for your help in coordinating this.\n\n"
 
Pr3 = ("Each day, 100 people from the community will enter the forest.\n"
"Each person will carry a bag to pick 1 type of mushroom.\n\n”
"There are two types of mushrooms, blue and red ones.\n"
"The problem is that these two types of mushrooms each need their own type of bag." 
"A blue mushroom can only be carried in a blue bag and a red mushroom can only be carried in a red bag.")
 
Pr4 = ("Your task at the start of the day is to decide how many people will go into the forest carrying a blue bag and how many people will be carrying a red bag.\n\n"
"If on one day there are 70 blue mushrooms and 30 red mushrooms in the forest, you need to give 70 people a blue bag and 30 people a red bag."
"If you would give too many people a blue bag, some people carrying a blue bag would arrive home with an empty bag, " 
"while some red mushrooms would be left in the forest because there were not enough people with a red bag.\n"
"That means your yield would not be optimal.”)
 
Pr5 = ("To make an informed guess about how many mushroom pickers should carry a blue or a red bag, "
"you will get up early each morning to walk through 5 fields that surround your village.\n\n"
"There are some blue and red mushrooms growing in these fields. "
"You know that the mushrooms you see here are a good, but not exact representation of what will be found in the forest on that day.\n\n"
"Thus, based on the number of blue versus red mushrooms in these 5 nearby fields, you can decide how many pickers you give a blue or a red bag.")
 
Pr6 = ("On some days, you encounter many mushrooms in the fields, so you have a large sample to base your estimate on."
"On other days, however, you encounter fewer mushrooms, so you have a smaller sample to base your estimate on.\n\n"
"The more mushrooms you find in the nearby fields, the more precisely they can represent the mushrooms in the forest.")
 
Pr7 = ("During the game, you will first see the mushrooms in each of the 5 fields.\n\n"
"You are then asked to decide how many out of 100 pickers should carry a blue bag.\n\n"
"This is followed by rating your confidence in your decision.\n\n"
"You will play multiple rounds. Each round represents a new day and all days together represent the entire harvest season.")
 
Pr8 = ("To get a better understanding of the task and how everything looks, you will first play some practice days.\n\n" 
"Press ENTER to start the practice.")



PrDict = { "1": Pr1,
              "2": Pr2, 
              "3": Pr3, 
              "4": Pr4,
              "5": Pr5, 
              "6": Pr6,
              "7": Pr7,
              "8": Pr8,
}

currentPr = "1"


text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
blue_mushroom = visual.ImageStim(
    win=win,
    name='blue_mushroom', units='height', 
    image='blue_mushroom.png', mask=None,
    ori=350.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
red_mushroom = visual.ImageStim(
    win=win,
    name='red_mushroom', 
    image='red_mushroom.png', mask=None,
    ori=10.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
progress_bar_fixed_2 = visual.Rect(
    win=win, name='progress_bar_fixed_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
progress_bar_2 = visual.Rect(
    win=win, name='progress_bar_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='green', fillColor='green',
    opacity=None, depth=-6.0, interpolate=True)
progress_IC_2 = visual.TextStim(win=win, name='progress_IC_2',
    text='',
    font='Open Sans',
    units='height', pos=(0, 0.48), height=0.02, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "setupSamples"
setupSamplesClock = core.Clock()

# Initialize components for Routine "crossHair"
crossHairClock = core.Clock()
cross_hair = visual.TextStim(win=win, name='cross_hair',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "mushroomSample"
mushroomSampleClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text=' ',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "ISI"
ISIClock = core.Clock()
isi = visual.TextStim(win=win, name='isi',
    text=None,
    font='Open Sans',
    units='height', pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "firstEstimation"
firstEstimationClock = core.Clock()
how_many_mushrooms = visual.TextStim(win=win, name='how_many_mushrooms',
    text='Part A: Based on the sample you just saw, how many mushroom pickers should carry a BLUE bag today?\n',
    font='Open Sans',
    units='height', pos=(0, 0.35), height=0.035, wrapWidth=0.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
your_estimate = visual.TextStim(win=win, name='your_estimate',
    text='\nYour estimate:',
    font='Open Sans',
    pos=(0, -0.085), height=0.025, wrapWidth=0.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
white_box = visual.Rect(
    win=win, name='white_box',
    width=(0.07, 0.05)[0], height=(0.07, 0.05)[1],
    ori=0.0, pos=(markerPosition, -0.14),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-19.0, interpolate=True)
showEstimate = visual.TextStim(win=win, name='showEstimate',
    text='',
    font='Arial',
    units='height', pos=[0,0], height=0.035, wrapWidth=None, ori=0.0, 
    color='blue', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
estimation_slider = visual.Slider(win=win, name='estimation_slider',
    size=(0.5, 0.05), pos=(0, -0.19), units='height',
    labels=(0,100), ticks=(0,100), granularity=1.0,
    style='slider', styleTweaks=(), opacity=0.0,
    color='White', fillColor='white', borderColor=None, colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, depth=-5, readOnly=False)
red_rectangle = visual.Rect(
    win=win, name='red_rectangle',units='height', 
    width=(0.5, 0.04)[0], height=(0.5, 0.04)[1],
    ori=0.0, pos=(0, -0.19),
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='red',
    opacity=None, depth=-6.0, interpolate=True)
blue_rectangle = visual.Rect(
    win=win, name='blue_rectangle',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='blue',
    opacity=None, depth=-7.0, interpolate=True)
sliderMarker = visual.Rect(
    win=win, name='sliderMarker',units='height', 
    width=(0.008, 0.05)[0], height=(0.008, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-8.0, interpolate=True)
slider_text0 = visual.TextStim(win=win, name='slider_text0',
    text='0',
    font='Arial',
    units='height', pos=(-0.25, -0.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
slider_text100 = visual.TextStim(win=win, name='slider_text100',
    text='100',
    font='Arial',
    units='height', pos=(0.25, -0.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
space_to_submit_estimation = visual.TextStim(win=win, name='space_to_submit_estimation',
    text='Press ENTER to submit your response',
    font='Open Sans',
    units='height', pos=(0, -0.4), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);

# Initialize components for Routine "SI"
SIClock = core.Clock()
how_many_mushrooms_2 = visual.TextStim(win=win, name='how_many_mushrooms_2',
    text='Part B: Based on the sample you just saw, how many mushroom pickers should carry a BLUE bag today?\n',
    font='Open Sans',
    units='height', pos=(0, 0.35), height=0.035, wrapWidth=0.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
peers_estimate = visual.TextStim(win=win, name='peers_estimate',
    text='',
    font='Open Sans',
    pos=(0, 0.205), height=0.025, wrapWidth=0.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
white_box_peer = visual.Rect(
    win=win, name='white_box_peer',
    width=(0.07, 0.05)[0], height=(0.07, 0.05)[1],
    ori=0.0, pos=(markerPosition_peer, 0.15),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-19.0, interpolate=True)
showEstimate_peer = visual.TextStim(win=win, name='showEstimate_peer',
    text='',
    font='Arial',
    units='height', pos=[0,0], height=0.035, wrapWidth=None, ori=0.0, 
    color='blue', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
red_rectangle_peer = visual.Rect(
    win=win, name='red_rectangle_peer',units='height', 
    width=(0.5, 0.04)[0], height=(0.5, 0.04)[1],
    ori=0.0, pos=(0, 0.1),
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='red',
    opacity=None, depth=-6.0, interpolate=True)
blue_rectangle_peer = visual.Rect(
    win=win, name='blue_rectangle_peer',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='blue',
    opacity=None, depth=-7.0, interpolate=True)
slider_text0_peer = visual.TextStim(win=win, name='slider_text0_peer',
    text='0',
    font='Arial',
    units='height', pos=(-0.25, 0.06), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
slider_text100_peer = visual.TextStim(win=win, name='slider_text100_peer',
    text='100',
    font='Arial',
    units='height', pos=(0.25, 0.06), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
your_estimate_2 = visual.TextStim(win=win, name='your_estimate_2',
    text='',
    font='Open Sans',
    pos=(0, -0.085), height=0.025, wrapWidth=0.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
white_box_2 = visual.Rect(
    win=win, name='white_box_2',
    width=(0.07, 0.05)[0], height=(0.07, 0.05)[1],
    ori=0.0, pos=(markerPosition, -0.14),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-19.0, interpolate=True)
showEstimate_2 = visual.TextStim(win=win, name='showEstimate_2',
    text='',
    font='Arial',
    units='height', pos=[0,0], height=0.035, wrapWidth=None, ori=0.0, 
    color='blue', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);
estimation_slider_2 = visual.Slider(win=win, name='estimation_slider_2',
    size=(0.5, 0.05), pos=(0, -0.19), units='height',
    labels=(0,100), ticks=(0,100), granularity=1.0,
    style='slider', styleTweaks=(), opacity=0.0,
    color='White', fillColor='white', borderColor=None, colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, depth=-13, readOnly=False)
red_rectangle_2 = visual.Rect(
    win=win, name='red_rectangle_2',units='height', 
    width=(0.5, 0.04)[0], height=(0.5, 0.04)[1],
    ori=0.0, pos=(0, -0.19),
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='red',
    opacity=None, depth=-14.0, interpolate=True)
blue_rectangle_2 = visual.Rect(
    win=win, name='blue_rectangle_2',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='blue',
    opacity=None, depth=-15.0, interpolate=True)
sliderMarker_2 = visual.Rect(
    win=win, name='sliderMarker_2',units='height', 
    width=(0.008, 0.05)[0], height=(0.008, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-16.0, interpolate=True)
slider_text0_2 = visual.TextStim(win=win, name='slider_text0_2',
    text='0',
    font='Arial',
    units='height', pos=(-0.25, -0.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-17.0);
slider_text100_2 = visual.TextStim(win=win, name='slider_text100_2',
    text='100',
    font='Arial',
    units='height', pos=(0.25, -0.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-18.0);
space_to_submit_estimation_2 = visual.TextStim(win=win, name='space_to_submit_estimation_2',
    text='Press ENTER to submit your response',
    font='Open Sans',
    units='height', pos=(0, -0.4), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-19.0);

# Initialize components for Routine "test_questions"
test_questionsClock = core.Clock()
progress_bar_fixed_4 = visual.Rect(
    win=win, name='progress_bar_fixed_4',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
progress_bar_4 = visual.Rect(
    win=win, name='progress_bar_4',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='green', fillColor='green',
    opacity=None, depth=-2.0, interpolate=True)
progress_IC_4 = visual.TextStim(win=win, name='progress_IC_4',
    text='Instructions: 9/13',
    font='Open Sans',
    units='height', pos=(0, 0.48), height=0.02, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_4 = visual.TextStim(win=win, name='text_4',
    text='You have now finished the practice days. Before we continue, we want to ask you a few questions about your understanding of the game:',
    font='Open Sans',
    pos=(0, 0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
Q1 = visual.TextStim(win=win, name='Q1',
    text='1. Each day, the distribution of the blue and red mushrooms is the same:  ',
    font='Open Sans',
    units='height', pos=(0, 0.3), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
test_Q1 = visual.Slider(win=win, name='test_Q1',
    size=(0.17, 0.015), pos=(0, 0.26), units='height',
    labels=('True', 'False'), ticks=(1, 2), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='white', fillColor='black', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.015,
    flip=False, depth=-6, readOnly=False)
wrong_answer_1 = visual.TextStim(win=win, name='wrong_answer_1',
    text='',
    font='Open Sans',
    pos=(0, 0.22), height=0.015, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
Q2 = visual.TextStim(win=win, name='Q2',
    text='2. On some days you find more mushrooms in the nearby fields to base your estimate on than on other days:',
    font='Open Sans',
    units='height', pos=(0, 0.17), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
test_Q2 = visual.Slider(win=win, name='test_Q2',
    size=(0.17, 0.015), pos=(0, 0.13), units='height',
    labels=('True', 'False'), ticks=(1, 2), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='white', fillColor='black', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.015,
    flip=False, depth=-9, readOnly=False)
wrong_answer_2 = visual.TextStim(win=win, name='wrong_answer_2',
    text='',
    font='Open Sans',
    pos=(0, 0.09), height=0.015, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
Q3 = visual.TextStim(win=win, name='Q3',
    text='3. If you just saw 4 blue mushrooms and 3 red mushrooms in the nearby fields, how many out of 100 mushrooms in the forest would probably be blue?',
    font='Open Sans',
    units='height', pos=(0, 0.03), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
test_Q3 = visual.Slider(win=win, name='test_Q3',
    size=(0.3, 0.015), pos=(0, -0.02), units='height',
    labels=('Around 4, because I just\nsaw 4 blue mushrooms', 'More than 4, because there\nare more mushrooms in the\nforest than in the fields '), ticks=(1, 2), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='White', fillColor='Black', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.015,
    flip=False, depth=-12, readOnly=False)
wrong_answer_3 = visual.TextStim(win=win, name='wrong_answer_3',
    text='',
    font='Open Sans',
    pos=(0, -0.10), height=0.015, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-13.0);
Q4 = visual.TextStim(win=win, name='Q4',
    text='4. If you estimate that there are 70 blue and 30 red mushrooms in the forest, what is the optimal number of BLUE pickers to send out?',
    font='Open Sans',
    units='height', pos=(0, -0.16), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-14.0);
test_Q4 = visual.Slider(win=win, name='test_Q4',
    size=(0.3, 0.015), pos=(0, -0.21), units='height',
    labels=('30', '50', '70'), ticks=(1, 2, 3), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='White', fillColor='Black', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.015,
    flip=False, depth=-15, readOnly=False)
wrong_answer_4 = visual.TextStim(win=win, name='wrong_answer_4',
    text='',
    font='Open Sans',
    pos=(0, -0.25), height=0.015, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-16.0);
Q5 = visual.TextStim(win=win, name='Q5',
    text='5. If on day 1 you sample 7 mushrooms in the nearby fields and on day 2 you sample 37 mushrooms, on which day could you be more confident that the sample is a good representative of the number of blue and red mushrooms in the forest? ',
    font='Open Sans',
    units='height', pos=(0, -0.31), height=0.02, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-17.0);
test_Q5 = visual.Slider(win=win, name='test_Q5',
    size=(0.17, 0.015), pos=(0, -0.36), units='height',
    labels=('Day 1', 'Day 2'), ticks=(1, 2), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='White', fillColor='Black', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.015,
    flip=False, depth=-18, readOnly=False)
wrong_answer_5 = visual.TextStim(win=win, name='wrong_answer_5',
    text='',
    font='Open Sans',
    pos=(0, -0.4), height=0.015, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-19.0);
enter_2 = visual.TextStim(win=win, name='enter_2',
    text='',
    font='Open Sans',
    pos=(0, -0.44), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-20.0);
blue_mushroom_5 = visual.ImageStim(
    win=win,
    name='blue_mushroom_5', units='height', 
    image='blue_mushroom.png', mask=None,
    ori=350.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=True, depth=-21.0)
red_mushroom_5 = visual.ImageStim(
    win=win,
    name='red_mushroom_5', 
    image='red_mushroom.png', mask=None,
    ori=10.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-22.0)

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
key_resp_2 = keyboard.Keyboard()
event.clearEvents()

startGame = 0

Instr1 = ("BONUS:\n\n"
"At the end of the harvest season you will receive a bonus.\n"
"The amount of this bonus depends on how well you did during the game, and is calculated as follows:\n\n"
"The computer will randomly pick one of the harvest days and compare your decision that day to the correct answer. "
"If your decision was exactly correct, you will receive a bonus of £1.50. For each blue bag off, we will deduct 4 pence.\n\n\n"
"Press the RIGHT arrow key to continue.")

Instr2 = ("For example, if you decided to give 70 out of the 100 pickers a blue bag, but there were 88 blue mushrooms in the forest, "
"you will receive £1.50 - 18 x £0.04 = £0.78.\n\n"
"Your bonus will never go below £0.00.\n\n"
"This means that each and every day might determine your bonus at the end of the season.\n\n\n"
"Press the RIGHT arrow key to continue.")

Instr3 = "Importanty, you can increase your chances of earning a high bonus by rating your confidence in your estimate:\n\n"
"If you rate your confidence as MEDIUM, the chance that the computer will pick that day will be TWO times as high as when you would rate your confidence as LOW.\n\n"
"If you rate your confidence as HIGH, the chance that the computer will pick that day will be THREE times as high as when you would rate your confidence as LOW.\n\n"
"Thus, if you think that on a certain day your estimate is close to the correct answer, "
"you can increase the chance that the computer will pick that particular day by giving a higher confidence rating.\n\n\n"
"Press the RIGHT arrow key to continue.")

Instr4 = ("As said before, the game will consist of multiple harvest days and all days together represent the harvest season. "
"The entire season consists of 3 blocks. After each block, you can take a short break before continuing with the next block.\n\n\n\n"
"If everything is clear, you can press ENTER to start the game")


InstrDict = { "1": Instr1,
              "2": Instr2,
              "3": Instr3,
              "4": Instr4,
}

currentInstr = "1"
text_3 = visual.TextStim(win=win, name='text_3',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
blue_mushroom_2 = visual.ImageStim(
    win=win,
    name='blue_mushroom_2', 
    image='blue_mushroom.png', mask=None,
    ori=350.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
red_mushroom_2 = visual.ImageStim(
    win=win,
    name='red_mushroom_2', 
    image='red_mushroom.png', mask=None,
    ori=10.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
progress_bar_fixed_3 = visual.Rect(
    win=win, name='progress_bar_fixed_3',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
progress_bar_3 = visual.Rect(
    win=win, name='progress_bar_3',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='green', fillColor='green',
    opacity=None, depth=-6.0, interpolate=True)
progress_IC_3 = visual.TextStim(win=win, name='progress_IC_3',
    text='',
    font='Open Sans',
    units='height', pos=(0, 0.48), height=0.02, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "setupSamples"
setupSamplesClock = core.Clock()

# Initialize components for Routine "crossHair"
crossHairClock = core.Clock()
cross_hair = visual.TextStim(win=win, name='cross_hair',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "mushroomSample"
mushroomSampleClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text=' ',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "ISI"
ISIClock = core.Clock()
isi = visual.TextStim(win=win, name='isi',
    text=None,
    font='Open Sans',
    units='height', pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "firstEstimation"
firstEstimationClock = core.Clock()
how_many_mushrooms = visual.TextStim(win=win, name='how_many_mushrooms',
    text='Part A: Based on the sample you just saw, how many mushroom pickers should carry a BLUE bag today?\n',
    font='Open Sans',
    units='height', pos=(0, 0.35), height=0.035, wrapWidth=0.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
your_estimate = visual.TextStim(win=win, name='your_estimate',
    text='\nYour estimate:',
    font='Open Sans',
    pos=(0, -0.085), height=0.025, wrapWidth=0.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
white_box = visual.Rect(
    win=win, name='white_box',
    width=(0.07, 0.05)[0], height=(0.07, 0.05)[1],
    ori=0.0, pos=(markerPosition, -0.14),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-19.0, interpolate=True)
showEstimate = visual.TextStim(win=win, name='showEstimate',
    text='',
    font='Arial',
    units='height', pos=[0,0], height=0.035, wrapWidth=None, ori=0.0, 
    color='blue', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
estimation_slider = visual.Slider(win=win, name='estimation_slider',
    size=(0.5, 0.05), pos=(0, -0.19), units='height',
    labels=(0,100), ticks=(0,100), granularity=1.0,
    style='slider', styleTweaks=(), opacity=0.0,
    color='White', fillColor='white', borderColor=None, colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, depth=-5, readOnly=False)
red_rectangle = visual.Rect(
    win=win, name='red_rectangle',units='height', 
    width=(0.5, 0.04)[0], height=(0.5, 0.04)[1],
    ori=0.0, pos=(0, -0.19),
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='red',
    opacity=None, depth=-6.0, interpolate=True)
blue_rectangle = visual.Rect(
    win=win, name='blue_rectangle',units='height', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0],
    lineWidth=0.5,     colorSpace='rgb',  lineColor=None, fillColor='blue',
    opacity=None, depth=-7.0, interpolate=True)
sliderMarker = visual.Rect(
    win=win, name='sliderMarker',units='height', 
    width=(0.008, 0.05)[0], height=(0.008, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-8.0, interpolate=True)
slider_text0 = visual.TextStim(win=win, name='slider_text0',
    text='0',
    font='Arial',
    units='height', pos=(-0.25, -0.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
slider_text100 = visual.TextStim(win=win, name='slider_text100',
    text='100',
    font='Arial',
    units='height', pos=(0.25, -0.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
space_to_submit_estimation = visual.TextStim(win=win, name='space_to_submit_estimation',
    text='Press ENTER to submit your response',
    font='Open Sans',
    units='height', pos=(0, -0.4), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);

# Initialize components for Routine "pause"
pauseClock = core.Clock()
shortBreak = visual.TextStim(win=win, name='shortBreak',
    text='Great job!\n\nYou can now take a 2 minute break before we continue with the next part of the season. \n\nIf you wish to continue earlier, you can press ENTER to start immediately.',
    font='Open Sans',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()
timer = visual.TextStim(win=win, name='timer',
    text='',
    font='Open Sans',
    pos=(0.4, 0.4), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
blue_mushroom_3 = visual.ImageStim(
    win=win,
    name='blue_mushroom_3', 
    image='blue_mushroom.png', mask=None,
    ori=350.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
red_mushroom_3 = visual.ImageStim(
    win=win,
    name='red_mushroom_3', 
    image='red_mushroom.png', mask=None,
    ori=10.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# Initialize components for Routine "instrBonus"
instrBonusClock = core.Clock()
bonus_text = visual.TextStim(win=win, name='bonus_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
enter_to_end = keyboard.Keyboard()
blue_mushroom_4 = visual.ImageStim(
    win=win,
    name='blue_mushroom_4', 
    image='blue_mushroom.png', mask=None,
    ori=350.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=True, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
red_mushroom_4 = visual.ImageStim(
    win=win,
    name='red_mushroom_4', 
    image='red_mushroom.png', mask=None,
    ori=10.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)

# Initialize components for Routine "comments"
commentsClock = core.Clock()
comments_title = visual.TextStim(win=win, name='comments_title',
    text='In order to improve our study we would like to receive some feedback from you!',
    font='Open Sans',
    pos=[0, 0.35], height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
comments_instructions = visual.TextStim(win=win, name='comments_instructions',
    text='Were the instructions clear?',
    font='Open Sans',
    pos=[0, 0.2], height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
input_instructions = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=[-0.3, 0.17],units='height',     letterHeight=0.02,
     size=[0.6, 0.1], borderWidth=2.0,
     color='Black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=None,
     anchor='top-left',
     fillColor='White', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='input_instructions',
     autoLog=False,
)
comments_other = visual.TextStim(win=win, name='comments_other',
    text='Do you have any feedback about the study, such as: Were the tasks easy to understand? Is there anything you liked or disliked about the study?',
    font='Open Sans',
    pos=[0, -0.05], height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
input_other = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=[-0.3, -0.09],units='height',     letterHeight=0.02,
     size=[0.6, 0.1], borderWidth=None,
     color='Black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=None,
     anchor='top-left',
     fillColor='White', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='input_other',
     autoLog=False,
)
continue_button = visual.ImageStim(
    win=win,
    name='continue_button', units='height', 
    image='continue.png', mask=None,
    ori=0.0, pos=(0.4, -0.35), size=(0.1, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Initialize components for Routine "instrEnd"
instrEndClock = core.Clock()
textFinish = visual.TextStim(win=win, name='textFinish',
    text='Thank you very much for participating.\n\nThis screen marks the end of the study.\n\nATTENTION: Please click FINISH to finish this study and receive your Prolific code.\n\nYou are reminded that by completing this study, you are agreeing with your participation and the submission of your data.\n\n\n',
    font='Open Sans',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
continue_button_2 = visual.ImageStim(
    win=win,
    name='continue_button_2', units='height', 
    image='finish.png', mask=None,
    ori=0.0, pos=(0.4, -0.35), size=(0.1, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
selected_practice_trials = randchoice(81, size = 5, replace = False)
selected_trials = randchoice(81, size = 81, replace = False)
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "import_wave1_data"-------
continueRoutine = True
# update component parameters for each repeat
wave1Data = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('wave1_input_confidence.csv'),
    seed=None, name='wave1Data')

wave1 = wave1Data.trialList



# keep track of which components have finished
import_wave1_dataComponents = []
for thisComponent in import_wave1_dataComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
import_wave1_dataClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "import_wave1_data"-------
while continueRoutine:
    # get current time
    t = import_wave1_dataClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=import_wave1_dataClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in import_wave1_dataComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "import_wave1_data"-------
for thisComponent in import_wave1_dataComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "import_wave1_data" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
loop_informedConsent = data.TrialHandler(nReps=200.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='loop_informedConsent')
thisExp.addLoop(loop_informedConsent)  # add the loop to the experiment
thisLoop_informedConsent = loop_informedConsent.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop_informedConsent.rgb)
if thisLoop_informedConsent != None:
    for paramName in thisLoop_informedConsent:
        exec('{} = thisLoop_informedConsent[paramName]'.format(paramName))

for thisLoop_informedConsent in loop_informedConsent:
    currentLoop = loop_informedConsent
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_informedConsent.rgb)
    if thisLoop_informedConsent != None:
        for paramName in thisLoop_informedConsent:
            exec('{} = thisLoop_informedConsent[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "informedConsent"-------
    continueRoutine = True
    # update component parameters for each repeat
    event.clearEvents()
    
    progress_bar_size = (window_x*2)/7 * int(currentIC)
    progress_bar_pos = (-window_x) + (window_x*2)/7 * int(currentIC) / 2
    progress_text = "Informed consent: " + currentIC + "/7"
    
    
    informed_consent.setText(ICDict[currentIC])
    informed_consent_responses.keys = []
    informed_consent_responses.rt = []
    _informed_consent_responses_allKeys = []
    progress_bar_fixed.setPos((0, 0.48))
    progress_bar_fixed.setSize((window_x*2, 0.03))
    progress_bar.setPos((progress_bar_pos, 0.48))
    progress_bar.setSize((progress_bar_size, 0.03))
    progress_IC.setText(progress_text
)
    # keep track of which components have finished
    informedConsentComponents = [informed_consent, informed_consent_responses, progress_bar_fixed, progress_bar, progress_IC]
    for thisComponent in informedConsentComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    informedConsentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "informedConsent"-------
    while continueRoutine:
        # get current time
        t = informedConsentClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=informedConsentClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *informed_consent* updates
        if informed_consent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            informed_consent.frameNStart = frameN  # exact frame index
            informed_consent.tStart = t  # local t and not account for scr refresh
            informed_consent.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(informed_consent, 'tStartRefresh')  # time at next scr refresh
            informed_consent.setAutoDraw(True)
        
        # *informed_consent_responses* updates
        waitOnFlip = False
        if informed_consent_responses.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            informed_consent_responses.frameNStart = frameN  # exact frame index
            informed_consent_responses.tStart = t  # local t and not account for scr refresh
            informed_consent_responses.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(informed_consent_responses, 'tStartRefresh')  # time at next scr refresh
            informed_consent_responses.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(informed_consent_responses.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(informed_consent_responses.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if informed_consent_responses.status == STARTED and not waitOnFlip:
            theseKeys = informed_consent_responses.getKeys(keyList=['right', 'left', 'return', 'num_enter'], waitRelease=False)
            _informed_consent_responses_allKeys.extend(theseKeys)
            if len(_informed_consent_responses_allKeys):
                informed_consent_responses.keys = _informed_consent_responses_allKeys[-1].name  # just the last key pressed
                informed_consent_responses.rt = _informed_consent_responses_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *progress_bar_fixed* updates
        if progress_bar_fixed.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_bar_fixed.frameNStart = frameN  # exact frame index
            progress_bar_fixed.tStart = t  # local t and not account for scr refresh
            progress_bar_fixed.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_bar_fixed, 'tStartRefresh')  # time at next scr refresh
            progress_bar_fixed.setAutoDraw(True)
        
        # *progress_bar* updates
        if progress_bar.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_bar.frameNStart = frameN  # exact frame index
            progress_bar.tStart = t  # local t and not account for scr refresh
            progress_bar.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_bar, 'tStartRefresh')  # time at next scr refresh
            progress_bar.setAutoDraw(True)
        
        # *progress_IC* updates
        if progress_IC.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_IC.frameNStart = frameN  # exact frame index
            progress_IC.tStart = t  # local t and not account for scr refresh
            progress_IC.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_IC, 'tStartRefresh')  # time at next scr refresh
            progress_IC.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in informedConsentComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "informedConsent"-------
    for thisComponent in informedConsentComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #name = "informed_consent_{age}.png".format(age = currentIC)
    #win.saveMovieFrames(name) 
    
    if (informed_consent_responses.keys == "return" or informed_consent_responses.keys == "num_enter") and int(currentIC) == 7:
        currentIC = int(currentIC) + 1
    elif informed_consent_responses.keys == "right" and int(currentIC) == 7:
        currentIC = int(currentIC)
    elif informed_consent_responses.keys == "right" and int(currentIC) != 7:
        currentIC = int(currentIC) + 1
    elif informed_consent_responses.keys == "left":
        currentIC = int(currentIC) - 1
    
    if currentIC == 0:
        currentIC = 1  # can't go lower than
    elif currentIC == 8:
        loop_informedConsent.finished=True
        expInfo['informedConsent'] = "yes"
    
    currentIC = str(currentIC)
    
    # the Routine "informedConsent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 200.0 repeats of 'loop_informedConsent'


# set up handler to look after randomisation of conditions etc
loop_instrPrac = data.TrialHandler(nReps=200.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='loop_instrPrac')
thisExp.addLoop(loop_instrPrac)  # add the loop to the experiment
thisLoop_instrPrac = loop_instrPrac.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop_instrPrac.rgb)
if thisLoop_instrPrac != None:
    for paramName in thisLoop_instrPrac:
        exec('{} = thisLoop_instrPrac[paramName]'.format(paramName))

for thisLoop_instrPrac in loop_instrPrac:
    currentLoop = loop_instrPrac
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_instrPrac.rgb)
    if thisLoop_instrPrac != None:
        for paramName in thisLoop_instrPrac:
            exec('{} = thisLoop_instrPrac[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instrPrac"-------
    continueRoutine = True
    # update component parameters for each repeat
    response.keys = []
    response.rt = []
    _response_allKeys = []
    event.clearEvents()
    
    progress_bar_size = (window_x*2)/13 * int(currentPr)
    progress_bar_pos = (-window_x) + (window_x*2)/13 * int(currentPr) / 2
    progress_text = "Instructions: " + currentPr + "/13"
    
    text.setText(PrDict[currentPr])
    blue_mushroom.setPos((window_x-0.3, -0.4))
    red_mushroom.setPos((window_x-0.2, -0.4))
    progress_bar_fixed_2.setPos((0, 0.48))
    progress_bar_fixed_2.setSize((window_x*2, 0.03))
    progress_bar_2.setPos((progress_bar_pos, 0.48))
    progress_bar_2.setSize((progress_bar_size, 0.03))
    progress_IC_2.setText(progress_text
)
    # keep track of which components have finished
    instrPracComponents = [response, text, blue_mushroom, red_mushroom, progress_bar_fixed_2, progress_bar_2, progress_IC_2]
    for thisComponent in instrPracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instrPracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instrPrac"-------
    while continueRoutine:
        # get current time
        t = instrPracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instrPracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *response* updates
        waitOnFlip = False
        if response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            response.frameNStart = frameN  # exact frame index
            response.tStart = t  # local t and not account for scr refresh
            response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(response, 'tStartRefresh')  # time at next scr refresh
            response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if response.status == STARTED and not waitOnFlip:
            theseKeys = response.getKeys(keyList=['right', 'left', 'return', 'num_enter'], waitRelease=False)
            _response_allKeys.extend(theseKeys)
            if len(_response_allKeys):
                response.keys = _response_allKeys[-1].name  # just the last key pressed
                response.rt = _response_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
        # *blue_mushroom* updates
        if blue_mushroom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blue_mushroom.frameNStart = frameN  # exact frame index
            blue_mushroom.tStart = t  # local t and not account for scr refresh
            blue_mushroom.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blue_mushroom, 'tStartRefresh')  # time at next scr refresh
            blue_mushroom.setAutoDraw(True)
        
        # *red_mushroom* updates
        if red_mushroom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            red_mushroom.frameNStart = frameN  # exact frame index
            red_mushroom.tStart = t  # local t and not account for scr refresh
            red_mushroom.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(red_mushroom, 'tStartRefresh')  # time at next scr refresh
            red_mushroom.setAutoDraw(True)
        
        # *progress_bar_fixed_2* updates
        if progress_bar_fixed_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_bar_fixed_2.frameNStart = frameN  # exact frame index
            progress_bar_fixed_2.tStart = t  # local t and not account for scr refresh
            progress_bar_fixed_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_bar_fixed_2, 'tStartRefresh')  # time at next scr refresh
            progress_bar_fixed_2.setAutoDraw(True)
        
        # *progress_bar_2* updates
        if progress_bar_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_bar_2.frameNStart = frameN  # exact frame index
            progress_bar_2.tStart = t  # local t and not account for scr refresh
            progress_bar_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_bar_2, 'tStartRefresh')  # time at next scr refresh
            progress_bar_2.setAutoDraw(True)
        
        # *progress_IC_2* updates
        if progress_IC_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_IC_2.frameNStart = frameN  # exact frame index
            progress_IC_2.tStart = t  # local t and not account for scr refresh
            progress_IC_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_IC_2, 'tStartRefresh')  # time at next scr refresh
            progress_IC_2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instrPracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instrPrac"-------
    for thisComponent in instrPracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #name = "instrPractice_{age}.png".format(age = currentPr)
    #win.saveMovieFrames(name) 
    
    if (response.keys == "return" or response.keys == "num_enter") and int(currentPr) == 8:
        currentPr = int(currentPr) + 1
    elif response.keys == "right" and int(currentPr) == 8:
        currentPr = int(currentPr)
    elif response.keys == "right" and int(currentPr) != 8:
        currentPr = int(currentPr) + 1
    elif response.keys == "left":
        currentPr = int(currentPr) - 1
    
    if currentPr == 0:
        currentPr = 1  # can't go lower than
    elif currentPr == 9:
        loop_instrPrac.finished=True
    
    currentPr = str(currentPr)
    
    trial_index = 0
    # the Routine "instrPrac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 200.0 repeats of 'loop_instrPrac'


# set up handler to look after randomisation of conditions etc
loop_prTrials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trial_structure.csv', selection=selected_practice_trials),
    seed=None, name='loop_prTrials')
thisExp.addLoop(loop_prTrials)  # add the loop to the experiment
thisLoop_prTrial = loop_prTrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop_prTrial.rgb)
if thisLoop_prTrial != None:
    for paramName in thisLoop_prTrial:
        exec('{} = thisLoop_prTrial[paramName]'.format(paramName))

for thisLoop_prTrial in loop_prTrials:
    currentLoop = loop_prTrials
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_prTrial.rgb)
    if thisLoop_prTrial != None:
        for paramName in thisLoop_prTrial:
            exec('{} = thisLoop_prTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "setupSamples"-------
    continueRoutine = True
    # update component parameters for each repeat
    # retrieved from file
    if startGame == 0:
        nTotal = thisLoop_prTrial['nTotal']
        true_ratio = thisLoop_prTrial['trueRatio']
        given_ratio = thisLoop_prTrial['trueRatio']
        filler_trial = thisLoop_prTrial['fillerTrial']
    elif startGame == 1:
        nTotal = thisLoop_trial['nTotal']
        true_ratio = thisLoop_trial['trueRatio']
        given_ratio = thisLoop_trial['trueRatio']
        filler_trial = thisLoop_Trial['fillerTrial']
    nSamples = 5
    
    # create matrix that specifies the number of observations per sample
    nObservations = [0 for iSample in range(nSamples)]
    nLeft = nTotal
    for iSample in range(1,nSamples+1): # +1 to correct for 0-indexing in Python
        xmin = -1*((nSamples-iSample)*9-nLeft)  # nLeft-x <= (nSamples-iSample)x9, with 5 for number of total samples, 9 for max observations per sample in general. 
        xmin = max(1,xmin) # xmin is either 1, or a higher minimum based on how many observations and samples still need to be shown 
        xmax = -1*((nSamples-iSample)*1-nLeft) # nLeft-x >= (nSamples-iSample)x1, with 5 for number of total samples, 1 for min observations per sample in general.
        xmax = min(9,xmax) # xmax is either 9, or a lower maximum based on how many observations and samples still need to be shown 
        toChooseFrom = [*range(xmin, xmax+1)] # +1 because python reads 'up to but not including xmax'
        x = sample(toChooseFrom,1)[0] # sample returns list; convert list to integer
        nLeft = nLeft - x
        nObservations[iSample-1] = x
    
    # Now create the randomized list with the actual observations to show
    nBlue = round(given_ratio * nTotal)
    seen_ratio = nBlue / nTotal
    nRed = nTotal - nBlue
    itemList = np.array(["blue", "red"])
    itemList = np.repeat(itemList, [nBlue, nRed])
    random.shuffle(itemList)
    
    # Based on the shuffled list with 'red' and 'blue', define how many red's and blue's are in each sample.
    start = 0
    blue = [0 for iSample in range(nSamples)]
    red = [0 for iSample in range(nSamples)]
    for iSample in range(nSamples):
      blue[iSample] = sum(itemList[start:(start+nObservations[iSample])]=="blue")
      red[iSample] = sum(itemList[start:(start+nObservations[iSample])]=="red")
      start = start + nObservations[iSample]
    # keep track of which components have finished
    setupSamplesComponents = []
    for thisComponent in setupSamplesComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    setupSamplesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "setupSamples"-------
    while continueRoutine:
        # get current time
        t = setupSamplesClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=setupSamplesClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in setupSamplesComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "setupSamples"-------
    for thisComponent in setupSamplesComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sample_index = 0
    # the Routine "setupSamples" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "crossHair"-------
    continueRoutine = True
    # update component parameters for each repeat
    crosshair_ITI = round(random.random() * (2.0 - 1.5) + 1.5, 1)
    # keep track of which components have finished
    crossHairComponents = [cross_hair]
    for thisComponent in crossHairComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    crossHairClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "crossHair"-------
    while continueRoutine:
        # get current time
        t = crossHairClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=crossHairClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cross_hair* updates
        if cross_hair.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross_hair.frameNStart = frameN  # exact frame index
            cross_hair.tStart = t  # local t and not account for scr refresh
            cross_hair.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_hair, 'tStartRefresh')  # time at next scr refresh
            cross_hair.setAutoDraw(True)
        if cross_hair.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross_hair.tStartRefresh + crosshair_ITI-frameTolerance:
                # keep track of stop time/frame for later
                cross_hair.tStop = t  # not accounting for scr refresh
                cross_hair.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross_hair, 'tStopRefresh')  # time at next scr refresh
                cross_hair.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in crossHairComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "crossHair"-------
    for thisComponent in crossHairComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #win.saveMovieFrames('crosshair.png') 
    
    # the Routine "crossHair" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    loop_prSamples = data.TrialHandler(nReps=5.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='loop_prSamples')
    thisExp.addLoop(loop_prSamples)  # add the loop to the experiment
    thisLoop_prSample = loop_prSamples.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_prSample.rgb)
    if thisLoop_prSample != None:
        for paramName in thisLoop_prSample:
            exec('{} = thisLoop_prSample[paramName]'.format(paramName))
    
    for thisLoop_prSample in loop_prSamples:
        currentLoop = loop_prSamples
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_prSample.rgb)
        if thisLoop_prSample != None:
            for paramName in thisLoop_prSample:
                exec('{} = thisLoop_prSample[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "mushroomSample"-------
        continueRoutine = True
        routineTimer.add(1.200000)
        # update component parameters for each repeat
        # At the start of each sample, create a matrix with x and y coordinates of stimuli on screen
        S = np.array(["blue", "red"])
        # item = thisLoop_sample['item']
        S = np.repeat(S, [blue[sample_index], red[sample_index]])
        ok = 0
        while ok == 0: 
            coor_x = np.array(random.uniform(-aperture_size,aperture_size, nObservations[sample_index]))
            coor_y = np.array(random.uniform(-aperture_size,aperture_size, nObservations[sample_index]))
            diff_x = abs(coor_x[:, None] - coor_x)
            diff_y = abs(coor_y[:, None] - coor_y)
            # check if there is a pair for which both x and y coordinates overlap. If so, resample coordinates
            tooClose = (diff_x <= mushroom_size*0.9) & (diff_y <= mushroom_size*0.9)
            if (np.triu(tooClose, k=1)==False).all(): # only take into account upper triangle to get rid of diagonal which is always 0/True.
                ok = 1
        
        # initialize mushroom images
        if red[sample_index] > 0:
            red_mushrooms = [visual.ImageStim(
                win=win,
                name='red_mushrooms', 
                image='red_mushroom.png', mask=None,
                ori=0.0, pos=(coor_x[i], coor_y[i]), size=[mushroom_size],
                color=[1,1,1], colorSpace='rgb', opacity=None,
                flipHoriz=False, flipVert=False,
                texRes=128.0, interpolate=True, depth=0.0)
               for i in range(red[sample_index])]
            for i in red_mushrooms:
                i.autoDraw = True
        if blue[sample_index] > 0:
            blue_mushrooms = [visual.ImageStim(
                win=win,
                name='blue_mushrooms', 
                image='blue_mushroom.png', mask=None,
                ori=0.0, pos=(coor_x[i], coor_y[i]), size=[mushroom_size],
                color=[1,1,1], colorSpace='rgb', opacity=None,
                flipHoriz=False, flipVert=False,
                texRes=128.0, interpolate=True, depth=0.0) 
               for i in range(red[sample_index],red[sample_index]+blue[sample_index])]
            for i in blue_mushrooms:
                i.setAutoDraw(True)
        
        #win.getMovieFrame()
        #name = "sample_{age}.png".format(age = sample_index)
        #win.saveMovieFrames(name) 
        
        
        # keep track of which components have finished
        mushroomSampleComponents = [text_2]
        for thisComponent in mushroomSampleComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        mushroomSampleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "mushroomSample"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = mushroomSampleClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=mushroomSampleClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2* updates
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                text_2.setAutoDraw(True)
            if text_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_2.tStartRefresh + 1.2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_2.tStop = t  # not accounting for scr refresh
                    text_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                    text_2.setAutoDraw(False)
            if t < 1.2:
                continueRoutine = True
            else:
                continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in mushroomSampleComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "mushroomSample"-------
        for thisComponent in mushroomSampleComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if red[sample_index] > 0:
            for i in red_mushrooms:
                i.setAutoDraw(False)
        
        if blue[sample_index] > 0:
            for i in blue_mushrooms:
                i.setAutoDraw(False)
        
        sample_index = sample_index + 1
        
        # ------Prepare to start Routine "ISI"-------
        continueRoutine = True
        routineTimer.add(0.300000)
        # update component parameters for each repeat
        # keep track of which components have finished
        ISIComponents = [isi]
        for thisComponent in ISIComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ISIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ISI"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = ISIClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ISIClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *isi* updates
            if isi.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                isi.frameNStart = frameN  # exact frame index
                isi.tStart = t  # local t and not account for scr refresh
                isi.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(isi, 'tStartRefresh')  # time at next scr refresh
                isi.setAutoDraw(True)
            if isi.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > isi.tStartRefresh + 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    isi.tStop = t  # not accounting for scr refresh
                    isi.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(isi, 'tStopRefresh')  # time at next scr refresh
                    isi.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ISIComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ISI"-------
        for thisComponent in ISIComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
    # completed 5.0 repeats of 'loop_prSamples'
    
    
    # ------Prepare to start Routine "firstEstimation"-------
    continueRoutine = True
    # update component parameters for each repeat
    event.clearEvents()
    
    estimation_slider.markerPos = 50
    markerPosition = 0
    blueRectangle_pos = -0.125
    blueRectangle_size = 0.25
    show_estimate_text = ''
    
    
    slider_opacity = 0
    sliderfont = "Open Sans";
    showEstimate.setFont(sliderfont)
    estimation_slider.reset()
    slider_text0.setFont(sliderfont)
    slider_text100.setFont(sliderfont)
    # keep track of which components have finished
    firstEstimationComponents = [how_many_mushrooms, your_estimate, white_box, showEstimate, estimation_slider, red_rectangle, blue_rectangle, sliderMarker, slider_text0, slider_text100, space_to_submit_estimation]
    for thisComponent in firstEstimationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    firstEstimationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "firstEstimation"-------
    while continueRoutine:
        # get current time
        t = firstEstimationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=firstEstimationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        keys = event.getKeys()
        
        # need to manually check for escape, as our key checking will interfere with
        # Builder's escape check:
        if 'escape' in keys: 
            core.quit()
        
        # move slider colors along with response
        if estimation_slider.markerPos is not None:
             markerPos = estimation_slider.markerPos
             markerPosition = (markerPos - 50) / 200
             show_estimate_text = int(markerPos)
             blue_rectangle_pos = -0.25 + markerPos/200/2
             blue_rectangle_size = markerPos/200
        
        
        
        # check if rating has been completed:
        rating_completed = 0
        if estimation_slider.getRating() is not None:
            rating_completed = 1
        
        
        if ('return' in keys or 'num_enter' in keys) and rating_completed == 1:
            continueRoutine = False # end now
        
        
        # *how_many_mushrooms* updates
        if how_many_mushrooms.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            how_many_mushrooms.frameNStart = frameN  # exact frame index
            how_many_mushrooms.tStart = t  # local t and not account for scr refresh
            how_many_mushrooms.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(how_many_mushrooms, 'tStartRefresh')  # time at next scr refresh
            how_many_mushrooms.setAutoDraw(True)
        
        # *your_estimate* updates
        if your_estimate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            your_estimate.frameNStart = frameN  # exact frame index
            your_estimate.tStart = t  # local t and not account for scr refresh
            your_estimate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(your_estimate, 'tStartRefresh')  # time at next scr refresh
            your_estimate.setAutoDraw(True)
        
        # *white_box* updates
        if white_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            white_box.frameNStart = frameN  # exact frame index
            white_box.tStart = t  # local t and not account for scr refresh
            white_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(white_box, 'tStartRefresh')  # time at next scr refresh
            white_box.setAutoDraw(True)
        
        # *showEstimate* updates
        if showEstimate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            showEstimate.frameNStart = frameN  # exact frame index
            showEstimate.tStart = t  # local t and not account for scr refresh
            showEstimate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(showEstimate, 'tStartRefresh')  # time at next scr refresh
            showEstimate.setAutoDraw(True)
        if showEstimate.status == STARTED:  # only update if drawing
            showEstimate.setPos([markerPosition, -0.14])
            showEstimate.setText(show_estimate_text)
        
        # *estimation_slider* updates
        if estimation_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            estimation_slider.frameNStart = frameN  # exact frame index
            estimation_slider.tStart = t  # local t and not account for scr refresh
            estimation_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(estimation_slider, 'tStartRefresh')  # time at next scr refresh
            estimation_slider.setAutoDraw(True)
        
        # *red_rectangle* updates
        if red_rectangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            red_rectangle.frameNStart = frameN  # exact frame index
            red_rectangle.tStart = t  # local t and not account for scr refresh
            red_rectangle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(red_rectangle, 'tStartRefresh')  # time at next scr refresh
            red_rectangle.setAutoDraw(True)
        
        # *blue_rectangle* updates
        if blue_rectangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blue_rectangle.frameNStart = frameN  # exact frame index
            blue_rectangle.tStart = t  # local t and not account for scr refresh
            blue_rectangle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blue_rectangle, 'tStartRefresh')  # time at next scr refresh
            blue_rectangle.setAutoDraw(True)
        if blue_rectangle.status == STARTED:  # only update if drawing
            blue_rectangle.setPos([blueRectangle_pos, -0.19])
            blue_rectangle.setSize([blueRectangle_size, 0.04])
        
        # *sliderMarker* updates
        if sliderMarker.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderMarker.frameNStart = frameN  # exact frame index
            sliderMarker.tStart = t  # local t and not account for scr refresh
            sliderMarker.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderMarker, 'tStartRefresh')  # time at next scr refresh
            sliderMarker.setAutoDraw(True)
        if sliderMarker.status == STARTED:  # only update if drawing
            sliderMarker.setPos([markerPosition, -0.19])
        
        # *slider_text0* updates
        if slider_text0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text0.frameNStart = frameN  # exact frame index
            slider_text0.tStart = t  # local t and not account for scr refresh
            slider_text0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text0, 'tStartRefresh')  # time at next scr refresh
            slider_text0.setAutoDraw(True)
        
        # *slider_text100* updates
        if slider_text100.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text100.frameNStart = frameN  # exact frame index
            slider_text100.tStart = t  # local t and not account for scr refresh
            slider_text100.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text100, 'tStartRefresh')  # time at next scr refresh
            slider_text100.setAutoDraw(True)
        
        # *space_to_submit_estimation* updates
        if space_to_submit_estimation.status == NOT_STARTED and rating_completed == 1:
            # keep track of start time/frame for later
            space_to_submit_estimation.frameNStart = frameN  # exact frame index
            space_to_submit_estimation.tStart = t  # local t and not account for scr refresh
            space_to_submit_estimation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(space_to_submit_estimation, 'tStartRefresh')  # time at next scr refresh
            space_to_submit_estimation.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in firstEstimationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "firstEstimation"-------
    for thisComponent in firstEstimationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #win.saveMovieFrames('response.png') 
    
    # performance
    deviance = int(estimation_slider.getRating() - true_ratio*100)
    abs_deviance = abs(deviance)
    
    # only save data during actual task, not practice
    if startGame == 1:
        list_deviance.append(abs_deviance)
        loop_trials.addData('cross_hair.ITI', crosshair_ITI)
        loop_trials.addData('seen_ratio', seen_ratio)
        loop_trials.addData('nMushrooms', " ".join(map(str, nObservations)))
        loop_trials.addData('nBlue', " ".join(map(str, blue)))
        loop_trials.addData('nRed', " ".join(map(str, red)))
        loop_trials.addData('estimation.rating', estimation_slider.getRating())
        loop_trials.addData('estimation.rt', estimation_slider.getRT())
    
    
    # the Routine "firstEstimation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "SI"-------
    continueRoutine = True
    # update component parameters for each repeat
    # filter the list of objects based on trial characteristics
    #cond0 = [trial for trial in wave1 if trial['true_ratio'] == true_ratio]
    
    event.clearEvents()
    
    markerPos_peer = peer_estimate
    markerPosition_peer = (markerPos_peer - 50) / 200
    blueRectangle_peer_pos = -0.25 + markerPos_peer/200/2
    blueRectangle_peer_size = markerPos_peer/200
    show_estimate_peer_text = int(markerPos_peer)
    
    event.clearEvents()
    
    estimation_slider_2.markerPos = estimation_slider.getRating()
    markerPos = estimation_slider_2.markerPos
    markerPosition = (markerPos - 50) / 200
    blueRectangle_pos = -0.25 + markerPos/200/2
    blueRectangle_size = markerPos/200
    show_estimate_text = int(markerPos)
    
    
    slider_opacity = 0
    sliderfont = "Open Sans"
    
    your_estimate_text = "Your part A estimate was " + markerPos + "\nYour part B estimate:"
    
    peers_estimate.setText(peers_estimate_text)
    showEstimate_peer.setPos([markerPosition_peer, 0.15])
    showEstimate_peer.setText(show_estimate_peer_text)
    showEstimate_peer.setFont(sliderfont)
    blue_rectangle_peer.setPos([blueRectangle_peer_pos, 0.1])
    blue_rectangle_peer.setSize([blueRectangle_peer_size, 0.04])
    slider_text0_peer.setFont(sliderfont)
    slider_text100_peer.setFont(sliderfont)
    your_estimate_2.setText(your_estimate_text)
    showEstimate_2.setFont(sliderfont)
    estimation_slider_2.reset()
    slider_text0_2.setFont(sliderfont)
    slider_text100_2.setFont(sliderfont)
    # keep track of which components have finished
    SIComponents = [how_many_mushrooms_2, peers_estimate, white_box_peer, showEstimate_peer, red_rectangle_peer, blue_rectangle_peer, slider_text0_peer, slider_text100_peer, your_estimate_2, white_box_2, showEstimate_2, estimation_slider_2, red_rectangle_2, blue_rectangle_2, sliderMarker_2, slider_text0_2, slider_text100_2, space_to_submit_estimation_2]
    for thisComponent in SIComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    SIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "SI"-------
    while continueRoutine:
        # get current time
        t = SIClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=SIClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        keys = event.getKeys()
        
        # need to manually check for escape, as our key checking will interfere with
        # Builder's escape check:
        if 'escape' in keys: 
            core.quit()
        
        # move slider colors along with response
        if estimation_slider_2.markerPos is not None:
             markerPos = estimation_slider_2.markerPos
             markerPosition = (markerPos - 50) / 200
             show_estimate_text = int(markerPos)
             blueRectangle_pos = -0.25 + markerPos/200/2
             blueRectangle_size = markerPos/200
        
        
        
        # check if rating has been completed:
        rating_completed = 0
        if estimation_slider_2.getRating() is not None:
            rating_completed = 1
        
        if ('return' in keys or 'num_enter' in keys) and rating_completed == 1:
            continueRoutine = False # end now
        
        
        # *how_many_mushrooms_2* updates
        if how_many_mushrooms_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            how_many_mushrooms_2.frameNStart = frameN  # exact frame index
            how_many_mushrooms_2.tStart = t  # local t and not account for scr refresh
            how_many_mushrooms_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(how_many_mushrooms_2, 'tStartRefresh')  # time at next scr refresh
            how_many_mushrooms_2.setAutoDraw(True)
        
        # *peers_estimate* updates
        if peers_estimate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            peers_estimate.frameNStart = frameN  # exact frame index
            peers_estimate.tStart = t  # local t and not account for scr refresh
            peers_estimate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(peers_estimate, 'tStartRefresh')  # time at next scr refresh
            peers_estimate.setAutoDraw(True)
        
        # *white_box_peer* updates
        if white_box_peer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            white_box_peer.frameNStart = frameN  # exact frame index
            white_box_peer.tStart = t  # local t and not account for scr refresh
            white_box_peer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(white_box_peer, 'tStartRefresh')  # time at next scr refresh
            white_box_peer.setAutoDraw(True)
        
        # *showEstimate_peer* updates
        if showEstimate_peer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            showEstimate_peer.frameNStart = frameN  # exact frame index
            showEstimate_peer.tStart = t  # local t and not account for scr refresh
            showEstimate_peer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(showEstimate_peer, 'tStartRefresh')  # time at next scr refresh
            showEstimate_peer.setAutoDraw(True)
        
        # *red_rectangle_peer* updates
        if red_rectangle_peer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            red_rectangle_peer.frameNStart = frameN  # exact frame index
            red_rectangle_peer.tStart = t  # local t and not account for scr refresh
            red_rectangle_peer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(red_rectangle_peer, 'tStartRefresh')  # time at next scr refresh
            red_rectangle_peer.setAutoDraw(True)
        
        # *blue_rectangle_peer* updates
        if blue_rectangle_peer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blue_rectangle_peer.frameNStart = frameN  # exact frame index
            blue_rectangle_peer.tStart = t  # local t and not account for scr refresh
            blue_rectangle_peer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blue_rectangle_peer, 'tStartRefresh')  # time at next scr refresh
            blue_rectangle_peer.setAutoDraw(True)
        
        # *slider_text0_peer* updates
        if slider_text0_peer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text0_peer.frameNStart = frameN  # exact frame index
            slider_text0_peer.tStart = t  # local t and not account for scr refresh
            slider_text0_peer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text0_peer, 'tStartRefresh')  # time at next scr refresh
            slider_text0_peer.setAutoDraw(True)
        
        # *slider_text100_peer* updates
        if slider_text100_peer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text100_peer.frameNStart = frameN  # exact frame index
            slider_text100_peer.tStart = t  # local t and not account for scr refresh
            slider_text100_peer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text100_peer, 'tStartRefresh')  # time at next scr refresh
            slider_text100_peer.setAutoDraw(True)
        
        # *your_estimate_2* updates
        if your_estimate_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            your_estimate_2.frameNStart = frameN  # exact frame index
            your_estimate_2.tStart = t  # local t and not account for scr refresh
            your_estimate_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(your_estimate_2, 'tStartRefresh')  # time at next scr refresh
            your_estimate_2.setAutoDraw(True)
        
        # *white_box_2* updates
        if white_box_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            white_box_2.frameNStart = frameN  # exact frame index
            white_box_2.tStart = t  # local t and not account for scr refresh
            white_box_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(white_box_2, 'tStartRefresh')  # time at next scr refresh
            white_box_2.setAutoDraw(True)
        
        # *showEstimate_2* updates
        if showEstimate_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            showEstimate_2.frameNStart = frameN  # exact frame index
            showEstimate_2.tStart = t  # local t and not account for scr refresh
            showEstimate_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(showEstimate_2, 'tStartRefresh')  # time at next scr refresh
            showEstimate_2.setAutoDraw(True)
        if showEstimate_2.status == STARTED:  # only update if drawing
            showEstimate_2.setPos([markerPosition, -0.14])
            showEstimate_2.setText(show_estimate_text)
        
        # *estimation_slider_2* updates
        if estimation_slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            estimation_slider_2.frameNStart = frameN  # exact frame index
            estimation_slider_2.tStart = t  # local t and not account for scr refresh
            estimation_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(estimation_slider_2, 'tStartRefresh')  # time at next scr refresh
            estimation_slider_2.setAutoDraw(True)
        
        # *red_rectangle_2* updates
        if red_rectangle_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            red_rectangle_2.frameNStart = frameN  # exact frame index
            red_rectangle_2.tStart = t  # local t and not account for scr refresh
            red_rectangle_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(red_rectangle_2, 'tStartRefresh')  # time at next scr refresh
            red_rectangle_2.setAutoDraw(True)
        
        # *blue_rectangle_2* updates
        if blue_rectangle_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blue_rectangle_2.frameNStart = frameN  # exact frame index
            blue_rectangle_2.tStart = t  # local t and not account for scr refresh
            blue_rectangle_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blue_rectangle_2, 'tStartRefresh')  # time at next scr refresh
            blue_rectangle_2.setAutoDraw(True)
        if blue_rectangle_2.status == STARTED:  # only update if drawing
            blue_rectangle_2.setPos([blueRectangle_pos, -0.19])
            blue_rectangle_2.setSize([blueRectangle_size, 0.04])
        
        # *sliderMarker_2* updates
        if sliderMarker_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderMarker_2.frameNStart = frameN  # exact frame index
            sliderMarker_2.tStart = t  # local t and not account for scr refresh
            sliderMarker_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderMarker_2, 'tStartRefresh')  # time at next scr refresh
            sliderMarker_2.setAutoDraw(True)
        if sliderMarker_2.status == STARTED:  # only update if drawing
            sliderMarker_2.setPos([markerPosition, -0.19])
        
        # *slider_text0_2* updates
        if slider_text0_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text0_2.frameNStart = frameN  # exact frame index
            slider_text0_2.tStart = t  # local t and not account for scr refresh
            slider_text0_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text0_2, 'tStartRefresh')  # time at next scr refresh
            slider_text0_2.setAutoDraw(True)
        
        # *slider_text100_2* updates
        if slider_text100_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text100_2.frameNStart = frameN  # exact frame index
            slider_text100_2.tStart = t  # local t and not account for scr refresh
            slider_text100_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text100_2, 'tStartRefresh')  # time at next scr refresh
            slider_text100_2.setAutoDraw(True)
        
        # *space_to_submit_estimation_2* updates
        if space_to_submit_estimation_2.status == NOT_STARTED and rating_completed == 1:
            # keep track of start time/frame for later
            space_to_submit_estimation_2.frameNStart = frameN  # exact frame index
            space_to_submit_estimation_2.tStart = t  # local t and not account for scr refresh
            space_to_submit_estimation_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(space_to_submit_estimation_2, 'tStartRefresh')  # time at next scr refresh
            space_to_submit_estimation_2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in SIComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "SI"-------
    for thisComponent in SIComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #win.saveMovieFrames('response.png') 
    
    # performance
    deviance = int(estimation_slider_2.getRating() - true_ratio*100)
    abs_deviance = abs(deviance)
    
    # only save data during actual task, not practice
    if startGame == 1:
        list_deviance.append(abs_deviance)
        loop_trials.addData('estimation2.rating', estimation_slider_2.getRating())
        loop_trials.addData('estimation2.rt', estimation_slider_2.getRT())
        loop_trials.addData('estimate_peer', peer_estimate)
        loop_trials.addData('confidence_peer', confidence_level)
    
        if loop_trials.nRemaining == 0:
            list_deviance = np.array(list_deviance)
            sample_deviance = sample(list(list_deviance),1)[0]
            bonus = 1.50 - sample_deviance*0.04
            if bonus < 0:
                bonus = 0 # never lower than
            expInfo['bonus'] = bonus
    
    trial_index = trial_index + 1
    # the Routine "SI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'loop_prTrials'


# ------Prepare to start Routine "test_questions"-------
continueRoutine = True
# update component parameters for each repeat
progress_bar_size = (window_x*2)/12 * 9
progress_bar_pos = (-window_x) + (window_x*2)/12 * 9 / 2



progress_bar_fixed_4.setPos((0, 0.48))
progress_bar_fixed_4.setSize((window_x*2, 0.03))
progress_bar_4.setPos((progress_bar_pos, 0.48))
progress_bar_4.setSize((progress_bar_size, 0.03))
test_Q1.reset()
test_Q2.reset()
test_Q3.reset()
test_Q4.reset()
test_Q5.reset()
blue_mushroom_5.setPos((window_x-0.3, -0.4))
red_mushroom_5.setPos((window_x-0.2, -0.4))
# keep track of which components have finished
test_questionsComponents = [progress_bar_fixed_4, progress_bar_4, progress_IC_4, text_4, Q1, test_Q1, wrong_answer_1, Q2, test_Q2, wrong_answer_2, Q3, test_Q3, wrong_answer_3, Q4, test_Q4, wrong_answer_4, Q5, test_Q5, wrong_answer_5, enter_2, blue_mushroom_5, red_mushroom_5]
for thisComponent in test_questionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
test_questionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "test_questions"-------
while continueRoutine:
    # get current time
    t = test_questionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=test_questionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    keys = event.getKeys()
    
    # need to manually check for escape, as our key checking will interfere with
    # Builder's escape check:
    if 'escape' in keys: 
        core.quit()
    
    # check if questions have been completed correctly:
    rating_completed = 0
    show_false_1 = " "
    show_false_2 = " "
    show_false_3 = " "
    show_false_4 = " "
    show_false_5 = " "
    
    if test_Q1.getRating() == 2:
        rating_completed = rating_completed + 1
    elif test_Q1.getRating() == 1:
        show_false_1 = "Wrong answer. Please pick another option."
    
    if test_Q2.getRating() == 1:
        rating_completed = rating_completed + 1
    elif test_Q2.getRating() == 2:
        show_false_2 = "Wrong answer. Please pick another option."
    
    if test_Q3.getRating() == 2:
        rating_completed = rating_completed + 1
    elif test_Q3.getRating() == 1:
        show_false_3 = "Wrong answer. Please pick another option."
    
    if test_Q4.getRating() == 3:
        rating_completed = rating_completed + 1
    elif test_Q4.getRating() < 3:
        show_false_4 = "Wrong answer. Please pick another option."
    
    if test_Q5.getRating() == 2:
        rating_completed = rating_completed + 1
    elif test_Q5.getRating() == 1:
        show_false_5 = "Wrong answer. Please pick another option."
    
    # show participant that they can press space
    show_enter = ""
    if rating_completed == 5:
        show_enter = "Press ENTER to continue"
    
    if ('return' in keys or 'num_enter'in keys) and rating_completed == 5:
        continueRoutine = False # end now
    
    # *progress_bar_fixed_4* updates
    if progress_bar_fixed_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        progress_bar_fixed_4.frameNStart = frameN  # exact frame index
        progress_bar_fixed_4.tStart = t  # local t and not account for scr refresh
        progress_bar_fixed_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(progress_bar_fixed_4, 'tStartRefresh')  # time at next scr refresh
        progress_bar_fixed_4.setAutoDraw(True)
    
    # *progress_bar_4* updates
    if progress_bar_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        progress_bar_4.frameNStart = frameN  # exact frame index
        progress_bar_4.tStart = t  # local t and not account for scr refresh
        progress_bar_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(progress_bar_4, 'tStartRefresh')  # time at next scr refresh
        progress_bar_4.setAutoDraw(True)
    
    # *progress_IC_4* updates
    if progress_IC_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        progress_IC_4.frameNStart = frameN  # exact frame index
        progress_IC_4.tStart = t  # local t and not account for scr refresh
        progress_IC_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(progress_IC_4, 'tStartRefresh')  # time at next scr refresh
        progress_IC_4.setAutoDraw(True)
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *Q1* updates
    if Q1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Q1.frameNStart = frameN  # exact frame index
        Q1.tStart = t  # local t and not account for scr refresh
        Q1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Q1, 'tStartRefresh')  # time at next scr refresh
        Q1.setAutoDraw(True)
    
    # *test_Q1* updates
    if test_Q1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        test_Q1.frameNStart = frameN  # exact frame index
        test_Q1.tStart = t  # local t and not account for scr refresh
        test_Q1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(test_Q1, 'tStartRefresh')  # time at next scr refresh
        test_Q1.setAutoDraw(True)
    
    # *wrong_answer_1* updates
    if wrong_answer_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        wrong_answer_1.frameNStart = frameN  # exact frame index
        wrong_answer_1.tStart = t  # local t and not account for scr refresh
        wrong_answer_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(wrong_answer_1, 'tStartRefresh')  # time at next scr refresh
        wrong_answer_1.setAutoDraw(True)
    if wrong_answer_1.status == STARTED:  # only update if drawing
        wrong_answer_1.setText(show_false_1)
    
    # *Q2* updates
    if Q2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Q2.frameNStart = frameN  # exact frame index
        Q2.tStart = t  # local t and not account for scr refresh
        Q2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Q2, 'tStartRefresh')  # time at next scr refresh
        Q2.setAutoDraw(True)
    
    # *test_Q2* updates
    if test_Q2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        test_Q2.frameNStart = frameN  # exact frame index
        test_Q2.tStart = t  # local t and not account for scr refresh
        test_Q2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(test_Q2, 'tStartRefresh')  # time at next scr refresh
        test_Q2.setAutoDraw(True)
    
    # *wrong_answer_2* updates
    if wrong_answer_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        wrong_answer_2.frameNStart = frameN  # exact frame index
        wrong_answer_2.tStart = t  # local t and not account for scr refresh
        wrong_answer_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(wrong_answer_2, 'tStartRefresh')  # time at next scr refresh
        wrong_answer_2.setAutoDraw(True)
    if wrong_answer_2.status == STARTED:  # only update if drawing
        wrong_answer_2.setText(show_false_2)
    
    # *Q3* updates
    if Q3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Q3.frameNStart = frameN  # exact frame index
        Q3.tStart = t  # local t and not account for scr refresh
        Q3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Q3, 'tStartRefresh')  # time at next scr refresh
        Q3.setAutoDraw(True)
    
    # *test_Q3* updates
    if test_Q3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        test_Q3.frameNStart = frameN  # exact frame index
        test_Q3.tStart = t  # local t and not account for scr refresh
        test_Q3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(test_Q3, 'tStartRefresh')  # time at next scr refresh
        test_Q3.setAutoDraw(True)
    
    # *wrong_answer_3* updates
    if wrong_answer_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        wrong_answer_3.frameNStart = frameN  # exact frame index
        wrong_answer_3.tStart = t  # local t and not account for scr refresh
        wrong_answer_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(wrong_answer_3, 'tStartRefresh')  # time at next scr refresh
        wrong_answer_3.setAutoDraw(True)
    if wrong_answer_3.status == STARTED:  # only update if drawing
        wrong_answer_3.setText(show_false_3)
    
    # *Q4* updates
    if Q4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Q4.frameNStart = frameN  # exact frame index
        Q4.tStart = t  # local t and not account for scr refresh
        Q4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Q4, 'tStartRefresh')  # time at next scr refresh
        Q4.setAutoDraw(True)
    
    # *test_Q4* updates
    if test_Q4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        test_Q4.frameNStart = frameN  # exact frame index
        test_Q4.tStart = t  # local t and not account for scr refresh
        test_Q4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(test_Q4, 'tStartRefresh')  # time at next scr refresh
        test_Q4.setAutoDraw(True)
    
    # *wrong_answer_4* updates
    if wrong_answer_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        wrong_answer_4.frameNStart = frameN  # exact frame index
        wrong_answer_4.tStart = t  # local t and not account for scr refresh
        wrong_answer_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(wrong_answer_4, 'tStartRefresh')  # time at next scr refresh
        wrong_answer_4.setAutoDraw(True)
    if wrong_answer_4.status == STARTED:  # only update if drawing
        wrong_answer_4.setText(show_false_4)
    
    # *Q5* updates
    if Q5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Q5.frameNStart = frameN  # exact frame index
        Q5.tStart = t  # local t and not account for scr refresh
        Q5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Q5, 'tStartRefresh')  # time at next scr refresh
        Q5.setAutoDraw(True)
    
    # *test_Q5* updates
    if test_Q5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        test_Q5.frameNStart = frameN  # exact frame index
        test_Q5.tStart = t  # local t and not account for scr refresh
        test_Q5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(test_Q5, 'tStartRefresh')  # time at next scr refresh
        test_Q5.setAutoDraw(True)
    
    # *wrong_answer_5* updates
    if wrong_answer_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        wrong_answer_5.frameNStart = frameN  # exact frame index
        wrong_answer_5.tStart = t  # local t and not account for scr refresh
        wrong_answer_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(wrong_answer_5, 'tStartRefresh')  # time at next scr refresh
        wrong_answer_5.setAutoDraw(True)
    if wrong_answer_5.status == STARTED:  # only update if drawing
        wrong_answer_5.setText(show_false_5)
    
    # *enter_2* updates
    if enter_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        enter_2.frameNStart = frameN  # exact frame index
        enter_2.tStart = t  # local t and not account for scr refresh
        enter_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(enter_2, 'tStartRefresh')  # time at next scr refresh
        enter_2.setAutoDraw(True)
    if enter_2.status == STARTED:  # only update if drawing
        enter_2.setText(show_enter)
    
    # *blue_mushroom_5* updates
    if blue_mushroom_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        blue_mushroom_5.frameNStart = frameN  # exact frame index
        blue_mushroom_5.tStart = t  # local t and not account for scr refresh
        blue_mushroom_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(blue_mushroom_5, 'tStartRefresh')  # time at next scr refresh
        blue_mushroom_5.setAutoDraw(True)
    
    # *red_mushroom_5* updates
    if red_mushroom_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        red_mushroom_5.frameNStart = frameN  # exact frame index
        red_mushroom_5.tStart = t  # local t and not account for scr refresh
        red_mushroom_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(red_mushroom_5, 'tStartRefresh')  # time at next scr refresh
        red_mushroom_5.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in test_questionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "test_questions"-------
for thisComponent in test_questionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "test_questions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
loop_instr = data.TrialHandler(nReps=200.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='loop_instr')
thisExp.addLoop(loop_instr)  # add the loop to the experiment
thisLoop_instr = loop_instr.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop_instr.rgb)
if thisLoop_instr != None:
    for paramName in thisLoop_instr:
        exec('{} = thisLoop_instr[paramName]'.format(paramName))

for thisLoop_instr in loop_instr:
    currentLoop = loop_instr
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_instr.rgb)
    if thisLoop_instr != None:
        for paramName in thisLoop_instr:
            exec('{} = thisLoop_instr[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instructions"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    progress_bar_size = (window_x*2)/13 * (int(currentInstr) + 9)
    progress_bar_pos = (-window_x) + (window_x*2)/13 * (int(currentInstr) + 9) / 2
    progress_text = "Instructions: " + str(int(currentInstr)+9) + "/13"
    
    text_3.setText(InstrDict[currentInstr])
    blue_mushroom_2.setPos((window_x-0.3, -0.4))
    red_mushroom_2.setPos((window_x-0.2, -0.4))
    progress_bar_fixed_3.setPos((0, 0.48))
    progress_bar_fixed_3.setSize((window_x*2, 0.03))
    progress_bar_3.setPos((progress_bar_pos, 0.48))
    progress_bar_3.setSize((progress_bar_size, 0.03))
    progress_IC_3.setText(progress_text
)
    # keep track of which components have finished
    instructionsComponents = [key_resp_2, text_3, blue_mushroom_2, red_mushroom_2, progress_bar_fixed_3, progress_bar_3, progress_IC_3]
    for thisComponent in instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instructions"-------
    while continueRoutine:
        # get current time
        t = instructionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['right', 'left', 'return', 'num_enter'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        
        # *blue_mushroom_2* updates
        if blue_mushroom_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blue_mushroom_2.frameNStart = frameN  # exact frame index
            blue_mushroom_2.tStart = t  # local t and not account for scr refresh
            blue_mushroom_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blue_mushroom_2, 'tStartRefresh')  # time at next scr refresh
            blue_mushroom_2.setAutoDraw(True)
        
        # *red_mushroom_2* updates
        if red_mushroom_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            red_mushroom_2.frameNStart = frameN  # exact frame index
            red_mushroom_2.tStart = t  # local t and not account for scr refresh
            red_mushroom_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(red_mushroom_2, 'tStartRefresh')  # time at next scr refresh
            red_mushroom_2.setAutoDraw(True)
        
        # *progress_bar_fixed_3* updates
        if progress_bar_fixed_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_bar_fixed_3.frameNStart = frameN  # exact frame index
            progress_bar_fixed_3.tStart = t  # local t and not account for scr refresh
            progress_bar_fixed_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_bar_fixed_3, 'tStartRefresh')  # time at next scr refresh
            progress_bar_fixed_3.setAutoDraw(True)
        
        # *progress_bar_3* updates
        if progress_bar_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_bar_3.frameNStart = frameN  # exact frame index
            progress_bar_3.tStart = t  # local t and not account for scr refresh
            progress_bar_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_bar_3, 'tStartRefresh')  # time at next scr refresh
            progress_bar_3.setAutoDraw(True)
        
        # *progress_IC_3* updates
        if progress_IC_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            progress_IC_3.frameNStart = frameN  # exact frame index
            progress_IC_3.tStart = t  # local t and not account for scr refresh
            progress_IC_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(progress_IC_3, 'tStartRefresh')  # time at next scr refresh
            progress_IC_3.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instructions"-------
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #name = "instructions_{age}.png".format(age = currentInstr)
    #win.saveMovieFrames(name) 
    
    if (key_resp_2.keys == "return" or key_resp_2.keys == "num_enter") and int(currentInstr) == 4:
        currentInstr = int(currentInstr) + 1
    elif key_resp_2.keys == "right" and int(currentInstr) == 4:
        currentInstr = int(currentInstr)
    elif key_resp_2.keys == "right" and int(currentInstr) != 4:
        currentInstr = int(currentInstr) + 1
    elif key_resp_2.keys == "left":
        currentInstr = int(currentInstr) - 1
    
    if currentInstr == 0:
        currentInstr = 1  # can't go lower than
    elif currentInstr == 5:
        loop_instr.finished=True
    
    currentInstr = str(currentInstr)
    
    startGame = 1
    list_deviance = []
    
    trial_index = 0
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 200.0 repeats of 'loop_instr'


# set up handler to look after randomisation of conditions etc
loop_trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trial_structure.csv', selection=selected_trials),
    seed=None, name='loop_trials')
thisExp.addLoop(loop_trials)  # add the loop to the experiment
thisLoop_trial = loop_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop_trial.rgb)
if thisLoop_trial != None:
    for paramName in thisLoop_trial:
        exec('{} = thisLoop_trial[paramName]'.format(paramName))

for thisLoop_trial in loop_trials:
    currentLoop = loop_trials
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_trial.rgb)
    if thisLoop_trial != None:
        for paramName in thisLoop_trial:
            exec('{} = thisLoop_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "setupSamples"-------
    continueRoutine = True
    # update component parameters for each repeat
    # retrieved from file
    if startGame == 0:
        nTotal = thisLoop_prTrial['nTotal']
        true_ratio = thisLoop_prTrial['trueRatio']
        given_ratio = thisLoop_prTrial['trueRatio']
        filler_trial = thisLoop_prTrial['fillerTrial']
    elif startGame == 1:
        nTotal = thisLoop_trial['nTotal']
        true_ratio = thisLoop_trial['trueRatio']
        given_ratio = thisLoop_trial['trueRatio']
        filler_trial = thisLoop_Trial['fillerTrial']
    nSamples = 5
    
    # create matrix that specifies the number of observations per sample
    nObservations = [0 for iSample in range(nSamples)]
    nLeft = nTotal
    for iSample in range(1,nSamples+1): # +1 to correct for 0-indexing in Python
        xmin = -1*((nSamples-iSample)*9-nLeft)  # nLeft-x <= (nSamples-iSample)x9, with 5 for number of total samples, 9 for max observations per sample in general. 
        xmin = max(1,xmin) # xmin is either 1, or a higher minimum based on how many observations and samples still need to be shown 
        xmax = -1*((nSamples-iSample)*1-nLeft) # nLeft-x >= (nSamples-iSample)x1, with 5 for number of total samples, 1 for min observations per sample in general.
        xmax = min(9,xmax) # xmax is either 9, or a lower maximum based on how many observations and samples still need to be shown 
        toChooseFrom = [*range(xmin, xmax+1)] # +1 because python reads 'up to but not including xmax'
        x = sample(toChooseFrom,1)[0] # sample returns list; convert list to integer
        nLeft = nLeft - x
        nObservations[iSample-1] = x
    
    # Now create the randomized list with the actual observations to show
    nBlue = round(given_ratio * nTotal)
    seen_ratio = nBlue / nTotal
    nRed = nTotal - nBlue
    itemList = np.array(["blue", "red"])
    itemList = np.repeat(itemList, [nBlue, nRed])
    random.shuffle(itemList)
    
    # Based on the shuffled list with 'red' and 'blue', define how many red's and blue's are in each sample.
    start = 0
    blue = [0 for iSample in range(nSamples)]
    red = [0 for iSample in range(nSamples)]
    for iSample in range(nSamples):
      blue[iSample] = sum(itemList[start:(start+nObservations[iSample])]=="blue")
      red[iSample] = sum(itemList[start:(start+nObservations[iSample])]=="red")
      start = start + nObservations[iSample]
    # keep track of which components have finished
    setupSamplesComponents = []
    for thisComponent in setupSamplesComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    setupSamplesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "setupSamples"-------
    while continueRoutine:
        # get current time
        t = setupSamplesClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=setupSamplesClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in setupSamplesComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "setupSamples"-------
    for thisComponent in setupSamplesComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sample_index = 0
    # the Routine "setupSamples" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "crossHair"-------
    continueRoutine = True
    # update component parameters for each repeat
    crosshair_ITI = round(random.random() * (2.0 - 1.5) + 1.5, 1)
    # keep track of which components have finished
    crossHairComponents = [cross_hair]
    for thisComponent in crossHairComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    crossHairClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "crossHair"-------
    while continueRoutine:
        # get current time
        t = crossHairClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=crossHairClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cross_hair* updates
        if cross_hair.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross_hair.frameNStart = frameN  # exact frame index
            cross_hair.tStart = t  # local t and not account for scr refresh
            cross_hair.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_hair, 'tStartRefresh')  # time at next scr refresh
            cross_hair.setAutoDraw(True)
        if cross_hair.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross_hair.tStartRefresh + crosshair_ITI-frameTolerance:
                # keep track of stop time/frame for later
                cross_hair.tStop = t  # not accounting for scr refresh
                cross_hair.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross_hair, 'tStopRefresh')  # time at next scr refresh
                cross_hair.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in crossHairComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "crossHair"-------
    for thisComponent in crossHairComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #win.saveMovieFrames('crosshair.png') 
    
    # the Routine "crossHair" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    loop_samples = data.TrialHandler(nReps=5.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='loop_samples')
    thisExp.addLoop(loop_samples)  # add the loop to the experiment
    thisLoop_sample = loop_samples.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLoop_sample.rgb)
    if thisLoop_sample != None:
        for paramName in thisLoop_sample:
            exec('{} = thisLoop_sample[paramName]'.format(paramName))
    
    for thisLoop_sample in loop_samples:
        currentLoop = loop_samples
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_sample.rgb)
        if thisLoop_sample != None:
            for paramName in thisLoop_sample:
                exec('{} = thisLoop_sample[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "mushroomSample"-------
        continueRoutine = True
        routineTimer.add(1.200000)
        # update component parameters for each repeat
        # At the start of each sample, create a matrix with x and y coordinates of stimuli on screen
        S = np.array(["blue", "red"])
        # item = thisLoop_sample['item']
        S = np.repeat(S, [blue[sample_index], red[sample_index]])
        ok = 0
        while ok == 0: 
            coor_x = np.array(random.uniform(-aperture_size,aperture_size, nObservations[sample_index]))
            coor_y = np.array(random.uniform(-aperture_size,aperture_size, nObservations[sample_index]))
            diff_x = abs(coor_x[:, None] - coor_x)
            diff_y = abs(coor_y[:, None] - coor_y)
            # check if there is a pair for which both x and y coordinates overlap. If so, resample coordinates
            tooClose = (diff_x <= mushroom_size*0.9) & (diff_y <= mushroom_size*0.9)
            if (np.triu(tooClose, k=1)==False).all(): # only take into account upper triangle to get rid of diagonal which is always 0/True.
                ok = 1
        
        # initialize mushroom images
        if red[sample_index] > 0:
            red_mushrooms = [visual.ImageStim(
                win=win,
                name='red_mushrooms', 
                image='red_mushroom.png', mask=None,
                ori=0.0, pos=(coor_x[i], coor_y[i]), size=[mushroom_size],
                color=[1,1,1], colorSpace='rgb', opacity=None,
                flipHoriz=False, flipVert=False,
                texRes=128.0, interpolate=True, depth=0.0)
               for i in range(red[sample_index])]
            for i in red_mushrooms:
                i.autoDraw = True
        if blue[sample_index] > 0:
            blue_mushrooms = [visual.ImageStim(
                win=win,
                name='blue_mushrooms', 
                image='blue_mushroom.png', mask=None,
                ori=0.0, pos=(coor_x[i], coor_y[i]), size=[mushroom_size],
                color=[1,1,1], colorSpace='rgb', opacity=None,
                flipHoriz=False, flipVert=False,
                texRes=128.0, interpolate=True, depth=0.0) 
               for i in range(red[sample_index],red[sample_index]+blue[sample_index])]
            for i in blue_mushrooms:
                i.setAutoDraw(True)
        
        #win.getMovieFrame()
        #name = "sample_{age}.png".format(age = sample_index)
        #win.saveMovieFrames(name) 
        
        
        # keep track of which components have finished
        mushroomSampleComponents = [text_2]
        for thisComponent in mushroomSampleComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        mushroomSampleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "mushroomSample"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = mushroomSampleClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=mushroomSampleClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2* updates
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                text_2.setAutoDraw(True)
            if text_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_2.tStartRefresh + 1.2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_2.tStop = t  # not accounting for scr refresh
                    text_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                    text_2.setAutoDraw(False)
            if t < 1.2:
                continueRoutine = True
            else:
                continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in mushroomSampleComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "mushroomSample"-------
        for thisComponent in mushroomSampleComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if red[sample_index] > 0:
            for i in red_mushrooms:
                i.setAutoDraw(False)
        
        if blue[sample_index] > 0:
            for i in blue_mushrooms:
                i.setAutoDraw(False)
        
        sample_index = sample_index + 1
        
        # ------Prepare to start Routine "ISI"-------
        continueRoutine = True
        routineTimer.add(0.300000)
        # update component parameters for each repeat
        # keep track of which components have finished
        ISIComponents = [isi]
        for thisComponent in ISIComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ISIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ISI"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = ISIClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ISIClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *isi* updates
            if isi.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                isi.frameNStart = frameN  # exact frame index
                isi.tStart = t  # local t and not account for scr refresh
                isi.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(isi, 'tStartRefresh')  # time at next scr refresh
                isi.setAutoDraw(True)
            if isi.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > isi.tStartRefresh + 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    isi.tStop = t  # not accounting for scr refresh
                    isi.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(isi, 'tStopRefresh')  # time at next scr refresh
                    isi.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ISIComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ISI"-------
        for thisComponent in ISIComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
    # completed 5.0 repeats of 'loop_samples'
    
    
    # ------Prepare to start Routine "firstEstimation"-------
    continueRoutine = True
    # update component parameters for each repeat
    event.clearEvents()
    
    estimation_slider.markerPos = 50
    markerPosition = 0
    blueRectangle_pos = -0.125
    blueRectangle_size = 0.25
    show_estimate_text = ''
    
    
    slider_opacity = 0
    sliderfont = "Open Sans";
    showEstimate.setFont(sliderfont)
    estimation_slider.reset()
    slider_text0.setFont(sliderfont)
    slider_text100.setFont(sliderfont)
    # keep track of which components have finished
    firstEstimationComponents = [how_many_mushrooms, your_estimate, white_box, showEstimate, estimation_slider, red_rectangle, blue_rectangle, sliderMarker, slider_text0, slider_text100, space_to_submit_estimation]
    for thisComponent in firstEstimationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    firstEstimationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "firstEstimation"-------
    while continueRoutine:
        # get current time
        t = firstEstimationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=firstEstimationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        keys = event.getKeys()
        
        # need to manually check for escape, as our key checking will interfere with
        # Builder's escape check:
        if 'escape' in keys: 
            core.quit()
        
        # move slider colors along with response
        if estimation_slider.markerPos is not None:
             markerPos = estimation_slider.markerPos
             markerPosition = (markerPos - 50) / 200
             show_estimate_text = int(markerPos)
             blue_rectangle_pos = -0.25 + markerPos/200/2
             blue_rectangle_size = markerPos/200
        
        
        
        # check if rating has been completed:
        rating_completed = 0
        if estimation_slider.getRating() is not None:
            rating_completed = 1
        
        
        if ('return' in keys or 'num_enter' in keys) and rating_completed == 1:
            continueRoutine = False # end now
        
        
        # *how_many_mushrooms* updates
        if how_many_mushrooms.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            how_many_mushrooms.frameNStart = frameN  # exact frame index
            how_many_mushrooms.tStart = t  # local t and not account for scr refresh
            how_many_mushrooms.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(how_many_mushrooms, 'tStartRefresh')  # time at next scr refresh
            how_many_mushrooms.setAutoDraw(True)
        
        # *your_estimate* updates
        if your_estimate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            your_estimate.frameNStart = frameN  # exact frame index
            your_estimate.tStart = t  # local t and not account for scr refresh
            your_estimate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(your_estimate, 'tStartRefresh')  # time at next scr refresh
            your_estimate.setAutoDraw(True)
        
        # *white_box* updates
        if white_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            white_box.frameNStart = frameN  # exact frame index
            white_box.tStart = t  # local t and not account for scr refresh
            white_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(white_box, 'tStartRefresh')  # time at next scr refresh
            white_box.setAutoDraw(True)
        
        # *showEstimate* updates
        if showEstimate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            showEstimate.frameNStart = frameN  # exact frame index
            showEstimate.tStart = t  # local t and not account for scr refresh
            showEstimate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(showEstimate, 'tStartRefresh')  # time at next scr refresh
            showEstimate.setAutoDraw(True)
        if showEstimate.status == STARTED:  # only update if drawing
            showEstimate.setPos([markerPosition, -0.14])
            showEstimate.setText(show_estimate_text)
        
        # *estimation_slider* updates
        if estimation_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            estimation_slider.frameNStart = frameN  # exact frame index
            estimation_slider.tStart = t  # local t and not account for scr refresh
            estimation_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(estimation_slider, 'tStartRefresh')  # time at next scr refresh
            estimation_slider.setAutoDraw(True)
        
        # *red_rectangle* updates
        if red_rectangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            red_rectangle.frameNStart = frameN  # exact frame index
            red_rectangle.tStart = t  # local t and not account for scr refresh
            red_rectangle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(red_rectangle, 'tStartRefresh')  # time at next scr refresh
            red_rectangle.setAutoDraw(True)
        
        # *blue_rectangle* updates
        if blue_rectangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blue_rectangle.frameNStart = frameN  # exact frame index
            blue_rectangle.tStart = t  # local t and not account for scr refresh
            blue_rectangle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blue_rectangle, 'tStartRefresh')  # time at next scr refresh
            blue_rectangle.setAutoDraw(True)
        if blue_rectangle.status == STARTED:  # only update if drawing
            blue_rectangle.setPos([blueRectangle_pos, -0.19])
            blue_rectangle.setSize([blueRectangle_size, 0.04])
        
        # *sliderMarker* updates
        if sliderMarker.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sliderMarker.frameNStart = frameN  # exact frame index
            sliderMarker.tStart = t  # local t and not account for scr refresh
            sliderMarker.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sliderMarker, 'tStartRefresh')  # time at next scr refresh
            sliderMarker.setAutoDraw(True)
        if sliderMarker.status == STARTED:  # only update if drawing
            sliderMarker.setPos([markerPosition, -0.19])
        
        # *slider_text0* updates
        if slider_text0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text0.frameNStart = frameN  # exact frame index
            slider_text0.tStart = t  # local t and not account for scr refresh
            slider_text0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text0, 'tStartRefresh')  # time at next scr refresh
            slider_text0.setAutoDraw(True)
        
        # *slider_text100* updates
        if slider_text100.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_text100.frameNStart = frameN  # exact frame index
            slider_text100.tStart = t  # local t and not account for scr refresh
            slider_text100.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_text100, 'tStartRefresh')  # time at next scr refresh
            slider_text100.setAutoDraw(True)
        
        # *space_to_submit_estimation* updates
        if space_to_submit_estimation.status == NOT_STARTED and rating_completed == 1:
            # keep track of start time/frame for later
            space_to_submit_estimation.frameNStart = frameN  # exact frame index
            space_to_submit_estimation.tStart = t  # local t and not account for scr refresh
            space_to_submit_estimation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(space_to_submit_estimation, 'tStartRefresh')  # time at next scr refresh
            space_to_submit_estimation.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in firstEstimationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "firstEstimation"-------
    for thisComponent in firstEstimationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #win.getMovieFrame()
    #win.saveMovieFrames('response.png') 
    
    # performance
    deviance = int(estimation_slider.getRating() - true_ratio*100)
    abs_deviance = abs(deviance)
    
    # only save data during actual task, not practice
    if startGame == 1:
        list_deviance.append(abs_deviance)
        loop_trials.addData('cross_hair.ITI', crosshair_ITI)
        loop_trials.addData('seen_ratio', seen_ratio)
        loop_trials.addData('nMushrooms', " ".join(map(str, nObservations)))
        loop_trials.addData('nBlue', " ".join(map(str, blue)))
        loop_trials.addData('nRed', " ".join(map(str, red)))
        loop_trials.addData('estimation.rating', estimation_slider.getRating())
        loop_trials.addData('estimation.rt', estimation_slider.getRT())
    
    
    # the Routine "firstEstimation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "pause"-------
    continueRoutine = True
    routineTimer.add(120.000000)
    # update component parameters for each repeat
    event.clearEvents()
    
    # I only want this routine to show at the end of each repetition.
    nPerLoop = loop_trials.nTotal / loop_trials.nReps # when multiple reps
    nPerLoop = 27 # when one large rep, devided into multiple blocks
    if (loop_trials.thisN + 1) % nPerLoop == 0 and loop_trials.nRemaining != 0:
        continueRoutine = True
    else:
        continueRoutine = False
    
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    blue_mushroom_3.setPos((window_x-0.3, -0.4))
    red_mushroom_3.setPos((window_x-0.2, -0.4))
    # keep track of which components have finished
    pauseComponents = [shortBreak, key_resp_3, timer, blue_mushroom_3, red_mushroom_3]
    for thisComponent in pauseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    pauseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "pause"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = pauseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=pauseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *shortBreak* updates
        if shortBreak.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            shortBreak.frameNStart = frameN  # exact frame index
            shortBreak.tStart = t  # local t and not account for scr refresh
            shortBreak.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(shortBreak, 'tStartRefresh')  # time at next scr refresh
            shortBreak.setAutoDraw(True)
        if shortBreak.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > shortBreak.tStartRefresh + 120.0-frameTolerance:
                # keep track of stop time/frame for later
                shortBreak.tStop = t  # not accounting for scr refresh
                shortBreak.frameNStop = frameN  # exact frame index
                win.timeOnFlip(shortBreak, 'tStopRefresh')  # time at next scr refresh
                shortBreak.setAutoDraw(False)
        timer_text = int(round(120 - t, ndigits = 0))
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_3.tStartRefresh + 120.0-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_3.tStop = t  # not accounting for scr refresh
                key_resp_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_3, 'tStopRefresh')  # time at next scr refresh
                key_resp_3.status = FINISHED
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *timer* updates
        if timer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            timer.frameNStart = frameN  # exact frame index
            timer.tStart = t  # local t and not account for scr refresh
            timer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(timer, 'tStartRefresh')  # time at next scr refresh
            timer.setAutoDraw(True)
        if timer.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > timer.tStartRefresh + 120.0-frameTolerance:
                # keep track of stop time/frame for later
                timer.tStop = t  # not accounting for scr refresh
                timer.frameNStop = frameN  # exact frame index
                win.timeOnFlip(timer, 'tStopRefresh')  # time at next scr refresh
                timer.setAutoDraw(False)
        if timer.status == STARTED:  # only update if drawing
            timer.setText(timer_text)
        
        # *blue_mushroom_3* updates
        if blue_mushroom_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blue_mushroom_3.frameNStart = frameN  # exact frame index
            blue_mushroom_3.tStart = t  # local t and not account for scr refresh
            blue_mushroom_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blue_mushroom_3, 'tStartRefresh')  # time at next scr refresh
            blue_mushroom_3.setAutoDraw(True)
        if blue_mushroom_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > blue_mushroom_3.tStartRefresh + 120.0-frameTolerance:
                # keep track of stop time/frame for later
                blue_mushroom_3.tStop = t  # not accounting for scr refresh
                blue_mushroom_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(blue_mushroom_3, 'tStopRefresh')  # time at next scr refresh
                blue_mushroom_3.setAutoDraw(False)
        
        # *red_mushroom_3* updates
        if red_mushroom_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            red_mushroom_3.frameNStart = frameN  # exact frame index
            red_mushroom_3.tStart = t  # local t and not account for scr refresh
            red_mushroom_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(red_mushroom_3, 'tStartRefresh')  # time at next scr refresh
            red_mushroom_3.setAutoDraw(True)
        if red_mushroom_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > red_mushroom_3.tStartRefresh + 120.0-frameTolerance:
                # keep track of stop time/frame for later
                red_mushroom_3.tStop = t  # not accounting for scr refresh
                red_mushroom_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(red_mushroom_3, 'tStopRefresh')  # time at next scr refresh
                red_mushroom_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in pauseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "pause"-------
    for thisComponent in pauseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if startGame == 1:
        if t > 119:
            loop_trials.addData('shortBreak.secs', 120)
        else:
            loop_trials.addData('shortBreak.secs', t)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'loop_trials'

# get names of stimulus parameters
if loop_trials.trialList in ([], [None], None):
    params = []
else:
    params = loop_trials.trialList[0].keys()
# save data for this loop
loop_trials.saveAsExcel(filename + '.xlsx', sheetName='loop_trials',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "instrBonus"-------
continueRoutine = True
# update component parameters for each repeat
event.clearEvents()

# sprintf function doesnt automatically translate from py to JS, so solved it this way
text1 = "Great job! You have finished the harvest season.\n\n"
text2 = "On the day that was selected by the computer, the number of mushroom pickers you sent into the forest carrying a BLUE bag deviated "
text3 = str(sample_deviance)
text4 = " bags from the correct answer.\nTherefore, your bonus will be £1.50 - "
text5 = " x £0.04 =\n\n£"
text6 = format(bonus, '.2f')
text7 = " \n\nPress ENTER to continue."
end_text =  text1 + text2 + text3 + text4 + text3 + text5 + text6 + text7


bonus_text.setText(end_text)
enter_to_end.keys = []
enter_to_end.rt = []
_enter_to_end_allKeys = []
blue_mushroom_4.setPos((window_x-0.3, -0.4))
red_mushroom_4.setPos((window_x-0.2, -0.4))
# keep track of which components have finished
instrBonusComponents = [bonus_text, enter_to_end, blue_mushroom_4, red_mushroom_4]
for thisComponent in instrBonusComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instrBonusClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instrBonus"-------
while continueRoutine:
    # get current time
    t = instrBonusClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instrBonusClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *bonus_text* updates
    if bonus_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        bonus_text.frameNStart = frameN  # exact frame index
        bonus_text.tStart = t  # local t and not account for scr refresh
        bonus_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(bonus_text, 'tStartRefresh')  # time at next scr refresh
        bonus_text.setAutoDraw(True)
    
    # *enter_to_end* updates
    waitOnFlip = False
    if enter_to_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        enter_to_end.frameNStart = frameN  # exact frame index
        enter_to_end.tStart = t  # local t and not account for scr refresh
        enter_to_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(enter_to_end, 'tStartRefresh')  # time at next scr refresh
        enter_to_end.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(enter_to_end.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(enter_to_end.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if enter_to_end.status == STARTED and not waitOnFlip:
        theseKeys = enter_to_end.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _enter_to_end_allKeys.extend(theseKeys)
        if len(_enter_to_end_allKeys):
            enter_to_end.keys = _enter_to_end_allKeys[-1].name  # just the last key pressed
            enter_to_end.rt = _enter_to_end_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *blue_mushroom_4* updates
    if blue_mushroom_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        blue_mushroom_4.frameNStart = frameN  # exact frame index
        blue_mushroom_4.tStart = t  # local t and not account for scr refresh
        blue_mushroom_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(blue_mushroom_4, 'tStartRefresh')  # time at next scr refresh
        blue_mushroom_4.setAutoDraw(True)
    
    # *red_mushroom_4* updates
    if red_mushroom_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        red_mushroom_4.frameNStart = frameN  # exact frame index
        red_mushroom_4.tStart = t  # local t and not account for scr refresh
        red_mushroom_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(red_mushroom_4, 'tStartRefresh')  # time at next scr refresh
        red_mushroom_4.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrBonusComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instrBonus"-------
for thisComponent in instrBonusComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
#win.getMovieFrame()
#win.saveMovieFrames('bonus.png') 
# the Routine "instrBonus" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "comments"-------
continueRoutine = True
# update component parameters for each repeat
input_instructions.setText(' ')
input_other.setText(' ')
# setup some python lists for storing info about the mouse
mouse.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
commentsComponents = [comments_title, comments_instructions, input_instructions, comments_other, input_other, continue_button, mouse]
for thisComponent in commentsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
commentsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "comments"-------
while continueRoutine:
    # get current time
    t = commentsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=commentsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *comments_title* updates
    if comments_title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        comments_title.frameNStart = frameN  # exact frame index
        comments_title.tStart = t  # local t and not account for scr refresh
        comments_title.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(comments_title, 'tStartRefresh')  # time at next scr refresh
        comments_title.setAutoDraw(True)
    
    # *comments_instructions* updates
    if comments_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        comments_instructions.frameNStart = frameN  # exact frame index
        comments_instructions.tStart = t  # local t and not account for scr refresh
        comments_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(comments_instructions, 'tStartRefresh')  # time at next scr refresh
        comments_instructions.setAutoDraw(True)
    
    # *input_instructions* updates
    if input_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        input_instructions.frameNStart = frameN  # exact frame index
        input_instructions.tStart = t  # local t and not account for scr refresh
        input_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(input_instructions, 'tStartRefresh')  # time at next scr refresh
        input_instructions.setAutoDraw(True)
    
    # *comments_other* updates
    if comments_other.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        comments_other.frameNStart = frameN  # exact frame index
        comments_other.tStart = t  # local t and not account for scr refresh
        comments_other.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(comments_other, 'tStartRefresh')  # time at next scr refresh
        comments_other.setAutoDraw(True)
    
    # *input_other* updates
    if input_other.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        input_other.frameNStart = frameN  # exact frame index
        input_other.tStart = t  # local t and not account for scr refresh
        input_other.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(input_other, 'tStartRefresh')  # time at next scr refresh
        input_other.setAutoDraw(True)
    
    # *continue_button* updates
    if continue_button.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue_button.frameNStart = frameN  # exact frame index
        continue_button.tStart = t  # local t and not account for scr refresh
        continue_button.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue_button, 'tStartRefresh')  # time at next scr refresh
        continue_button.setAutoDraw(True)
    # *mouse* updates
    if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse.frameNStart = frameN  # exact frame index
        mouse.tStart = t  # local t and not account for scr refresh
        mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
        mouse.status = STARTED
        mouse.mouseClock.reset()
        prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
    if mouse.status == STARTED:  # only update if started and not finished!
        buttons = mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in continue_button:
                    if obj.contains(mouse):
                        gotValidClick = True
                        mouse.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in commentsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "comments"-------
for thisComponent in commentsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('input_instructions.text',input_instructions.text)
input_instructions.reset()
thisExp.addData('input_other.text',input_other.text)
input_other.reset()
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
expInfo['instructions_clear'] = input_instructions.text
expInfo['other_comments'] = input_other.text
# the Routine "comments" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instrEnd"-------
continueRoutine = True
# update component parameters for each repeat
event.clearEvents()
# setup some python lists for storing info about the mouse_2
mouse_2.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instrEndComponents = [textFinish, continue_button_2, mouse_2]
for thisComponent in instrEndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instrEndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instrEnd"-------
while continueRoutine:
    # get current time
    t = instrEndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instrEndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textFinish* updates
    if textFinish.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textFinish.frameNStart = frameN  # exact frame index
        textFinish.tStart = t  # local t and not account for scr refresh
        textFinish.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textFinish, 'tStartRefresh')  # time at next scr refresh
        textFinish.setAutoDraw(True)
    
    # *continue_button_2* updates
    if continue_button_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continue_button_2.frameNStart = frameN  # exact frame index
        continue_button_2.tStart = t  # local t and not account for scr refresh
        continue_button_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue_button_2, 'tStartRefresh')  # time at next scr refresh
        continue_button_2.setAutoDraw(True)
    # *mouse_2* updates
    if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_2.frameNStart = frameN  # exact frame index
        mouse_2.tStart = t  # local t and not account for scr refresh
        mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
        mouse_2.status = STARTED
        mouse_2.mouseClock.reset()
        prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
    if mouse_2.status == STARTED:  # only update if started and not finished!
        buttons = mouse_2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in continue_button_2:
                    if obj.contains(mouse_2):
                        gotValidClick = True
                        mouse_2.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrEndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instrEnd"-------
for thisComponent in instrEndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
#win.getMovieFrame()
#win.saveMovieFrames('end.png') 
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "instrEnd" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
