/********************** 
 * Mushroom_Task Test *
 **********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'mushroom_task';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(import_wave1_dataRoutineBegin());
flowScheduler.add(import_wave1_dataRoutineEachFrame());
flowScheduler.add(import_wave1_dataRoutineEnd());
const loop_informedConsentLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_informedConsentLoopBegin, loop_informedConsentLoopScheduler);
flowScheduler.add(loop_informedConsentLoopScheduler);
flowScheduler.add(loop_informedConsentLoopEnd);
flowScheduler.add(instr_questionnaireRoutineBegin());
flowScheduler.add(instr_questionnaireRoutineEachFrame());
flowScheduler.add(instr_questionnaireRoutineEnd());
const roundsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(roundsLoopBegin, roundsLoopScheduler);
flowScheduler.add(roundsLoopScheduler);
flowScheduler.add(roundsLoopEnd);
flowScheduler.add(feedback_traitsRoutineBegin());
flowScheduler.add(feedback_traitsRoutineEachFrame());
flowScheduler.add(feedback_traitsRoutineEnd());
const practice_phasesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_phasesLoopBegin, practice_phasesLoopScheduler);
flowScheduler.add(practice_phasesLoopScheduler);
flowScheduler.add(practice_phasesLoopEnd);
const loop_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_trialsLoopBegin, loop_trialsLoopScheduler);
flowScheduler.add(loop_trialsLoopScheduler);
flowScheduler.add(loop_trialsLoopEnd);
flowScheduler.add(end_tooLateRoutineBegin());
flowScheduler.add(end_tooLateRoutineEachFrame());
flowScheduler.add(end_tooLateRoutineEnd());
flowScheduler.add(showBonusRoutineBegin());
flowScheduler.add(showBonusRoutineEachFrame());
flowScheduler.add(showBonusRoutineEnd());
flowScheduler.add(commentsRoutineBegin());
flowScheduler.add(commentsRoutineEachFrame());
flowScheduler.add(commentsRoutineEnd());
flowScheduler.add(instrEndRoutineBegin());
flowScheduler.add(instrEndRoutineEachFrame());
flowScheduler.add(instrEndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'medium_peerConfidence.png', 'path': 'medium_peerConfidence.png'},
    {'name': 'finish.png', 'path': 'finish.png'},
    {'name': 'red_mushroom.png', 'path': 'red_mushroom.png'},
    {'name': 'blue_mushroom.png', 'path': 'blue_mushroom.png'},
    {'name': 'screenshot_SI2.png', 'path': 'screenshot_SI2.png'},
    {'name': 'trial_structure.csv', 'path': 'trial_structure.csv'},
    {'name': 'continue.png', 'path': 'continue.png'},
    {'name': 'wave1_input_confidence.csv', 'path': 'wave1_input_confidence.csv'},
    {'name': 'screenshot_SI1.png', 'path': 'screenshot_SI1.png'},
    {'name': 'high_peerConfidence.png', 'path': 'high_peerConfidence.png'},
    {'name': 'low_peerConfidence.png', 'path': 'low_peerConfidence.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=32B6D3BE', '');

  return Scheduler.Event.NEXT;
}


var setupClock;
var thisExp;
var win;
var event;
var shuffle;
var randint;
var range;
var sum;
var allAbsDifferences;
var arrayMatch;
var bg_color;
var import_wave1_dataClock;
var informedConsentClock;
var IC1;
var IC2;
var IC3;
var IC4;
var IC5;
var IC6;
var IC7;
var ICDict;
var currentIC;
var informed_consent;
var informed_consent_responses;
var progress_bar_fixed;
var progress_bar;
var progress_IC;
var instr_questionnaireClock;
var response_2;
var text_5;
var personality_statementsClock;
var traits_round;
var chosen;
var header_statements;
var statements_left;
var mouse_3;
var box_1;
var box_2;
var box_3;
var box_4;
var box_5;
var box_6;
var statements_right;
var box_7;
var box_8;
var box_9;
var box_10;
var box_11;
var box_12;
var enter_3;
var iRound;
var feedback_traitsClock;
var fb_text;
var key_resp_4;
var set_practicePhaseClock;
var practice_phase;
var startGame;
var instrPracClock;
var response;
var Pr1;
var Pr2;
var Pr3;
var Pr4;
var Pr5;
var Pr6;
var Pr7;
var Pr8;
var PrDict;
var currentPr;
var text;
var blue_mushroom;
var red_mushroom;
var progress_bar_fixed_2;
var progress_bar_2;
var progress_IC_2;
var instrPrac2Clock;
var response_3;
var Pr2_1;
var Pr2_2;
var Pr2_3;
var Pr2_4;
var Pr2_5;
var Pr2_6;
var Pr2Dict;
var currentPr2;
var text_7;
var blue_mushroom_6;
var red_mushroom_6;
var progress_bar_fixed_5;
var progress_bar_5;
var progress_IC_5;
var screenshot1;
var screenshot2;
var setupSamplesClock;
var crossHairClock;
var cross_hair;
var mushroomSampleClock;
var text_2;
var ISIClock;
var isi;
var firstEstimationClock;
var how_many_mushrooms;
var your_estimate;
var estimate1_textbox;
var text_invalid_input;
var space_to_submit_estimation;
var SIClock;
var how_many_mushrooms_2;
var peer_confidence_rating;
var peers_estimate;
var blue_box_peer;
var showEstimate_peer;
var red_rectangle_peer;
var blue_rectangle_peer;
var sliderMarker_peer;
var slider_text0_peer;
var slider_text100_peer;
var your_estimate_1;
var blue_box_2;
var showEstimate_2;
var red_rectangle_2;
var blue_rectangle_2;
var sliderMarker_2;
var slider_text0_2;
var slider_text100_2;
var your_estimate_2;
var estimate2_textbox;
var text_invalid_input_2;
var space_to_submit_estimation_2;
var tooLate_feedbackClock;
var tooLate_fb;
var test_questionsClock;
var progress_bar_fixed_4;
var progress_bar_4;
var progress_IC_4;
var text_4;
var Q1;
var test_Q1;
var wrong_answer_1;
var Q2;
var test_Q2;
var wrong_answer_2;
var Q3;
var test_Q3;
var wrong_answer_3;
var enter_2;
var blue_mushroom_5;
var red_mushroom_5;
var Q4;
var test_Q4;
var wrong_answer_4;
var Q5;
var test_Q5;
var wrong_answer_5;
var instrBonusClock;
var key_resp_2;
var Instr1;
var Instr2;
var Instr3;
var InstrDict;
var currentInstr;
var text_3;
var blue_mushroom_2;
var red_mushroom_2;
var progress_bar_fixed_3;
var progress_bar_3;
var progress_IC_3;
var pauseClock;
var shortBreak;
var key_resp_3;
var timer;
var blue_mushroom_3;
var red_mushroom_3;
var end_tooLateClock;
var tooLate_finish;
var showBonusClock;
var bonus_text;
var enter_to_end;
var blue_mushroom_4;
var red_mushroom_4;
var commentsClock;
var comments_title;
var comments_instructions;
var input_instructions;
var comments_other;
var input_other;
var continue_button;
var mouse;
var instrEndClock;
var textFinish;
var continue_button_2;
var mouse_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  shuffle = util.shuffle;
  Array.prototype.append = [].push;
  
  randint = function(min, maxplusone) {
      return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  range = function (size, startAt = 0) {
      return [...Array(size).keys()].map(i => i + startAt);
  }
  
  sum = function (arr) {
      return arr.reduce((a,b)=>a+b)
  }
  
  allAbsDifferences = function(arr, N){
      var diff;
      var diff_list = [];
      // Traverse the array
      for(var elementA = 0; elementA < N; elementA++)
      {
          for(var elementB = 0; elementB < N; elementB++)
          {
              if ((elementA !== elementB)) {
                  diff = Math.abs((arr[elementA] - arr[elementB]));
                  diff_list.push(diff);
              }
          }
      }
      return diff_list;
  }
  
  arrayMatch = function(arr1, arr2) {
      var match;
      var match_list = [];
      for (var i = 0; i < arr1.length; i++) {
          match = 0;
          if (arr1[i] == arr2[i]) {
              match = 1;
          }
          match_list.push(match)
      }
      return match_list;
  }
  
  // background color
  bg_color= new util.Color([-0.4000, -0.4000, -0.4000])
  win.color = bg_color
  // Initialize components for Routine "import_wave1_data"
  import_wave1_dataClock = new util.Clock();
  // Initialize components for Routine "informedConsent"
  informedConsentClock = new util.Clock();
  IC1 = "Dear participant,\n\nFirst, thank you for your interest!\nBefore the study starts, it is important that you are informed about the procedures. Therefore, we would like you to read this information letter carefully.\nPlease do not hesitate to ask for clarification about this text or the general procedure. If anything is unclear, the researcher will answer your questions.\n\n\nYou can go back and forth through the instructions by pressing the LEFT and RIGHT arrow keys.\n\n\nNow press the RIGHT arrow key to move on to the next instruction.";
  IC2 = "Type of Research:\n\nYou will participate in an online estimation study.\n\nThe study will start with a short personality questionnaire, followed by an estimation game. This will take approximately 30 minutes in total.\n\n\nPlease ensure you are not disturbed in the coming 30 minutes:\nThe estimation game has a maximum response time. If you fail to respond within the time window too many times, the experiment will be terminated automatically and you will not receive your payment.";
  IC3 = "Voluntary participation:\n\nThere are no consequences if you decide not to participate in this study.\nDuring the study, you are free to stop participating at any moment, without giving a reason for doing so.\nWithin seven days after participation, you are allowed to withdraw your data from this study and your data will be deleted permanently.";
  IC4 = "Your privacy is guaranteed:\n\nYour personal information (about who you are) remains confidential and will not be shared without your explicit consent.\nYour research data will be analyzed by the researchers who collected the information. Research data published in scientific journals will be anonymous and cannot be traced back to you as an individual. Completely anonymized data can be shared with other researchers.";
  IC5 = "Discomfort, risks and insurance:\n\nAs with any research at the University of Amsterdam (UvA), a standard liability insurance applies.\n\n\n\n\nCompensation:\n\nA flat fee of \u00a33.75 upon completion of the study, plus a bonus of up to \u00a31.50 depending on your performance in the estimation game.";
  IC6 = "Further information:\n\nShould you have questions about this study at any given moment, please contact the responsible researcher,\nLieke Hofmans (l.hofmans@uva.nl).\n\nFormal complaints about this study can be addressed to the Ethics Review Board, Helle Larsen (h.larsen@uva.nl).";
  IC7 = "Informed consent:\n\nBy pressing ENTER you register you give informed consent:\nYou are well informed, have read the aforementioned information carefully, and wish to start the study.\n\n\nIf you wish to go over the information once more, you can use the LEFT and RIGHT arrow keys to go back and forth.\n\nIf you do not wish to start the study, you can leave the study now.";
  ICDict = {"1": IC1, "2": IC2, "3": IC3, "4": IC4, "5": IC5, "6": IC6, "7": IC7};
  currentIC = "1";
  
  informed_consent = new visual.TextStim({
    win: psychoJS.window,
    name: 'informed_consent',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  informed_consent_responses = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  progress_bar_fixed = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_fixed', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  progress_bar = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('green'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  progress_IC = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress_IC',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.48], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "instr_questionnaire"
  instr_questionnaireClock = new util.Clock();
  response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  /* Syntax Error: Fix Python code */
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'PERSONALITY QUESTIONNAIRE\n\n\nYou will see a list with 12 personality traits.\nYou are asked to select the traits that characterize you the most. \n\nAfter you have made your selection, you will receive further instructions. \n\nPlease take your time to read through the personality traits carefully.\n\n\nPress ENTER to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "personality_statements"
  personality_statementsClock = new util.Clock();
  traits_round = 1;
  chosen = [];
  
  header_statements = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_statements',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.4], height: 0.032,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  statements_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'statements_left',
    text: 'Active\n\n\nOrganized\n\n\nResponsible\n\n\nDependable\n\n\nEfficient\n\n\nSympathetic',
    font: 'Open Sans',
    units: 'height', 
    pos: [(- 0.27), 0], height: 0.026,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  box_1 = new visual.Rect ({
    win: psychoJS.window, name: 'box_1', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), 0.215],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_2', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), 0.129],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  box_3 = new visual.Rect ({
    win: psychoJS.window, name: 'box_3', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), 0.043],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  box_4 = new visual.Rect ({
    win: psychoJS.window, name: 'box_4', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), (- 0.042)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  box_5 = new visual.Rect ({
    win: psychoJS.window, name: 'box_5', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), (- 0.128)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  box_6 = new visual.Rect ({
    win: psychoJS.window, name: 'box_6', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), (- 0.214)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  statements_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'statements_right',
    text: 'Imaginative\n\n\nKind\n\n\nInsightful\n\n\nAffectionate\n\n\nCurious\n\n\nArtistic',
    font: 'Open Sans',
    units: 'height', 
    pos: [0.18, 0], height: 0.026,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  box_7 = new visual.Rect ({
    win: psychoJS.window, name: 'box_7', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, 0.215],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -11, interpolate: true,
  });
  
  box_8 = new visual.Rect ({
    win: psychoJS.window, name: 'box_8', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, 0.129],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -12, interpolate: true,
  });
  
  box_9 = new visual.Rect ({
    win: psychoJS.window, name: 'box_9', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, 0.043],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -13, interpolate: true,
  });
  
  box_10 = new visual.Rect ({
    win: psychoJS.window, name: 'box_10', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, (- 0.042)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -14, interpolate: true,
  });
  
  box_11 = new visual.Rect ({
    win: psychoJS.window, name: 'box_11', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, (- 0.128)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -15, interpolate: true,
  });
  
  box_12 = new visual.Rect ({
    win: psychoJS.window, name: 'box_12', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, (- 0.214)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -16, interpolate: true,
  });
  
  enter_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.0235,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  iRound = 0; 
  // Initialize components for Routine "feedback_traits"
  feedback_traitsClock = new util.Clock();
  fb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "set_practicePhase"
  set_practicePhaseClock = new util.Clock();
  practice_phase = 0;
  startGame = 0;
  
  // Initialize components for Routine "instrPrac"
  instrPracClock = new util.Clock();
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Pr1 = "MUSHROOM GAME\n\n\nBefore we start the game, we will provide you with some instructions, followed by a few practice rounds.\n\nYou can go back and forth through the instructions by pressing the LEFT and RIGHT arrow keys.\n\n\nNow press the RIGHT arrow key to move on to the next instruction." 
  
  Pr2 = "In this game, you are part of a community for which the main food resource is mushrooms.\n\nThese mushrooms are harvested from a forest in the vicinity of your village. Soon, it will be time to harvest, and the leader of the community has asked you for your help in coordinating this."
  
  Pr3 = "Each day, 100 people from the community will enter the forest.\nEach person will carry a bag to pick 1 type of mushroom.\n\nThere are two types of mushrooms, blue and red ones.\nThe problem is that these two types of mushrooms each need their own type of bag. A blue mushroom can only be carried in a blue bag and a red mushroom can only be carried in a red bag."
   
  Pr4 = "Your task at the start of the day is to decide how many people will go into the forest carrying a blue bag and how many people will be carrying a red bag.\n\nIf on one day there are 70 blue mushrooms and 30 red mushrooms in the forest, you need to give 70 people a blue bag and 30 people a red bag. If you would give too many people a blue bag, some people carrying a blue bag would arrive home with an empty bag, while some red mushrooms would be left in the forest because there were not enough people with a red bag.\nThat means your yield would not be optimal."
   
  Pr5 = "To make an informed guess about how many mushroom pickers should carry a blue or a red bag, you will get up early each morning to walk through 5 fields that surround your village.\n\nThere are some blue and red mushrooms growing in these fields. You know that the mushrooms you see here are a good, but not exact representation of what will be found in the forest on that day.\n\nThus, based on the number of blue versus red mushrooms in these 5 nearby fields, you can decide how many pickers you give a blue or a red bag."
   
  Pr6 = "On some days, you encounter many mushrooms in the fields, so you have a large sample to base your decision on. On other days, however, you encounter fewer mushrooms, so you have less information to base your decision on.\n\nThe more mushrooms you find in the nearby fields, the more precisely they represent the mushrooms in the forest.\nFor example, if you find 10 blue and 40 red mushrooms in the field, you can be more certain of your decision than when you would have found 1 blue and 4 red mushrooms."
   
  Pr7 = "During the game, you will first see the mushrooms in each of the 5 fields.\n\nYou are then asked to decide how many out of 100 pickers should carry a blue bag.\n\nNote that the number of pickers who should carry a blue bag is not necessarily the same as the number of blue mushrooms you found in the fields, because the number of mushrooms in the field is only a small sample.\nFor example, if you found 2 blue and 18 red mushrooms in the field, the optimal number of pickers carrying a blue bag would probably be around 10 out of 100 pickers, not 2 out of 100.\n\nYou will play multiple rounds. Each round represents a new day and all days together represent the entire harvest season."
   
  Pr8 = "You have 10 seconds to submit your decision, which is ample of time to think about your decision carefully. If you take longer than 10 seconds, you will get a warning message saying that you were too late. If that happens too often, the game will terminate automatically and you are asked to return your submission.\n\nTo get a better understanding of the task and how everything looks, you will first play some practice days.\n\nPress ENTER to start the practice."
  
  PrDict = {"1": Pr1, "2": Pr2, "3": Pr3, "4": Pr4, "5": Pr5, "6": Pr6, "7": Pr7, "8": Pr8};
  currentPr = "1";
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blue_mushroom = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_mushroom', units : 'height', 
    image : 'blue_mushroom.png', mask : undefined,
    ori : 350.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  red_mushroom = new visual.ImageStim({
    win : psychoJS.window,
    name : 'red_mushroom', units : undefined, 
    image : 'red_mushroom.png', mask : undefined,
    ori : 10.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  progress_bar_fixed_2 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_fixed_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  progress_bar_2 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('green'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  progress_IC_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress_IC_2',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.48], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "instrPrac2"
  instrPrac2Clock = new util.Clock();
  response_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Pr2_1 = "After you have submitted your decision, you will see the decision made by another participant who has played this game earlier.\n\nThe number of blue and red mushrooms in the forest was the same for this other person,\nbut they were from a different village on the other side of the forest.\nThat means that in the morning they had to sample from different fields on the other side of the forest, and the number of blue and red mushrooms in these fields might have been different from those in the fields surrounding your village.\n\n\n\nPress the RIGHT arrow key to continue"
  
  Pr2_2 = "For example, you might have found 5 mushrooms in the fields, while the other participant found 50 mushrooms and thus had more information to base their decision on.\nAlternatively, the other person might have found fewer mushrooms in the fields than you did and thus had less information to base their decision on.\n\nHowever, you do not know if the other participant found more or fewer mushrooms than you did.\n\n\n\nPress the RIGHT arrow key to continue"
  
  Pr2_3 = "This person was also asked to rate how confident they were in their decision.\nThis confidence rating will also be shown to you.\n\n\nYou can adapt your own decision after having seen this information.\n\n\n\n\nPress the RIGHT arrow key to see what this looks like."
  
  Pr2_4 = "\n\n\n\n\n\n\n\nYou will first see how confident the other person was on that harvest day.\nTheir confidence can either be LOW, MEDIUM or HIGH.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPress the RIGHT arrow key to continue"
   
  Pr2_5 = "\n\n\n\n\n\nThis information will be followed by one bar showing the decision made by the other person and a second bar showing your own decision.\n\nYou will then have the opportunity to adapt your decision based on this new information.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPress the RIGHT arrow key to continue"
  
  Pr2_6 = "On each harvest day, you will see the information from a different participant.\n\nPlease remember that you have 10 seconds to submit your decision.\n\nYou will now play a few more practice days.\n\nPress ENTER to start the practice."
  
  Pr2Dict = {"1": Pr2_1, "2": Pr2_2, "3": Pr2_3, "4": Pr2_4, "5": Pr2_5, "6": Pr2_6};
  currentPr2 = "1";
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blue_mushroom_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_mushroom_6', units : 'height', 
    image : 'blue_mushroom.png', mask : undefined,
    ori : 350.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  red_mushroom_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'red_mushroom_6', units : undefined, 
    image : 'red_mushroom.png', mask : undefined,
    ori : 10.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  progress_bar_fixed_5 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_fixed_5', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  progress_bar_5 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_5', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('green'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  progress_IC_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress_IC_5',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.48], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  screenshot1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'screenshot1', units : undefined, 
    image : 'screenshot_SI1.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.6, 0.34],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  screenshot2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'screenshot2', units : undefined, 
    image : 'screenshot_SI2.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.6, 0.34],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  // Initialize components for Routine "setupSamples"
  setupSamplesClock = new util.Clock();
  var trials_parameters;
  // Initialize components for Routine "crossHair"
  crossHairClock = new util.Clock();
  cross_hair = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_hair',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "mushroomSample"
  mushroomSampleClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: ' ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "firstEstimation"
  firstEstimationClock = new util.Clock();
  how_many_mushrooms = new visual.TextStim({
    win: psychoJS.window,
    name: 'how_many_mushrooms',
    text: 'Based on the sample you just saw, how many out of 100 mushroom pickers should carry a BLUE bag today?\n',
    font: sliderfont,
    units: 'height', 
    pos: [0, 0.35], height: 0.032,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  your_estimate = new visual.TextStim({
    win: psychoJS.window,
    name: 'your_estimate',
    text: 'Your decision:',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.16)], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  estimate1_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'estimate1_textbox',
    text: '',
    font: sliderfont,
    pos: [(- 0.035), (- 0.19)], letterHeight: 0.035,
    size: [0.07, 0.045],  units: undefined, 
    color: 'Black', colorSpace: 'rgb',
    fillColor: 'White', borderColor: undefined,
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.005,
    editable: true,
    multiline: true,
    anchor: 'top-left',
    depth: -3.0 
  });
  
  text_invalid_input = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_invalid_input',
    text: '',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.26)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -4.0 
  });
  
  space_to_submit_estimation = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_to_submit_estimation',
    text: '',
    font: sliderfont,
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "SI"
  SIClock = new util.Clock();
  how_many_mushrooms_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'how_many_mushrooms_2',
    text: 'Based on the sample you just saw, how many out of 100 mushroom pickers should carry a BLUE bag today?\n',
    font: sliderfont,
    units: 'height', 
    pos: [0, 0.35], height: 0.032,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  peer_confidence_rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'peer_confidence_rating', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.28), 0.15], size : [0.3, 0.23],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  peers_estimate = new visual.TextStim({
    win: psychoJS.window,
    name: 'peers_estimate',
    text: "Other's decision:",
    font: sliderfont,
    units: undefined, 
    pos: [0.18, 0.2375], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  blue_box_peer = new visual.Rect ({
    win: psychoJS.window, name: 'blue_box_peer', 
    width: [0.06, 0.04][0], height: [0.06, 0.04][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('blue'),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  showEstimate_peer = new visual.TextStim({
    win: psychoJS.window,
    name: 'showEstimate_peer',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  red_rectangle_peer = new visual.Rect ({
    win: psychoJS.window, name: 'red_rectangle_peer', units : 'height', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0.18, 0.15],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  blue_rectangle_peer = new visual.Rect ({
    win: psychoJS.window, name: 'blue_rectangle_peer', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  sliderMarker_peer = new visual.Rect ({
    win: psychoJS.window, name: 'sliderMarker_peer', units : 'height', 
    width: [0.008, 0.05][0], height: [0.008, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  slider_text0_peer = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text0_peer',
    text: '0',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.07), 0.11], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  slider_text100_peer = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text100_peer',
    text: '100',
    font: 'Arial',
    units: 'height', 
    pos: [0.43, 0.11], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  your_estimate_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'your_estimate_1',
    text: 'Your decision:',
    font: sliderfont,
    units: undefined, 
    pos: [0.18, 0.0375], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  blue_box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'blue_box_2', 
    width: [0.06, 0.04][0], height: [0.06, 0.04][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('blue'),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -13, interpolate: true,
  });
  
  showEstimate_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'showEstimate_2',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  red_rectangle_2 = new visual.Rect ({
    win: psychoJS.window, name: 'red_rectangle_2', units : 'height', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0.18, (- 0.05)],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -15, interpolate: true,
  });
  
  blue_rectangle_2 = new visual.Rect ({
    win: psychoJS.window, name: 'blue_rectangle_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -16, interpolate: true,
  });
  
  sliderMarker_2 = new visual.Rect ({
    win: psychoJS.window, name: 'sliderMarker_2', units : 'height', 
    width: [0.008, 0.05][0], height: [0.008, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  slider_text0_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text0_2',
    text: '0',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.07), (- 0.09)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  slider_text100_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text100_2',
    text: '100',
    font: 'Arial',
    units: 'height', 
    pos: [0.43, (- 0.09)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  your_estimate_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'your_estimate_2',
    text: 'Your second decision:',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.16)], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  estimate2_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'estimate2_textbox',
    text: '',
    font: sliderfont,
    pos: [(- 0.035), (- 0.19)], letterHeight: 0.035,
    size: [0.07, 0.045],  units: undefined, 
    color: 'Black', colorSpace: 'rgb',
    fillColor: 'White', borderColor: undefined,
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.005,
    editable: true,
    multiline: true,
    anchor: 'top-left',
    depth: -21.0 
  });
  
  text_invalid_input_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_invalid_input_2',
    text: '',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.26)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -22.0 
  });
  
  space_to_submit_estimation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_to_submit_estimation_2',
    text: '',
    font: sliderfont,
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -23.0 
  });
  
  // Initialize components for Routine "tooLate_feedback"
  tooLate_feedbackClock = new util.Clock();
  tooLate_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'tooLate_fb',
    text: 'Too late!',
    font: sliderfont,
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "test_questions"
  test_questionsClock = new util.Clock();
  progress_bar_fixed_4 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_fixed_4', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  progress_bar_4 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_4', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('green'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  progress_IC_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress_IC_4',
    text: 'Instructions: 9/13',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.48], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'You have now finished the practice days. Before we continue, we want to ask you a few questions about your understanding of the game:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Q1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q1',
    text: '1. Each day, the distribution of the blue and red mushrooms is the same:  ',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.3], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  test_Q1 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q1',
    size: [0.17, 0.015], pos: [0, 0.26], units: 'height',
    labels: ["True", "False"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('white'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  wrong_answer_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.22], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -7.0 
  });
  
  Q2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q2',
    text: '2. If you just saw 4 blue mushrooms and 3 red mushrooms in the nearby fields, how many out of 100 mushrooms in the forest would probably be blue?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.17], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  test_Q2 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q2',
    size: [0.3, 0.015], pos: [0, 0.12], units: 'height',
    labels: ["Around 4, because I just\nsaw 4 blue mushrooms", "More than 4, because there\nare more mushrooms in the\nforest than in the fields "], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  wrong_answer_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.04], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -10.0 
  });
  
  Q3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q3',
    text: '3. If on day 1 you sample 37 mushrooms in the nearby fields and on day 2 you sample 7 mushrooms, on which day could you be more confident that the sample is a good representative of the number of blue and red mushrooms in the forest? ',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.01)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  test_Q3 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q3',
    size: [0.17, 0.015], pos: [0, (- 0.06)], units: 'height',
    labels: ["Day 1", "Day 2"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  wrong_answer_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -13.0 
  });
  
  enter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.44)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  blue_mushroom_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_mushroom_5', units : 'height', 
    image : 'blue_mushroom.png', mask : undefined,
    ori : 350.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  red_mushroom_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'red_mushroom_5', units : undefined, 
    image : 'red_mushroom.png', mask : undefined,
    ori : 10.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  Q4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q4',
    text: '4. The other participant saw the same number of mushrooms in the nearby fields as you did:',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.16)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  test_Q4 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q4',
    size: [0.17, 0.015], pos: [0, (- 0.2)], units: 'height',
    labels: ["True, always", "False, not necessarily"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -18, 
    flip: false,
  });
  
  wrong_answer_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -19.0 
  });
  
  Q5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q5',
    text: '5. The number of blue and red mushrooms in the forest is the same for the other participant and you:',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.29)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  test_Q5 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q5',
    size: [0.17, 0.015], pos: [0, (- 0.33)], units: 'height',
    labels: ["True", "False"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -21, 
    flip: false,
  });
  
  wrong_answer_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.37)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -22.0 
  });
  
  // Initialize components for Routine "instrBonus"
  instrBonusClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  event.clearEvents();
  
  
  Instr1 = "BONUS:\n\nAt the end of the harvest season you will receive a bonus.\nThe amount of this bonus depends on how well you did during the game, and is calculated as follows:\n\nThe computer will randomly pick one of the harvest days and compare your decision that day to the correct answer. Their is an equal chance that the computer picks your first or your second decision, so both decisions are equally important.\n\nIf your decision was exactly correct, you will receive a bonus of \u00a31.50. For each blue bag off, we will deduct 4 pence.\n\n\nPress the RIGHT arrow key to continue."
  
  Instr2 = "For example, if you decided to give 70 out of the 100 pickers a blue bag, but there were 88 blue mushrooms in the forest, you will receive \u00a31.50 - 18 x \u00a30.04 = \u00a30.78.\n\nYour bonus will never go below \u00a30.00.\n\nThis means that each and every day might determine your bonus at the end of the season.\n\n\nPress the RIGHT arrow key to continue."
  
  Instr3 = "As said before, the game will consist of multiple harvest days and all days together represent the harvest season. The entire season consists of 3 blocks. After each block, you can take a short break before continuing with the next block.\n\nPlease remember that you have 10 seconds to submit each decision, which is ample of time to think about your decision carefully. If you take longer than 10 seconds, you will get a warning message saying that you were too late. If that happens too often, the game will terminate automatically and you are asked to return your submission.\n\n\n\nIf everything is clear, you can press ENTER to start the game."
  InstrDict = {"1": Instr1, "2": Instr2, "3": Instr3};
  currentInstr = "1";
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blue_mushroom_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_mushroom_2', units : undefined, 
    image : 'blue_mushroom.png', mask : undefined,
    ori : 350.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  red_mushroom_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'red_mushroom_2', units : undefined, 
    image : 'red_mushroom.png', mask : undefined,
    ori : 10.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  progress_bar_fixed_3 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_fixed_3', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  progress_bar_3 = new visual.Rect ({
    win: psychoJS.window, name: 'progress_bar_3', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('green'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  progress_IC_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress_IC_3',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.48], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "setupSamples"
  setupSamplesClock = new util.Clock();
  var trials_parameters;
  // Initialize components for Routine "crossHair"
  crossHairClock = new util.Clock();
  cross_hair = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_hair',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "mushroomSample"
  mushroomSampleClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: ' ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  isi = new visual.TextStim({
    win: psychoJS.window,
    name: 'isi',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "firstEstimation"
  firstEstimationClock = new util.Clock();
  how_many_mushrooms = new visual.TextStim({
    win: psychoJS.window,
    name: 'how_many_mushrooms',
    text: 'Based on the sample you just saw, how many out of 100 mushroom pickers should carry a BLUE bag today?\n',
    font: sliderfont,
    units: 'height', 
    pos: [0, 0.35], height: 0.032,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  your_estimate = new visual.TextStim({
    win: psychoJS.window,
    name: 'your_estimate',
    text: 'Your decision:',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.16)], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  estimate1_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'estimate1_textbox',
    text: '',
    font: sliderfont,
    pos: [(- 0.035), (- 0.19)], letterHeight: 0.035,
    size: [0.07, 0.045],  units: undefined, 
    color: 'Black', colorSpace: 'rgb',
    fillColor: 'White', borderColor: undefined,
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.005,
    editable: true,
    multiline: true,
    anchor: 'top-left',
    depth: -3.0 
  });
  
  text_invalid_input = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_invalid_input',
    text: '',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.26)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -4.0 
  });
  
  space_to_submit_estimation = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_to_submit_estimation',
    text: '',
    font: sliderfont,
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "SI"
  SIClock = new util.Clock();
  how_many_mushrooms_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'how_many_mushrooms_2',
    text: 'Based on the sample you just saw, how many out of 100 mushroom pickers should carry a BLUE bag today?\n',
    font: sliderfont,
    units: 'height', 
    pos: [0, 0.35], height: 0.032,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  peer_confidence_rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'peer_confidence_rating', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.28), 0.15], size : [0.3, 0.23],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  peers_estimate = new visual.TextStim({
    win: psychoJS.window,
    name: 'peers_estimate',
    text: "Other's decision:",
    font: sliderfont,
    units: undefined, 
    pos: [0.18, 0.2375], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  blue_box_peer = new visual.Rect ({
    win: psychoJS.window, name: 'blue_box_peer', 
    width: [0.06, 0.04][0], height: [0.06, 0.04][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('blue'),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  showEstimate_peer = new visual.TextStim({
    win: psychoJS.window,
    name: 'showEstimate_peer',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  red_rectangle_peer = new visual.Rect ({
    win: psychoJS.window, name: 'red_rectangle_peer', units : 'height', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0.18, 0.15],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  blue_rectangle_peer = new visual.Rect ({
    win: psychoJS.window, name: 'blue_rectangle_peer', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  sliderMarker_peer = new visual.Rect ({
    win: psychoJS.window, name: 'sliderMarker_peer', units : 'height', 
    width: [0.008, 0.05][0], height: [0.008, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  slider_text0_peer = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text0_peer',
    text: '0',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.07), 0.11], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  slider_text100_peer = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text100_peer',
    text: '100',
    font: 'Arial',
    units: 'height', 
    pos: [0.43, 0.11], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  your_estimate_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'your_estimate_1',
    text: 'Your decision:',
    font: sliderfont,
    units: undefined, 
    pos: [0.18, 0.0375], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  blue_box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'blue_box_2', 
    width: [0.06, 0.04][0], height: [0.06, 0.04][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('blue'),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -13, interpolate: true,
  });
  
  showEstimate_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'showEstimate_2',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  red_rectangle_2 = new visual.Rect ({
    win: psychoJS.window, name: 'red_rectangle_2', units : 'height', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0.18, (- 0.05)],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -15, interpolate: true,
  });
  
  blue_rectangle_2 = new visual.Rect ({
    win: psychoJS.window, name: 'blue_rectangle_2', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -16, interpolate: true,
  });
  
  sliderMarker_2 = new visual.Rect ({
    win: psychoJS.window, name: 'sliderMarker_2', units : 'height', 
    width: [0.008, 0.05][0], height: [0.008, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  slider_text0_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text0_2',
    text: '0',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.07), (- 0.09)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  slider_text100_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text100_2',
    text: '100',
    font: 'Arial',
    units: 'height', 
    pos: [0.43, (- 0.09)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  your_estimate_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'your_estimate_2',
    text: 'Your second decision:',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.16)], height: 0.025,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  estimate2_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'estimate2_textbox',
    text: '',
    font: sliderfont,
    pos: [(- 0.035), (- 0.19)], letterHeight: 0.035,
    size: [0.07, 0.045],  units: undefined, 
    color: 'Black', colorSpace: 'rgb',
    fillColor: 'White', borderColor: undefined,
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.005,
    editable: true,
    multiline: true,
    anchor: 'top-left',
    depth: -21.0 
  });
  
  text_invalid_input_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_invalid_input_2',
    text: '',
    font: sliderfont,
    units: undefined, 
    pos: [0, (- 0.26)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -22.0 
  });
  
  space_to_submit_estimation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_to_submit_estimation_2',
    text: '',
    font: sliderfont,
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -23.0 
  });
  
  // Initialize components for Routine "tooLate_feedback"
  tooLate_feedbackClock = new util.Clock();
  tooLate_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'tooLate_fb',
    text: 'Too late!',
    font: sliderfont,
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  shortBreak = new visual.TextStim({
    win: psychoJS.window,
    name: 'shortBreak',
    text: 'Great job!\n\nYou can now take a 3 minute break before we continue with the next part of the season. \n\nIf you wish to continue earlier, you can press ENTER to start immediately.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  timer = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.4], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  blue_mushroom_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_mushroom_3', units : undefined, 
    image : 'blue_mushroom.png', mask : undefined,
    ori : 350.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  red_mushroom_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'red_mushroom_3', units : undefined, 
    image : 'red_mushroom.png', mask : undefined,
    ori : 10.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "end_tooLate"
  end_tooLateClock = new util.Clock();
  tooLate_finish = new visual.TextStim({
    win: psychoJS.window,
    name: 'tooLate_finish',
    text: 'Thank you for your interest in the study.\n\nHowever, you have responded too late on too many trials.\nThis screen therefore marks the end of the study and you will not receive your payment.\n\nPlease return your submission.\nIf you do not return your submission, the study will terminate automatically after 1 minute and your submission will be rejected.\n\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "showBonus"
  showBonusClock = new util.Clock();
  bonus_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bonus_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  enter_to_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blue_mushroom_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_mushroom_4', units : undefined, 
    image : 'blue_mushroom.png', mask : undefined,
    ori : 350.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  red_mushroom_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'red_mushroom_4', units : undefined, 
    image : 'red_mushroom.png', mask : undefined,
    ori : 10.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "comments"
  commentsClock = new util.Clock();
  comments_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'comments_title',
    text: 'In order to improve our study we would like to receive some feedback from you!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  comments_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'comments_instructions',
    text: 'Were the instructions clear?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  input_instructions = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_instructions',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.3), 0.17], letterHeight: 0.02,
    size: [0.6, 0.1],  units: 'height', 
    color: 'Black', colorSpace: 'rgb',
    fillColor: 'White', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'top-left',
    depth: -2.0 
  });
  
  comments_other = new visual.TextStim({
    win: psychoJS.window,
    name: 'comments_other',
    text: 'Do you have any feedback about the study, such as: Were the tasks easy to understand? Is there anything you liked or disliked about the study?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  input_other = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_other',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.3), (- 0.09)], letterHeight: 0.02,
    size: [0.6, 0.1],  units: 'height', 
    color: 'Black', colorSpace: 'rgb',
    fillColor: 'White', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'top-left',
    depth: -4.0 
  });
  
  continue_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'continue_button', units : 'height', 
    image : 'continue.png', mask : undefined,
    ori : 0.0, pos : [0.4, (- 0.35)], size : [0.1, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "instrEnd"
  instrEndClock = new util.Clock();
  textFinish = new visual.TextStim({
    win: psychoJS.window,
    name: 'textFinish',
    text: 'Thank you very much for participating.\n\nThis screen marks the end of the study.\n\nATTENTION: Please click FINISH to finish this study and receive your Prolific code.\n\nYou are reminded that by completing this study, you are agreeing with your participation and the submission of your data.\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  continue_button_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'continue_button_2', units : 'height', 
    image : 'finish.png', mask : undefined,
    ori : 0.0, pos : [0.4, (- 0.35)], size : [0.1, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var selected_practice_trials;
var selected_trials;
var n_tooLate;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // define trial selection
    selected_practice_trials = shuffle(range(42,0));
    selected_practice_trials.length = 1;
    selected_trials = shuffle(range(54,0));
    selected_trials.length = 3;
    
    // initialize value for too late trials
    n_tooLate = 0; 
    
    test_Q1._skin["STANDARD"]["MARKER_COLOR"] = new util.Color('black') // sets marker color for all sliders
    
    // keep track of which components have finished
    setupComponents = [];
    
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var window_dimension;
var window_y;
var window_x;
var aperture_size;
var mushroom_size;
function setupRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'setup'-------
    setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    window_dimension = (win.size[0] / win.size[1]);
    window_y = 0.5;
    window_x = (window_y * window_dimension);
    aperture_size = (window_y * 0.4);
    mushroom_size = (aperture_size * 0.5);
    
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var wave1Data;
var wave1;
var levels_nTotal;
var levels_ratio;
var levels_confidence;
var repeat;
var all_nTotals;
var all_ratios;
var all_confidences;
var nTotal_ratio_confidence;
var SI_fillers;
var import_wave1_dataComponents;
function import_wave1_dataRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'import_wave1_data'-------
    t = 0;
    import_wave1_dataClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    wave1Data = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
            extraInfo: expInfo, originPath: undefined,
            trialList: 'wave1_input_confidence.csv',
            seed: undefined, name: 'wave1Data'
        });
    
    wave1 = wave1Data.getTrialList()
    
    
    // make list of all nTotal, ratio levels and confidence levels
    levels_nTotal = [5, 45];
    levels_ratio = [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875];
    levels_confidence = [1, 2, 3];
    repeat = (values, counts) => values.flatMap((v, i) => Array(counts[i]).fill(v));
    all_nTotals = repeat(levels_nTotal, Array(levels_nTotal.length).fill(levels_ratio.length*levels_confidence.length).flat());
    all_ratios = Array(levels_nTotal.length).fill(repeat(levels_ratio, Array(levels_ratio.length).fill(levels_confidence.length).flat())).flat()
    
    
    // create shuffled list of confidence levels for each combination of nTotal and ratio
    all_confidences = [];
    for (var i, _pj_c = 0, _pj_a = levels_nTotal, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        for (var k, _pj_f = 0, _pj_d = levels_ratio, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            k = _pj_d[_pj_f];
            all_confidences.push(...shuffle(levels_confidence));
        }
    }
    
    
    
    // combine nTotal ratio and confidence into one object
    nTotal_ratio_confidence = [];
    for (var i, _pj_c = 0, _pj_a = all_nTotals, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_c;
        nTotal_ratio_confidence[i] = { nTotal: all_nTotals[i], ratio: all_ratios[i], confidence: all_confidences[i] };
    }
    
    // make list for filler rounds: 8x SI which is closer than 3 percentage points, x SI which is further than 40 percentage points. 
    SI_fillers = shuffle([3, 3, 3, 3, 3, 3, 3, 3, 40, 40, 40, 40]);
    // keep track of which components have finished
    import_wave1_dataComponents = [];
    
    import_wave1_dataComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function import_wave1_dataRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'import_wave1_data'-------
    // get current time
    t = import_wave1_dataClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    import_wave1_dataComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function import_wave1_dataRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'import_wave1_data'-------
    import_wave1_dataComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "import_wave1_data" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var loop_informedConsent;
var currentLoop;
function loop_informedConsentLoopBegin(loop_informedConsentLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_informedConsent = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 200, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'loop_informedConsent'
  });
  psychoJS.experiment.addLoop(loop_informedConsent); // add the loop to the experiment
  currentLoop = loop_informedConsent;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_informedConsent.forEach(function() {
    const snapshot = loop_informedConsent.getSnapshot();

    loop_informedConsentLoopScheduler.add(importConditions(snapshot));
    loop_informedConsentLoopScheduler.add(informedConsentRoutineBegin(snapshot));
    loop_informedConsentLoopScheduler.add(informedConsentRoutineEachFrame(snapshot));
    loop_informedConsentLoopScheduler.add(informedConsentRoutineEnd(snapshot));
    loop_informedConsentLoopScheduler.add(endLoopIteration(loop_informedConsentLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_informedConsentLoopEnd() {
  psychoJS.experiment.removeLoop(loop_informedConsent);

  return Scheduler.Event.NEXT;
}


var rounds;
function roundsLoopBegin(roundsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  rounds = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'rounds'
  });
  psychoJS.experiment.addLoop(rounds); // add the loop to the experiment
  currentLoop = rounds;  // we're now the current loop

  // Schedule all the trials in the trialList:
  rounds.forEach(function() {
    const snapshot = rounds.getSnapshot();

    roundsLoopScheduler.add(importConditions(snapshot));
    roundsLoopScheduler.add(personality_statementsRoutineBegin(snapshot));
    roundsLoopScheduler.add(personality_statementsRoutineEachFrame(snapshot));
    roundsLoopScheduler.add(personality_statementsRoutineEnd(snapshot));
    roundsLoopScheduler.add(endLoopIteration(roundsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function roundsLoopEnd() {
  psychoJS.experiment.removeLoop(rounds);

  return Scheduler.Event.NEXT;
}


var practice_phases;
function practice_phasesLoopBegin(practice_phasesLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_phases = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'practice_phases'
  });
  psychoJS.experiment.addLoop(practice_phases); // add the loop to the experiment
  currentLoop = practice_phases;  // we're now the current loop

  // Schedule all the trials in the trialList:
  practice_phases.forEach(function() {
    const snapshot = practice_phases.getSnapshot();

    practice_phasesLoopScheduler.add(importConditions(snapshot));
    practice_phasesLoopScheduler.add(set_practicePhaseRoutineBegin(snapshot));
    practice_phasesLoopScheduler.add(set_practicePhaseRoutineEachFrame(snapshot));
    practice_phasesLoopScheduler.add(set_practicePhaseRoutineEnd(snapshot));
    const loop_instrPracLoopScheduler = new Scheduler(psychoJS);
    practice_phasesLoopScheduler.add(loop_instrPracLoopBegin, loop_instrPracLoopScheduler);
    practice_phasesLoopScheduler.add(loop_instrPracLoopScheduler);
    practice_phasesLoopScheduler.add(loop_instrPracLoopEnd);
    const loop_instrPrac2LoopScheduler = new Scheduler(psychoJS);
    practice_phasesLoopScheduler.add(loop_instrPrac2LoopBegin, loop_instrPrac2LoopScheduler);
    practice_phasesLoopScheduler.add(loop_instrPrac2LoopScheduler);
    practice_phasesLoopScheduler.add(loop_instrPrac2LoopEnd);
    const loop_prTrialsLoopScheduler = new Scheduler(psychoJS);
    practice_phasesLoopScheduler.add(loop_prTrialsLoopBegin, loop_prTrialsLoopScheduler);
    practice_phasesLoopScheduler.add(loop_prTrialsLoopScheduler);
    practice_phasesLoopScheduler.add(loop_prTrialsLoopEnd);
    practice_phasesLoopScheduler.add(test_questionsRoutineBegin(snapshot));
    practice_phasesLoopScheduler.add(test_questionsRoutineEachFrame(snapshot));
    practice_phasesLoopScheduler.add(test_questionsRoutineEnd(snapshot));
    const loop_instrBonusLoopScheduler = new Scheduler(psychoJS);
    practice_phasesLoopScheduler.add(loop_instrBonusLoopBegin, loop_instrBonusLoopScheduler);
    practice_phasesLoopScheduler.add(loop_instrBonusLoopScheduler);
    practice_phasesLoopScheduler.add(loop_instrBonusLoopEnd);
    practice_phasesLoopScheduler.add(endLoopIteration(practice_phasesLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var loop_instrPrac;
function loop_instrPracLoopBegin(loop_instrPracLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_instrPrac = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 200, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'loop_instrPrac'
  });
  psychoJS.experiment.addLoop(loop_instrPrac); // add the loop to the experiment
  currentLoop = loop_instrPrac;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_instrPrac.forEach(function() {
    const snapshot = loop_instrPrac.getSnapshot();

    loop_instrPracLoopScheduler.add(importConditions(snapshot));
    loop_instrPracLoopScheduler.add(instrPracRoutineBegin(snapshot));
    loop_instrPracLoopScheduler.add(instrPracRoutineEachFrame(snapshot));
    loop_instrPracLoopScheduler.add(instrPracRoutineEnd(snapshot));
    loop_instrPracLoopScheduler.add(endLoopIteration(loop_instrPracLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_instrPracLoopEnd() {
  psychoJS.experiment.removeLoop(loop_instrPrac);

  return Scheduler.Event.NEXT;
}


var loop_instrPrac2;
function loop_instrPrac2LoopBegin(loop_instrPrac2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_instrPrac2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 200, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'loop_instrPrac2'
  });
  psychoJS.experiment.addLoop(loop_instrPrac2); // add the loop to the experiment
  currentLoop = loop_instrPrac2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_instrPrac2.forEach(function() {
    const snapshot = loop_instrPrac2.getSnapshot();

    loop_instrPrac2LoopScheduler.add(importConditions(snapshot));
    loop_instrPrac2LoopScheduler.add(instrPrac2RoutineBegin(snapshot));
    loop_instrPrac2LoopScheduler.add(instrPrac2RoutineEachFrame(snapshot));
    loop_instrPrac2LoopScheduler.add(instrPrac2RoutineEnd(snapshot));
    loop_instrPrac2LoopScheduler.add(endLoopIteration(loop_instrPrac2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_instrPrac2LoopEnd() {
  psychoJS.experiment.removeLoop(loop_instrPrac2);

  return Scheduler.Event.NEXT;
}


var loop_prTrials;
function loop_prTrialsLoopBegin(loop_prTrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_prTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trial_structure.csv', selected_practice_trials),
    seed: undefined, name: 'loop_prTrials'
  });
  psychoJS.experiment.addLoop(loop_prTrials); // add the loop to the experiment
  currentLoop = loop_prTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_prTrials.forEach(function() {
    const snapshot = loop_prTrials.getSnapshot();

    loop_prTrialsLoopScheduler.add(importConditions(snapshot));
    loop_prTrialsLoopScheduler.add(setupSamplesRoutineBegin(snapshot));
    loop_prTrialsLoopScheduler.add(setupSamplesRoutineEachFrame(snapshot));
    loop_prTrialsLoopScheduler.add(setupSamplesRoutineEnd(snapshot));
    loop_prTrialsLoopScheduler.add(crossHairRoutineBegin(snapshot));
    loop_prTrialsLoopScheduler.add(crossHairRoutineEachFrame(snapshot));
    loop_prTrialsLoopScheduler.add(crossHairRoutineEnd(snapshot));
    const loop_prSamplesLoopScheduler = new Scheduler(psychoJS);
    loop_prTrialsLoopScheduler.add(loop_prSamplesLoopBegin, loop_prSamplesLoopScheduler);
    loop_prTrialsLoopScheduler.add(loop_prSamplesLoopScheduler);
    loop_prTrialsLoopScheduler.add(loop_prSamplesLoopEnd);
    loop_prTrialsLoopScheduler.add(firstEstimationRoutineBegin(snapshot));
    loop_prTrialsLoopScheduler.add(firstEstimationRoutineEachFrame(snapshot));
    loop_prTrialsLoopScheduler.add(firstEstimationRoutineEnd(snapshot));
    loop_prTrialsLoopScheduler.add(SIRoutineBegin(snapshot));
    loop_prTrialsLoopScheduler.add(SIRoutineEachFrame(snapshot));
    loop_prTrialsLoopScheduler.add(SIRoutineEnd(snapshot));
    loop_prTrialsLoopScheduler.add(tooLate_feedbackRoutineBegin(snapshot));
    loop_prTrialsLoopScheduler.add(tooLate_feedbackRoutineEachFrame(snapshot));
    loop_prTrialsLoopScheduler.add(tooLate_feedbackRoutineEnd(snapshot));
    loop_prTrialsLoopScheduler.add(endLoopIteration(loop_prTrialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var loop_prSamples;
function loop_prSamplesLoopBegin(loop_prSamplesLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_prSamples = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'loop_prSamples'
  });
  psychoJS.experiment.addLoop(loop_prSamples); // add the loop to the experiment
  currentLoop = loop_prSamples;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_prSamples.forEach(function() {
    const snapshot = loop_prSamples.getSnapshot();

    loop_prSamplesLoopScheduler.add(importConditions(snapshot));
    loop_prSamplesLoopScheduler.add(mushroomSampleRoutineBegin(snapshot));
    loop_prSamplesLoopScheduler.add(mushroomSampleRoutineEachFrame(snapshot));
    loop_prSamplesLoopScheduler.add(mushroomSampleRoutineEnd(snapshot));
    loop_prSamplesLoopScheduler.add(ISIRoutineBegin(snapshot));
    loop_prSamplesLoopScheduler.add(ISIRoutineEachFrame(snapshot));
    loop_prSamplesLoopScheduler.add(ISIRoutineEnd(snapshot));
    loop_prSamplesLoopScheduler.add(endLoopIteration(loop_prSamplesLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_prSamplesLoopEnd() {
  psychoJS.experiment.removeLoop(loop_prSamples);

  return Scheduler.Event.NEXT;
}


function loop_prTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(loop_prTrials);

  return Scheduler.Event.NEXT;
}


var loop_instrBonus;
function loop_instrBonusLoopBegin(loop_instrBonusLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_instrBonus = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 200, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'loop_instrBonus'
  });
  psychoJS.experiment.addLoop(loop_instrBonus); // add the loop to the experiment
  currentLoop = loop_instrBonus;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_instrBonus.forEach(function() {
    const snapshot = loop_instrBonus.getSnapshot();

    loop_instrBonusLoopScheduler.add(importConditions(snapshot));
    loop_instrBonusLoopScheduler.add(instrBonusRoutineBegin(snapshot));
    loop_instrBonusLoopScheduler.add(instrBonusRoutineEachFrame(snapshot));
    loop_instrBonusLoopScheduler.add(instrBonusRoutineEnd(snapshot));
    loop_instrBonusLoopScheduler.add(endLoopIteration(loop_instrBonusLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_instrBonusLoopEnd() {
  psychoJS.experiment.removeLoop(loop_instrBonus);

  return Scheduler.Event.NEXT;
}


function practice_phasesLoopEnd() {
  psychoJS.experiment.removeLoop(practice_phases);

  return Scheduler.Event.NEXT;
}


var loop_trials;
function loop_trialsLoopBegin(loop_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trial_structure.csv', selected_trials),
    seed: undefined, name: 'loop_trials'
  });
  psychoJS.experiment.addLoop(loop_trials); // add the loop to the experiment
  currentLoop = loop_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_trials.forEach(function() {
    const snapshot = loop_trials.getSnapshot();

    loop_trialsLoopScheduler.add(importConditions(snapshot));
    loop_trialsLoopScheduler.add(setupSamplesRoutineBegin(snapshot));
    loop_trialsLoopScheduler.add(setupSamplesRoutineEachFrame(snapshot));
    loop_trialsLoopScheduler.add(setupSamplesRoutineEnd(snapshot));
    loop_trialsLoopScheduler.add(crossHairRoutineBegin(snapshot));
    loop_trialsLoopScheduler.add(crossHairRoutineEachFrame(snapshot));
    loop_trialsLoopScheduler.add(crossHairRoutineEnd(snapshot));
    const loop_samplesLoopScheduler = new Scheduler(psychoJS);
    loop_trialsLoopScheduler.add(loop_samplesLoopBegin, loop_samplesLoopScheduler);
    loop_trialsLoopScheduler.add(loop_samplesLoopScheduler);
    loop_trialsLoopScheduler.add(loop_samplesLoopEnd);
    loop_trialsLoopScheduler.add(firstEstimationRoutineBegin(snapshot));
    loop_trialsLoopScheduler.add(firstEstimationRoutineEachFrame(snapshot));
    loop_trialsLoopScheduler.add(firstEstimationRoutineEnd(snapshot));
    loop_trialsLoopScheduler.add(SIRoutineBegin(snapshot));
    loop_trialsLoopScheduler.add(SIRoutineEachFrame(snapshot));
    loop_trialsLoopScheduler.add(SIRoutineEnd(snapshot));
    loop_trialsLoopScheduler.add(tooLate_feedbackRoutineBegin(snapshot));
    loop_trialsLoopScheduler.add(tooLate_feedbackRoutineEachFrame(snapshot));
    loop_trialsLoopScheduler.add(tooLate_feedbackRoutineEnd(snapshot));
    loop_trialsLoopScheduler.add(pauseRoutineBegin(snapshot));
    loop_trialsLoopScheduler.add(pauseRoutineEachFrame(snapshot));
    loop_trialsLoopScheduler.add(pauseRoutineEnd(snapshot));
    loop_trialsLoopScheduler.add(endLoopIteration(loop_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var loop_samples;
function loop_samplesLoopBegin(loop_samplesLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_samples = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'loop_samples'
  });
  psychoJS.experiment.addLoop(loop_samples); // add the loop to the experiment
  currentLoop = loop_samples;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_samples.forEach(function() {
    const snapshot = loop_samples.getSnapshot();

    loop_samplesLoopScheduler.add(importConditions(snapshot));
    loop_samplesLoopScheduler.add(mushroomSampleRoutineBegin(snapshot));
    loop_samplesLoopScheduler.add(mushroomSampleRoutineEachFrame(snapshot));
    loop_samplesLoopScheduler.add(mushroomSampleRoutineEnd(snapshot));
    loop_samplesLoopScheduler.add(ISIRoutineBegin(snapshot));
    loop_samplesLoopScheduler.add(ISIRoutineEachFrame(snapshot));
    loop_samplesLoopScheduler.add(ISIRoutineEnd(snapshot));
    loop_samplesLoopScheduler.add(endLoopIteration(loop_samplesLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_samplesLoopEnd() {
  psychoJS.experiment.removeLoop(loop_samples);

  return Scheduler.Event.NEXT;
}


function loop_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(loop_trials);

  return Scheduler.Event.NEXT;
}


var progress_bar_size;
var progress_bar_pos;
var progress_text;
var _informed_consent_responses_allKeys;
var informedConsentComponents;
function informedConsentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'informedConsent'-------
    t = 0;
    informedConsentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    event.clearEvents();
    progress_bar_size = (((window_x * 2) / 7) * Number.parseInt(currentIC));
    progress_bar_pos = ((- window_x) + ((((window_x * 2) / 7) * Number.parseInt(currentIC)) / 2));
    progress_text = (("Informed consent: " + currentIC) + "/7");
    
    informed_consent.setText(ICDict[currentIC]);
    informed_consent_responses.keys = undefined;
    informed_consent_responses.rt = undefined;
    _informed_consent_responses_allKeys = [];
    progress_bar_fixed.setPos([0, 0.48]);
    progress_bar_fixed.setSize([(window_x * 2), 0.03]);
    progress_bar.setPos([progress_bar_pos, 0.48]);
    progress_bar.setSize([progress_bar_size, 0.03]);
    progress_IC.setText(progress_text);
    // keep track of which components have finished
    informedConsentComponents = [];
    informedConsentComponents.push(informed_consent);
    informedConsentComponents.push(informed_consent_responses);
    informedConsentComponents.push(progress_bar_fixed);
    informedConsentComponents.push(progress_bar);
    informedConsentComponents.push(progress_IC);
    
    informedConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function informedConsentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'informedConsent'-------
    // get current time
    t = informedConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *informed_consent* updates
    if (t >= 0.0 && informed_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      informed_consent.tStart = t;  // (not accounting for frame time here)
      informed_consent.frameNStart = frameN;  // exact frame index
      
      informed_consent.setAutoDraw(true);
    }

    
    // *informed_consent_responses* updates
    if (t >= 0.0 && informed_consent_responses.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      informed_consent_responses.tStart = t;  // (not accounting for frame time here)
      informed_consent_responses.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { informed_consent_responses.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { informed_consent_responses.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { informed_consent_responses.clearEvents(); });
    }

    if (informed_consent_responses.status === PsychoJS.Status.STARTED) {
      let theseKeys = informed_consent_responses.getKeys({keyList: ['right', 'left', 'return', 'num_enter'], waitRelease: false});
      _informed_consent_responses_allKeys = _informed_consent_responses_allKeys.concat(theseKeys);
      if (_informed_consent_responses_allKeys.length > 0) {
        informed_consent_responses.keys = _informed_consent_responses_allKeys[_informed_consent_responses_allKeys.length - 1].name;  // just the last key pressed
        informed_consent_responses.rt = _informed_consent_responses_allKeys[_informed_consent_responses_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *progress_bar_fixed* updates
    if (t >= 0.0 && progress_bar_fixed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_fixed.tStart = t;  // (not accounting for frame time here)
      progress_bar_fixed.frameNStart = frameN;  // exact frame index
      
      progress_bar_fixed.setAutoDraw(true);
    }

    
    // *progress_bar* updates
    if (t >= 0.0 && progress_bar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar.tStart = t;  // (not accounting for frame time here)
      progress_bar.frameNStart = frameN;  // exact frame index
      
      progress_bar.setAutoDraw(true);
    }

    
    // *progress_IC* updates
    if (t >= 0.0 && progress_IC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_IC.tStart = t;  // (not accounting for frame time here)
      progress_IC.frameNStart = frameN;  // exact frame index
      
      progress_IC.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    informedConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function informedConsentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'informedConsent'-------
    informedConsentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((((informed_consent_responses.keys === "return") || (informed_consent_responses.keys === "num_enter")) && (Number.parseInt(currentIC) === 7))) {
        currentIC = (Number.parseInt(currentIC) + 1);
    } else {
        if (((informed_consent_responses.keys === "right") && (Number.parseInt(currentIC) === 7))) {
            currentIC = Number.parseInt(currentIC);
        } else {
            if (((informed_consent_responses.keys === "right") && (Number.parseInt(currentIC) !== 7))) {
                currentIC = (Number.parseInt(currentIC) + 1);
            } else {
                if ((informed_consent_responses.keys === "left")) {
                    currentIC = (Number.parseInt(currentIC) - 1);
                }
            }
        }
    }
    if ((currentIC === 0)) {
        currentIC = 1;
    } else {
        if ((currentIC === 8)) {
            loop_informedConsent.finished = true;
            expInfo["informedConsent"] = "yes";
        }
    }
    currentIC = currentIC.toString();
    
    informed_consent_responses.stop();
    // the Routine "informedConsent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _response_2_allKeys;
var instr_questionnaireComponents;
function instr_questionnaireRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_questionnaire'-------
    t = 0;
    instr_questionnaireClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    response_2.keys = undefined;
    response_2.rt = undefined;
    _response_2_allKeys = [];
    event.clearEvents();
    
    // keep track of which components have finished
    instr_questionnaireComponents = [];
    instr_questionnaireComponents.push(response_2);
    instr_questionnaireComponents.push(text_5);
    
    instr_questionnaireComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_questionnaireRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_questionnaire'-------
    // get current time
    t = instr_questionnaireClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response_2* updates
    if (t >= 0.0 && response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_2.tStart = t;  // (not accounting for frame time here)
      response_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_2.clearEvents(); });
    }

    if (response_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_2.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _response_2_allKeys = _response_2_allKeys.concat(theseKeys);
      if (_response_2_allKeys.length > 0) {
        response_2.keys = _response_2_allKeys[_response_2_allKeys.length - 1].name;  // just the last key pressed
        response_2.rt = _response_2_allKeys[_response_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_questionnaireComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_questionnaireRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_questionnaire'-------
    instr_questionnaireComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    response_2.stop();
    /* Syntax Error: Fix Python code */
    // the Routine "instr_questionnaire" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var checkboxes;
var clicked;
var bufferTime;
var clickClock;
var lastClickTime;
var header_text;
var gotValidClick;
var personality_statementsComponents;
function personality_statementsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'personality_statements'-------
    t = 0;
    personality_statementsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    statements_left.setAlignHoriz('left');
    statements_right.setAlignHoriz('left');
    
    checkboxes = [box_1, box_2, box_3, box_4, box_5, box_6, box_7, box_8, box_9, box_10, box_11, box_12];
    clicked = [];
    
    for (var box, _pj_c = 0, _pj_a = checkboxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        if (chosen.includes(box.name)) {
            box.setFillColor(new util.Color([-.1,-.1,-.1]));
            box.setLineColor(new util.Color([-.1,-.1,-.1]));
        } else {
            box.setFillColor(new util.Color([1,1,1]));
        }
    }
    
    bufferTime = 0.1;
    clickClock = new util.Clock();
    lastClickTime = 0;
    
    if (traits_round === 1) {
        header_text = "Please select the 2 personality traits that characterize you the most:";
    } else if (traits_round === 2) {
        header_text = "Please select the next 2 personality traits that characterize you the most:";
    } else if (traits_round === 3) {
        header_text = "Please select all other personality traits that apply to you:\n(There is no minimum or maximum number of traits to select)";
    }
    
    header_statements.setText(header_text);
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    personality_statementsComponents = [];
    personality_statementsComponents.push(header_statements);
    personality_statementsComponents.push(statements_left);
    personality_statementsComponents.push(mouse_3);
    personality_statementsComponents.push(box_1);
    personality_statementsComponents.push(box_2);
    personality_statementsComponents.push(box_3);
    personality_statementsComponents.push(box_4);
    personality_statementsComponents.push(box_5);
    personality_statementsComponents.push(box_6);
    personality_statementsComponents.push(statements_right);
    personality_statementsComponents.push(box_7);
    personality_statementsComponents.push(box_8);
    personality_statementsComponents.push(box_9);
    personality_statementsComponents.push(box_10);
    personality_statementsComponents.push(box_11);
    personality_statementsComponents.push(box_12);
    personality_statementsComponents.push(enter_3);
    
    personality_statementsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var selected_text;
function personality_statementsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'personality_statements'-------
    // get current time
    t = personality_statementsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    for (var box, _pj_c = 0, _pj_a = checkboxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        if (mouse_3.isPressedIn(box)) {
            var thisClickTime = clickClock.getTime();
            if (((thisClickTime - lastClickTime) > bufferTime)) {
                if ((! _pj.in_es6(box.name, clicked)) && (! _pj.in_es6(box.name, chosen))) {
                    box.setFillColor(new util.Color([1,0,0]));
                    clicked.append(box.name);
                } else {
                    if (_pj.in_es6(box.name, clicked) && (! _pj.in_es6(box.name, chosen))) {
                        box.setFillColor(new util.Color([1,1,1]));
                        clicked.splice(clicked.indexOf(box.name),1);
                    }
                }
            }
            lastClickTime = thisClickTime;
        }
    }
    
    if (traits_round < 3) {
        selected_text = "";
        if ((clicked.length > 2)) {
            selected_text = "**You have selected more than 2 traits**\nPlease deselect 1 trait";
        } else {
            if ((clicked.length === 2)) {
                selected_text = "**Press ENTER to submit your selection**";
                if ((_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys))) {
                    continueRoutine = false;
                }
            }
        }
    } else if (traits_round === 3) {
        selected_text = "**Press ENTER to submit your selection**";
        if ((_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys))) {
            continueRoutine = false;
        }
    }
    
    // *header_statements* updates
    if (t >= 0.0 && header_statements.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_statements.tStart = t;  // (not accounting for frame time here)
      header_statements.frameNStart = frameN;  // exact frame index
      
      header_statements.setAutoDraw(true);
    }

    
    // *statements_left* updates
    if (t >= 0.0 && statements_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statements_left.tStart = t;  // (not accounting for frame time here)
      statements_left.frameNStart = frameN;  // exact frame index
      
      statements_left.setAutoDraw(true);
    }

    
    // *box_1* updates
    if (t >= 0.0 && box_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_1.tStart = t;  // (not accounting for frame time here)
      box_1.frameNStart = frameN;  // exact frame index
      
      box_1.setAutoDraw(true);
    }

    
    // *box_2* updates
    if (t >= 0.0 && box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_2.tStart = t;  // (not accounting for frame time here)
      box_2.frameNStart = frameN;  // exact frame index
      
      box_2.setAutoDraw(true);
    }

    
    // *box_3* updates
    if (t >= 0.0 && box_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_3.tStart = t;  // (not accounting for frame time here)
      box_3.frameNStart = frameN;  // exact frame index
      
      box_3.setAutoDraw(true);
    }

    
    // *box_4* updates
    if (t >= 0.0 && box_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_4.tStart = t;  // (not accounting for frame time here)
      box_4.frameNStart = frameN;  // exact frame index
      
      box_4.setAutoDraw(true);
    }

    
    // *box_5* updates
    if (t >= 0.0 && box_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_5.tStart = t;  // (not accounting for frame time here)
      box_5.frameNStart = frameN;  // exact frame index
      
      box_5.setAutoDraw(true);
    }

    
    // *box_6* updates
    if (t >= 0.0 && box_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_6.tStart = t;  // (not accounting for frame time here)
      box_6.frameNStart = frameN;  // exact frame index
      
      box_6.setAutoDraw(true);
    }

    
    // *statements_right* updates
    if (t >= 0.0 && statements_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statements_right.tStart = t;  // (not accounting for frame time here)
      statements_right.frameNStart = frameN;  // exact frame index
      
      statements_right.setAutoDraw(true);
    }

    
    // *box_7* updates
    if (t >= 0.0 && box_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_7.tStart = t;  // (not accounting for frame time here)
      box_7.frameNStart = frameN;  // exact frame index
      
      box_7.setAutoDraw(true);
    }

    
    // *box_8* updates
    if (t >= 0.0 && box_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_8.tStart = t;  // (not accounting for frame time here)
      box_8.frameNStart = frameN;  // exact frame index
      
      box_8.setAutoDraw(true);
    }

    
    // *box_9* updates
    if (t >= 0.0 && box_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_9.tStart = t;  // (not accounting for frame time here)
      box_9.frameNStart = frameN;  // exact frame index
      
      box_9.setAutoDraw(true);
    }

    
    // *box_10* updates
    if (t >= 0.0 && box_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_10.tStart = t;  // (not accounting for frame time here)
      box_10.frameNStart = frameN;  // exact frame index
      
      box_10.setAutoDraw(true);
    }

    
    // *box_11* updates
    if (t >= 0.0 && box_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_11.tStart = t;  // (not accounting for frame time here)
      box_11.frameNStart = frameN;  // exact frame index
      
      box_11.setAutoDraw(true);
    }

    
    // *box_12* updates
    if (t >= 0.0 && box_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_12.tStart = t;  // (not accounting for frame time here)
      box_12.frameNStart = frameN;  // exact frame index
      
      box_12.setAutoDraw(true);
    }

    
    // *enter_3* updates
    if (t >= 0.0 && enter_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_3.tStart = t;  // (not accounting for frame time here)
      enter_3.frameNStart = frameN;  // exact frame index
      
      enter_3.setAutoDraw(true);
    }

    
    if (enter_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      enter_3.setText(selected_text, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    personality_statementsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var trait_numbers;
var trait_list;
var trait_1a;
var trait_1b;
var trait_2a;
var trait_2b;
var trait_rest;
var traits1;
var traits2;
var traits3;
function personality_statementsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'personality_statements'-------
    personality_statementsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    traits_round = traits_round + 1;
    chosen.append(...clicked);
    
    
    
    // store data for thisExp (ExperimentHandler)
    if (iRound === 2) {
        chosen = chosen.join('_');
        trait_numbers = function () {
            var _pj_a = [], _pj_b = chosen.split("_");
            for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
                var s = _pj_b[_pj_c];
                if (Number.isInteger(Number.parseInt(s))) {
                    _pj_a.push(Number.parseInt(s));
                }
            }
            return _pj_a;
        }
        .call(this);
        trait_numbers = function () {
            var _pj_a = [], _pj_b = trait_numbers;
            for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
                var x = _pj_b[_pj_c];
                _pj_a.push((x - 1));
            }
            return _pj_a;
        }
        .call(this);
    
        trait_list = ["Active", "Organized", "Responsible", "Dependable", "Efficient", "Sympathetic", "Imaginative", "Kind", "Insightful", "Affectionate", "Curious", "Artistic"];
        trait_1a = trait_list[trait_numbers[0]];
        trait_1b = trait_list[trait_numbers[1]];
        trait_2a = trait_list[trait_numbers[2]];
        trait_2b = trait_list[trait_numbers[3]];
        trait_rest = [];
        if (trait_numbers.length > 4) {
            for (var nTrait, _pj_c = 0, _pj_a = trait_numbers.slice(4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                nTrait = _pj_a[_pj_c];
                trait_rest.append(trait_list[nTrait]);
            }
        }
    
        traits1 = [trait_1a, trait_1b].join("  ");
        traits2 = [trait_2a, trait_2b].join("  ");
        traits3 = trait_rest.join("  ");
    
        // save traits
        expInfo["traits1"] = traits1;
        expInfo["traits2"] = traits2;
        expInfo["traits3"] = traits3;
    }
    
    iRound = iRound + 1;
    // the Routine "personality_statements" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb1;
var fb2;
var newline;
var fb;
var _key_resp_4_allKeys;
var feedback_traitsComponents;
function feedback_traitsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_traits'-------
    t = 0;
    feedback_traitsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // give feedback
    fb1 = "According to your selection, the traits that characterize you the most are:\n\n\n\n";
    fb2 = "\n\n\n\n\n\n\nPress ENTER to continue.";
    newline = "\n";
    fb = ((((((fb1 + traits1) + newline) + traits2) + newline) + traits3) + fb2);
    fb_text.setText(fb);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    feedback_traitsComponents = [];
    feedback_traitsComponents.push(fb_text);
    feedback_traitsComponents.push(key_resp_4);
    
    feedback_traitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_traitsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_traits'-------
    // get current time
    t = feedback_traitsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_text* updates
    if (t >= 0.0 && fb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_text.tStart = t;  // (not accounting for frame time here)
      fb_text.frameNStart = frameN;  // exact frame index
      
      fb_text.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_traitsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_traitsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_traits'-------
    feedback_traitsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_4.stop();
    // the Routine "feedback_traits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var set_practicePhaseComponents;
function set_practicePhaseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'set_practicePhase'-------
    t = 0;
    set_practicePhaseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practice_phase = (practice_phase + 1);
    startGame = 0;
    
    // keep track of which components have finished
    set_practicePhaseComponents = [];
    
    set_practicePhaseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function set_practicePhaseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'set_practicePhase'-------
    // get current time
    t = set_practicePhaseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    set_practicePhaseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function set_practicePhaseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'set_practicePhase'-------
    set_practicePhaseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "set_practicePhase" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _response_allKeys;
var instrPracComponents;
function instrPracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instrPrac'-------
    t = 0;
    instrPracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    // only run if phase is 1
    if (practice_phase !== 1) {
        loop_instrPrac.finished = true;
        continueRoutine = false;
    }
    
    event.clearEvents();
    
    progress_bar_size = (((window_x * 2) / 18) * Number.parseInt(currentPr));
    progress_bar_pos = ((- window_x) + ((((window_x * 2) / 18) * Number.parseInt(currentPr)) / 2));
    progress_text = (("Instructions: " + currentPr) + "/18");
    
    
    text.setText(PrDict[currentPr]);
    blue_mushroom.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom.setPos([(window_x - 0.2), (- 0.4)]);
    progress_bar_fixed_2.setPos([0, 0.48]);
    progress_bar_fixed_2.setSize([(window_x * 2), 0.03]);
    progress_bar_2.setPos([progress_bar_pos, 0.48]);
    progress_bar_2.setSize([progress_bar_size, 0.03]);
    progress_IC_2.setText(progress_text);
    // keep track of which components have finished
    instrPracComponents = [];
    instrPracComponents.push(response);
    instrPracComponents.push(text);
    instrPracComponents.push(blue_mushroom);
    instrPracComponents.push(red_mushroom);
    instrPracComponents.push(progress_bar_fixed_2);
    instrPracComponents.push(progress_bar_2);
    instrPracComponents.push(progress_IC_2);
    
    instrPracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrPracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instrPrac'-------
    // get current time
    t = instrPracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }

    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['right', 'left', 'return', 'num_enter'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *blue_mushroom* updates
    if (t >= 0.0 && blue_mushroom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_mushroom.tStart = t;  // (not accounting for frame time here)
      blue_mushroom.frameNStart = frameN;  // exact frame index
      
      blue_mushroom.setAutoDraw(true);
    }

    
    // *red_mushroom* updates
    if (t >= 0.0 && red_mushroom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_mushroom.tStart = t;  // (not accounting for frame time here)
      red_mushroom.frameNStart = frameN;  // exact frame index
      
      red_mushroom.setAutoDraw(true);
    }

    
    // *progress_bar_fixed_2* updates
    if (t >= 0.0 && progress_bar_fixed_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_fixed_2.tStart = t;  // (not accounting for frame time here)
      progress_bar_fixed_2.frameNStart = frameN;  // exact frame index
      
      progress_bar_fixed_2.setAutoDraw(true);
    }

    
    // *progress_bar_2* updates
    if (t >= 0.0 && progress_bar_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_2.tStart = t;  // (not accounting for frame time here)
      progress_bar_2.frameNStart = frameN;  // exact frame index
      
      progress_bar_2.setAutoDraw(true);
    }

    
    // *progress_IC_2* updates
    if (t >= 0.0 && progress_IC_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_IC_2.tStart = t;  // (not accounting for frame time here)
      progress_IC_2.frameNStart = frameN;  // exact frame index
      
      progress_IC_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrPracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var trial_index;
function instrPracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instrPrac'-------
    instrPracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    response.stop();
    if ((((response.keys === "return") || (response.keys === "num_enter")) && (Number.parseInt(currentPr) === 8))) {
        currentPr = (Number.parseInt(currentPr) + 1);
    } else {
        if (((response.keys === "right") && (Number.parseInt(currentPr) === 8))) {
            currentPr = Number.parseInt(currentPr);
        } else {
            if (((response.keys === "right") && (Number.parseInt(currentPr) !== 8))) {
                currentPr = (Number.parseInt(currentPr) + 1);
            } else {
                if ((response.keys === "left")) {
                    currentPr = (Number.parseInt(currentPr) - 1);
                }
            }
        }
    }
    if ((currentPr === 0)) {
        currentPr = 1;
    } else {
        if ((currentPr === 9)) {
            loop_instrPrac.finished = true;
        }
    }
    currentPr = currentPr.toString();
    trial_index = 0;
    // the Routine "instrPrac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _response_3_allKeys;
var instrPrac2Components;
function instrPrac2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instrPrac2'-------
    t = 0;
    instrPrac2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    response_3.keys = undefined;
    response_3.rt = undefined;
    _response_3_allKeys = [];
    // only run if phase is 2
    if (practice_phase !== 2) {
        loop_instrPrac2.finished = true;
        continueRoutine = false;
    }
    
    event.clearEvents();
    
    progress_bar_size = (window_x * 2 / 18) * (Number.parseInt(currentPr2) + 8);
    progress_bar_pos = (- window_x) + (window_x * 2 / 18) * (Number.parseInt(currentPr2) + 8) / 2;
    progress_text = (("Instructions: " + (Number.parseInt(currentPr2)+8).toString()) + "/18");
    
    
    text_7.setText(Pr2Dict[currentPr2]);
    blue_mushroom_6.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_6.setPos([(window_x - 0.2), (- 0.4)]);
    progress_bar_fixed_5.setPos([0, 0.48]);
    progress_bar_fixed_5.setSize([(window_x * 2), 0.03]);
    progress_bar_5.setPos([progress_bar_pos, 0.48]);
    progress_bar_5.setSize([progress_bar_size, 0.03]);
    progress_IC_5.setText(progress_text);
    // keep track of which components have finished
    instrPrac2Components = [];
    instrPrac2Components.push(response_3);
    instrPrac2Components.push(text_7);
    instrPrac2Components.push(blue_mushroom_6);
    instrPrac2Components.push(red_mushroom_6);
    instrPrac2Components.push(progress_bar_fixed_5);
    instrPrac2Components.push(progress_bar_5);
    instrPrac2Components.push(progress_IC_5);
    instrPrac2Components.push(screenshot1);
    instrPrac2Components.push(screenshot2);
    
    instrPrac2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrPrac2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instrPrac2'-------
    // get current time
    t = instrPrac2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response_3* updates
    if (t >= 0.0 && response_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_3.tStart = t;  // (not accounting for frame time here)
      response_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_3.clearEvents(); });
    }

    if (response_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_3.getKeys({keyList: ['right', 'left', 'return', 'num_enter'], waitRelease: false});
      _response_3_allKeys = _response_3_allKeys.concat(theseKeys);
      if (_response_3_allKeys.length > 0) {
        response_3.keys = _response_3_allKeys[_response_3_allKeys.length - 1].name;  // just the last key pressed
        response_3.rt = _response_3_allKeys[_response_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *blue_mushroom_6* updates
    if (t >= 0.0 && blue_mushroom_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_mushroom_6.tStart = t;  // (not accounting for frame time here)
      blue_mushroom_6.frameNStart = frameN;  // exact frame index
      
      blue_mushroom_6.setAutoDraw(true);
    }

    
    // *red_mushroom_6* updates
    if (t >= 0.0 && red_mushroom_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_mushroom_6.tStart = t;  // (not accounting for frame time here)
      red_mushroom_6.frameNStart = frameN;  // exact frame index
      
      red_mushroom_6.setAutoDraw(true);
    }

    
    // *progress_bar_fixed_5* updates
    if (t >= 0.0 && progress_bar_fixed_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_fixed_5.tStart = t;  // (not accounting for frame time here)
      progress_bar_fixed_5.frameNStart = frameN;  // exact frame index
      
      progress_bar_fixed_5.setAutoDraw(true);
    }

    
    // *progress_bar_5* updates
    if (t >= 0.0 && progress_bar_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_5.tStart = t;  // (not accounting for frame time here)
      progress_bar_5.frameNStart = frameN;  // exact frame index
      
      progress_bar_5.setAutoDraw(true);
    }

    
    // *progress_IC_5* updates
    if (t >= 0.0 && progress_IC_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_IC_5.tStart = t;  // (not accounting for frame time here)
      progress_IC_5.frameNStart = frameN;  // exact frame index
      
      progress_IC_5.setAutoDraw(true);
    }

    
    // *screenshot1* updates
    if ((currentPr2 == 4) && screenshot1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      screenshot1.tStart = t;  // (not accounting for frame time here)
      screenshot1.frameNStart = frameN;  // exact frame index
      
      screenshot1.setAutoDraw(true);
    }

    
    // *screenshot2* updates
    if ((currentPr2 == 5) && screenshot2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      screenshot2.tStart = t;  // (not accounting for frame time here)
      screenshot2.frameNStart = frameN;  // exact frame index
      
      screenshot2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrPrac2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrPrac2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instrPrac2'-------
    instrPrac2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    response_3.stop();
    if ((((response_3.keys === "return") || (response_3.keys === "num_enter")) && (Number.parseInt(currentPr2) === 6))) {
        currentPr2 = (Number.parseInt(currentPr2) + 1);
    } else {
        if (((response_3.keys === "right") && (Number.parseInt(currentPr2) === 6))) {
            currentPr2 = Number.parseInt(currentPr2);
        } else {
            if (((response_3.keys === "right") && (Number.parseInt(currentPr2) !== 6))) {
                currentPr2 = (Number.parseInt(currentPr2) + 1);
            } else {
                if ((response_3.keys === "left")) {
                    currentPr2 = (Number.parseInt(currentPr2) - 1);
                }
            }
        }
    }
    if ((currentPr2 === 0)) {
        currentPr2 = 1;
    } else {
        if ((currentPr2 === 7)) {
            loop_instrPrac2.finished = true;
        }
    }
    currentPr2 = currentPr2.toString();
    trial_index = 0;
    // the Routine "instrPrac2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_parameters;
var thisIndex;
var nTotal;
var true_ratio;
var given_ratio;
var filler_trial;
var nSamples;
var nObservations;
var nLeft;
var nBlue;
var seen_ratio;
var nRed;
var itemList;
var start;
var blue;
var red;
var setupSamplesComponents;
function setupSamplesRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'setupSamples'-------
    t = 0;
    setupSamplesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    
    if (startGame === 0) {
        trials_parameters = loop_prTrials;
        loop_prTrials._autoLog = false;
    } else if (startGame === 1) {
        trials_parameters = loop_trials;
        loop_trials._autoLog = false;
    }
    
    thisIndex = trials_parameters._snapshots[trial_index]["thisIndex"];
    nTotal = trials_parameters._trialList[thisIndex]["nTotal"];
    true_ratio = trials_parameters._trialList[thisIndex]["trueRatio"];
    given_ratio = trials_parameters._trialList[thisIndex]["trueRatio"];
    filler_trial = trials_parameters._trialList[thisIndex]["fillerTrial"];
    
    nSamples = 5;
    
    // create matrix that specifies the number of observations per sample
    nObservations = function () {
        var _pj_a = [], _pj_b = range(nSamples, 0);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var iSample = _pj_b[_pj_c];
            _pj_a.push(0);
        }
        return _pj_a;
    }
    .call(this);
    
    nLeft = nTotal;
    for (var iSample = 1, _pj_a = (nSamples + 1); (iSample < _pj_a); iSample += 1) {
        var xmin = ((- 1) * (((nSamples - iSample) * 9) - nLeft));
        xmin = Math.max(1, xmin);
        var xmax = ((- 1) * (((nSamples - iSample) * 1) - nLeft));
        xmax = Math.min(9, xmax);
        var x = randint(xmin, xmax + 1);
        nLeft = (nLeft - x);
        nObservations[(iSample - 1)] = x;
    }
    
    
    // Now create the randomized list with the actual observations to show
    nBlue = round((given_ratio * nTotal));
    seen_ratio = nBlue / nTotal;
    nRed = (nTotal - nBlue);
    itemList = ["blue", "red"];
    
    var repeat = (values, counts) => values.flatMap((v, i) => Array(counts[i]).fill(v)),
        itemList = repeat(itemList,[nBlue, nRed])
    shuffle(itemList);
    
    // Based on the shuffled list with 'red' and 'blue', define how many red's and blue's are in each sample.
    start = 0;
    blue = function () {
        var _pj_a = [], _pj_b = range(nSamples);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var iSample = _pj_b[_pj_c];
            _pj_a.push(0);
        }
        return _pj_a;
    }
    .call(this);
    
    red = function () {
        var _pj_a = [], _pj_b = range(nSamples);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var iSample = _pj_b[_pj_c];
            _pj_a.push(0);
        }
        return _pj_a;
    }
    .call(this);
    for (var iSample = 0, _pj_a = nSamples; (iSample < _pj_a); iSample += 1) {
        blue[iSample] = itemList.slice(start, (start + nObservations[iSample])).filter(element  => element == "blue").length
        red[iSample] = itemList.slice(start, (start + nObservations[iSample])).filter(element  => element == "red").length
        start = (start + nObservations[iSample]);
    }
    
    
    
    // keep track of which components have finished
    setupSamplesComponents = [];
    
    setupSamplesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setupSamplesRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'setupSamples'-------
    // get current time
    t = setupSamplesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setupSamplesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var sample_index;
function setupSamplesRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'setupSamples'-------
    setupSamplesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sample_index = 0;
    
    // the Routine "setupSamples" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var crosshair_ITI;
var crossHairComponents;
function crossHairRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'crossHair'-------
    t = 0;
    crossHairClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    crosshair_ITI = Math.floor(((Math.random() * (2.1 - 1.5)) + 1.5)* 10) / 10;
    document.body.style.cursor='none';
    // keep track of which components have finished
    crossHairComponents = [];
    crossHairComponents.push(cross_hair);
    
    crossHairComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function crossHairRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'crossHair'-------
    // get current time
    t = crossHairClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross_hair* updates
    if (t >= 0.0 && cross_hair.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_hair.tStart = t;  // (not accounting for frame time here)
      cross_hair.frameNStart = frameN;  // exact frame index
      
      cross_hair.setAutoDraw(true);
    }

    frameRemains = 0.0 + crosshair_ITI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross_hair.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_hair.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    crossHairComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function crossHairRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'crossHair'-------
    crossHairComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    
    
    // the Routine "crossHair" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var S;
var ok;
var red_mushrooms;
var blue_mushrooms;
var mushroomSampleComponents;
function mushroomSampleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'mushroomSample'-------
    t = 0;
    mushroomSampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.200000);
    // update component parameters for each repeat
    S = ["blue", "red"];
    var repeat = (values, counts) => values.flatMap((v, i) => Array(counts[i]).fill(v)),
        S = repeat(S,[blue[sample_index], red[sample_index]])
    
    ok = 0;
    while ((ok === 0)) {
        var coor_x = [];
        while(coor_x.length < nObservations[sample_index]){
            var r =((Math.random() * (aperture_size - (- aperture_size))) + (- aperture_size));
            if(coor_x.indexOf(r) === -1) coor_x.push(r);
        }
        var coor_y = [];
        while(coor_y.length < nObservations[sample_index]){
            var r =((Math.random() * (aperture_size - (- aperture_size))) + (- aperture_size));
            if(coor_y.indexOf(r) === -1) coor_y.push(r);
        }
        var diff_x = allAbsDifferences(coor_x, coor_x.length);
        var diff_y = allAbsDifferences(coor_y, coor_y.length);
        var match;
        var tooClose_xy = [];
        for(var el = 0; el < diff_x.length; el++) {
            match = 0;
            if (diff_x[el] <= (mushroom_size * 0.9) && diff_y[el] <= (mushroom_size * 0.9)) {
                match = 1;
            }
            tooClose_xy.push(match);
        }
        if (tooClose_xy.every(x => x == 0)) {
            ok = 1;
        }
    }
    
    if ((red[sample_index] > 0)) {
        red_mushrooms = function () {
        var _pj_a = [], _pj_b = range(red[sample_index]);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(new visual.ImageStim({
                win: psychoJS.window, 
                name: "red_mushrooms", image: "red_mushroom.png", 
                pos: [coor_x[i], coor_y[i]], size: [mushroom_size, mushroom_size], 
                }));
        }
        return _pj_a;
        }
        red_mushrooms = red_mushrooms();
        for (var i, _pj_c = 0, _pj_a = red_mushrooms, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            i.setAutoDraw(true);
        }
    }
    
    
    if ((blue[sample_index] > 0)) {
        blue_mushrooms = function () {
        var _pj_a = [], _pj_b = range(blue[sample_index], red[sample_index]);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(new visual.ImageStim({
                win: psychoJS.window, 
                name: "blue_mushrooms", image: "blue_mushroom.png", 
                pos: [coor_x[i], coor_y[i]], size: [mushroom_size, mushroom_size], 
                }));
        }
        return _pj_a;
        }
        blue_mushrooms = blue_mushrooms();
        for (var i, _pj_c = 0, _pj_a = blue_mushrooms, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            i.draw();
        }
    }
    
    
    
    // keep track of which components have finished
    mushroomSampleComponents = [];
    mushroomSampleComponents.push(text_2);
    
    mushroomSampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function mushroomSampleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'mushroomSample'-------
    // get current time
    t = mushroomSampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    mushroomSampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mushroomSampleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'mushroomSample'-------
    mushroomSampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((red[sample_index] > 0)) {
        for (var i, _pj_c = 0, _pj_a = red_mushrooms, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            i.setAutoDraw(false);
        }
    }
    if ((blue[sample_index] > 0)) {
        for (var i, _pj_c = 0, _pj_a = blue_mushrooms, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            i.setAutoDraw(false);
        }
    }
    
    sample_index = (sample_index + 1);
    return Scheduler.Event.NEXT;
  };
}


var ISIComponents;
function ISIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ISI'-------
    t = 0;
    ISIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(isi);
    
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ISI'-------
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *isi* updates
    if (t >= 0.0 && isi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi.tStart = t;  // (not accounting for frame time here)
      isi.frameNStart = frameN;  // exact frame index
      
      isi.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ISI'-------
    ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var sliderfont;
var tooLate;
var firstEstimationComponents;
function firstEstimationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'firstEstimation'-------
    t = 0;
    firstEstimationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    event.clearEvents();
    document.body.style.cursor='auto';
    
    //estimation_slider_1.markerPos = 50; // in slider units
    //markerPosition_1 = 0; // in height units
    //blueRectangle_1_pos = -0.125;
    //blueRectangle_1_size = 0.25;
    //show_estimate_1_text = " ";
    
    
    //estimation_slider_1._opacity = 0;
    sliderfont = "Helvetica";
    
    
    //textbox parameters
    estimate1_textbox._multiline = false;
    estimate1_textbox._needPixiUpdate = true; // autofocus
    estimate1_textbox._needUpdate = true; // autofocus at repeat
    
    tooLate = 0;
    
    estimate1_textbox.setText(' ');
    // keep track of which components have finished
    firstEstimationComponents = [];
    firstEstimationComponents.push(how_many_mushrooms);
    firstEstimationComponents.push(your_estimate);
    firstEstimationComponents.push(estimate1_textbox);
    firstEstimationComponents.push(text_invalid_input);
    firstEstimationComponents.push(space_to_submit_estimation);
    
    firstEstimationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var invalid;
var invalid_input;
var pressENTER;
var estimate1;
var estimate1_rt;
function firstEstimationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'firstEstimation'-------
    // get current time
    t = firstEstimationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    
    // check if participant is too late
    if (t > 10){
        if (startGame===1){
            n_tooLate = n_tooLate + 1;
        }
        tooLate = 1;
        continueRoutine = false;
    }
    
    
    // check if estimate is within 1-100
    invalid = false;
    invalid_input = "";
    if (((estimate1_textbox.text.length > 0) && (estimate1_textbox.text !== " "))) {
        if ((isNaN(Number.parseInt(estimate1_textbox.text)))) {
            invalid = true;
            invalid_input = "*invalid input\n(needs to be numerical with range 1-100)";
        }
        if ((invalid === false)) {
            if (((Number.parseInt(estimate1_textbox.text) < 0) || (Number.parseInt(estimate1_textbox.text) > 100))) {
                invalid = true;
                invalid_input = "*invalid input\n(needs to be numerical with range 1-100)";
            }
        }
    }
    
    
    // check if rating has been completed:
    pressENTER = "";
    if ((((estimate1_textbox.text.length > 0) && (estimate1_textbox.text !== " ")) && (invalid === false))) {
        pressENTER = "Press ENTER to submit your decision";
        if (_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys)){
            estimate1 = Number.parseInt(estimate1_textbox.text);
            estimate1_rt = t;
            continueRoutine = false;
        }
    }
    
    
    // CODE WHEN USING ACTUAL SLIDER
    // move slider along with response
    //markerPos_1 = -1
    //if ((estimation_slider_1.markerPos !== undefined)) {
    //    markerPos_1 = estimation_slider_1.markerPos; 
    //    markerPosition_1 = (markerPos_1 - 50) / 200;
    //    blueRectangle_1_pos = ((- 0.25) + ((markerPos_1 / 200) / 2));
    //    blueRectangle_1_size = markerPos_1 / 200;
    //    show_estimate_1_text = Number.parseInt(markerPosition_1*200+50);
    //}
    
    
    //rating_completed = 0;
    //if ((estimation_slider_1.getRating() !== undefined)) {
    //    rating_completed = 1;
    //}
    //if (((_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys)) && (rating_completed === 1))) {
    //    estimation_slider_1.markerPos = undefined; 
    //    markerPosition_1 = 0;
    //    show_estimate_1_text = " ";
    //    blueRectangle_1_pos = - 0.125;
    //    blueRectangle_1_size = 0.25;
    //    continueRoutine = false;
    //}
    
    
    
    
    
    
    
    
    
    
    
    
    
    // *how_many_mushrooms* updates
    if (t >= 0.0 && how_many_mushrooms.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      how_many_mushrooms.tStart = t;  // (not accounting for frame time here)
      how_many_mushrooms.frameNStart = frameN;  // exact frame index
      
      how_many_mushrooms.setAutoDraw(true);
    }

    
    // *your_estimate* updates
    if (t >= 0.0 && your_estimate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      your_estimate.tStart = t;  // (not accounting for frame time here)
      your_estimate.frameNStart = frameN;  // exact frame index
      
      your_estimate.setAutoDraw(true);
    }

    
    // *estimate1_textbox* updates
    if (t >= 0.0 && estimate1_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      estimate1_textbox.tStart = t;  // (not accounting for frame time here)
      estimate1_textbox.frameNStart = frameN;  // exact frame index
      
      estimate1_textbox.setAutoDraw(true);
    }

    
    // *text_invalid_input* updates
    if (t >= 0.0 && text_invalid_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_invalid_input.tStart = t;  // (not accounting for frame time here)
      text_invalid_input.frameNStart = frameN;  // exact frame index
      
      text_invalid_input.setAutoDraw(true);
    }

    
    if (text_invalid_input.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_invalid_input.setText(invalid_input, false);
    }
    
    // *space_to_submit_estimation* updates
    if (t >= 0.0 && space_to_submit_estimation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_to_submit_estimation.tStart = t;  // (not accounting for frame time here)
      space_to_submit_estimation.frameNStart = frameN;  // exact frame index
      
      space_to_submit_estimation.setAutoDraw(true);
    }

    
    if (space_to_submit_estimation.status === PsychoJS.Status.STARTED){ // only update if being drawn
      space_to_submit_estimation.setText(pressENTER, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    firstEstimationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var deviance;
var abs_deviance;
function firstEstimationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'firstEstimation'-------
    firstEstimationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (tooLate === 0){
        deviance = estimate1 - true_ratio * 100;
        abs_deviance = Math.abs(deviance);
    }
    
    if ((startGame === 1)) {
        psychoJS.experiment.addData("cross_hair.ITI", crosshair_ITI);
        psychoJS.experiment.addData("seen_ratio", seen_ratio);
        psychoJS.experiment.addData("nMushrooms", String(nObservations));
        psychoJS.experiment.addData("nBlue", String(blue));
        psychoJS.experiment.addData("nRed", String(red));
        if (tooLate === 0){
            list_deviance.push(abs_deviance);
            psychoJS.experiment.addData("estimation1.rating", estimate1);
            psychoJS.experiment.addData("estimation1.rt", estimate1_rt);
        }
    }
    
    psychoJS.experiment.addData('estimate1_textbox.text',estimate1_textbox.text)
    estimate1_textbox.reset()
    // the Routine "firstEstimation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var confidence_level;
var filtered_SI;
var delta;
var close_far;
var filtered_SI2;
var filler_index;
var random_index;
var peer_estimate;
var peers_confidence_image;
var markerPos_peer;
var markerPosition_peer;
var blueRectangle_peer_pos;
var blueRectangle_peer_size;
var show_estimate_peer_text;
var markerPos_2;
var markerPosition_2;
var blueRectangle_2_pos;
var blueRectangle_2_size;
var show_estimate1_text;
var SIComponents;
function SIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'SI'-------
    t = 0;
    SIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // only run if phase is 2
    if (practice_phase !== 2) {
        continueRoutine = false;
    }
    
    // do not run if participant was too late at first estimation
    if (tooLate === 1){
        continueRoutine = false;
        estimate1 = 100; // set random estimate so program doesnt crash
    }
    
    event.clearEvents();
    document.body.style.cursor='auto';
    
    
    // retrieve confidence level to use in this trial, based on current nTotal and ratio
    if (startGame === 0) {
        if (trial_index === 0) {
            confidence_level = 1;
        } else if (trial_index === 1) {
            confidence_level = 2;
        } else {
            confidence_level = 3;
        }
        filtered_SI = wave1.filter(trial => trial['true_ratio']===true_ratio && trial['confidence']===confidence_level);
    } else {
        if (filler_trial === 0) {
            var confidence_index = nTotal_ratio_confidence.findIndex(
                element => element.nTotal === nTotal && element.ratio === true_ratio
            );
            confidence_level = nTotal_ratio_confidence[confidence_index]["confidence"];
            // remove that index from dataframe, so it won't be used next time
            nTotal_ratio_confidence.splice(confidence_index, 1); // remove 1 element starting at pos i
            // filter wave1 data / social information based on current ratio and confidence level of peer to use
            filtered_SI = wave1.filter(trial => trial['true_ratio']===true_ratio && trial['confidence']===confidence_level);
        } else if (filler_trial === 1) {
            // filter wave1 data / social information based on current ratio only
            filtered_SI = wave1.filter(trial => trial['true_ratio']===true_ratio);
            if (true_ratio === 0 || true_ratio === 1){
                confidence_level = 3; // makes more sense if peer is very confident in those obvious trials
                filtered_SI = wave1.filter(trial => trial['true_ratio']===true_ratio && trial['confidence']===confidence_level);
            }
        }
    }
    
    
    
    // pick SI for which estimate is 15-18 percentage points in direction of true ratio. 
    delta = Number.parseInt((estimate1 - (true_ratio * 100)));
    if (filler_trial === 1) {  // pick a peer estimate that is either super close or super far, in any direction
        close_far = SI_fillers[0]; // pick first element of shuffled list
        if (true_ratio === 0 || true_ratio === 1){
            close_far = 3; // otherwise not very believable
        }
        if (close_far === 3) {
            filtered_SI2 = filtered_SI.filter((trial) =>
            (trial['estimate'] > estimate1 - 3) && (trial['estimate'] < estimate1 + 3)
            );
            if (filtered_SI2.length === 0) {
                close_far = 40; 
            }
        }
        if (close_far === 40) {
            filtered_SI2 = filtered_SI.filter((trial) =>
            (trial['estimate'] > estimate1 + 40) || (trial['estimate'] < estimate1 - 40)
            );
            confidence_level = 1; // if difference between participant and peer is very large, it makes more sense to set peer confidence to 1. 
        }
        filler_index = SI_fillers.findIndex(element => element === close_far);
        SI_fillers.splice(filler_index, 1); // remove used element from list
    } else if (delta > 0) {
        if (estimate1 < 15) {
            filtered_SI2 = filtered_SI.filter((trial) => trial['estimate'] === 0);
        } else {
            filtered_SI2 = filtered_SI.filter((trial) => 
            (trial['estimate'] > estimate1 - 19) && (trial['estimate'] < estimate1 - 14)
            );
        }
    } else if (delta < 0) {
        if (estimate1 > 85) {
            filtered_SI2 = filtered_SI.filter((trial) => trial['estimate'] === 100);
        } else {
            filtered_SI2 = filtered_SI.filter((trial) => 
            (trial['estimate'] > estimate1 + 14) && (trial['estimate'] < estimate1 + 19)
            );
        }
    } else if (delta === 0) { // any direction
        filtered_SI2 = filtered_SI.filter((trial) =>
        ((trial['estimate'] > estimate1 - 19) && (trial['estimate'] < estimate1 - 14)) ||
        ((trial['estimate'] > estimate1 + 14) && (trial['estimate'] < estimate1 + 19))
        );
    } 
    
    // if no suitable SI could be found, just include all SI
    if (filtered_SI2.length === 0) {
        filtered_SI2 = filtered_SI;
    }
    
    
    // now randomly choose a peer estimate from filtered list
    random_index = Math.floor(Math.random() * filtered_SI2.length);
    peer_estimate = filtered_SI2[random_index]['estimate'];
    if (typeof(confidence_level) === "undefined") {
        confidence_level = filtered_SI2[random_index]['confidence'];
    }
    
    
    // define image to show about peers estimate
    if (confidence_level === 1) {
        peers_confidence_image = "low_peerConfidence.png";
    } else if (confidence_level === 2) {
        peers_confidence_image = "medium_peerConfidence.png";
    } else if (confidence_level === 3) {
        peers_confidence_image = "high_peerConfidence.png";
    }
    
    
    // parameters for peer estimate bar
    markerPos_peer = peer_estimate; 
    markerPosition_peer = (markerPos_peer - 50) / 200; // in height units
    blueRectangle_peer_pos = ((- 0.25) + ((markerPos_peer / 200) / 2));
    blueRectangle_peer_size = markerPos_peer / 200;
    show_estimate_peer_text = Number.parseInt(markerPosition_peer*200+50);
    
    // do not run if participant was too late at first estimation
    if (tooLate === 1){
        continueRoutine = false;
    }
    
    event.clearEvents();
    document.body.style.cursor='auto';
    
    
    //estimation_slider_2.markerPos = estimation_slider_1.getRating(); // in slider units
    markerPos_2 = estimate1;
    markerPosition_2 = (markerPos_2 - 50) / 200; // in height units
    blueRectangle_2_pos = ((- 0.25) + ((markerPos_2 / 200) / 2));
    blueRectangle_2_size = markerPos_2 / 200;
    show_estimate1_text = Number.parseInt(markerPosition_2*200+50);
    
    
    //estimation_slider_2._opacity = 0;
    sliderfont = "Helvetica";
    
    //your_estimate1_text = ("Your part A decision was " + markerPos_2);
    
    
    //textbox parameters
    estimate2_textbox._multiline = false;
    estimate2_textbox._needPixiUpdate = true; // autofocus
    estimate2_textbox._needUpdate = true; // autofocus at repeat
    
    peer_confidence_rating.setImage(peers_confidence_image);
    blue_box_peer.setPos([(markerPosition_peer + 0.18), 0.2]);
    showEstimate_peer.setPos([(markerPosition_peer + 0.18), 0.2]);
    showEstimate_peer.setText(show_estimate_peer_text);
    showEstimate_peer.setFont(sliderfont);
    blue_rectangle_peer.setPos([(blueRectangle_peer_pos + 0.18), 0.15]);
    blue_rectangle_peer.setSize([blueRectangle_peer_size, 0.04]);
    sliderMarker_peer.setPos([(markerPosition_peer + 0.18), 0.15]);
    slider_text0_peer.setFont(sliderfont);
    slider_text100_peer.setFont(sliderfont);
    blue_box_2.setPos([(markerPosition_2 + 0.18), 0]);
    showEstimate_2.setPos([(markerPosition_2 + 0.18), 0]);
    showEstimate_2.setText(show_estimate1_text);
    showEstimate_2.setFont(sliderfont);
    blue_rectangle_2.setPos([(blueRectangle_2_pos + 0.18), (- 0.05)]);
    blue_rectangle_2.setSize([blueRectangle_2_size, 0.04]);
    sliderMarker_2.setPos([(markerPosition_2 + 0.18), (- 0.05)]);
    slider_text0_2.setFont(sliderfont);
    slider_text100_2.setFont(sliderfont);
    estimate2_textbox.setText(' ');
    // keep track of which components have finished
    SIComponents = [];
    SIComponents.push(how_many_mushrooms_2);
    SIComponents.push(peer_confidence_rating);
    SIComponents.push(peers_estimate);
    SIComponents.push(blue_box_peer);
    SIComponents.push(showEstimate_peer);
    SIComponents.push(red_rectangle_peer);
    SIComponents.push(blue_rectangle_peer);
    SIComponents.push(sliderMarker_peer);
    SIComponents.push(slider_text0_peer);
    SIComponents.push(slider_text100_peer);
    SIComponents.push(your_estimate_1);
    SIComponents.push(blue_box_2);
    SIComponents.push(showEstimate_2);
    SIComponents.push(red_rectangle_2);
    SIComponents.push(blue_rectangle_2);
    SIComponents.push(sliderMarker_2);
    SIComponents.push(slider_text0_2);
    SIComponents.push(slider_text100_2);
    SIComponents.push(your_estimate_2);
    SIComponents.push(estimate2_textbox);
    SIComponents.push(text_invalid_input_2);
    SIComponents.push(space_to_submit_estimation_2);
    
    SIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var estimate2;
var estimate2_rt;
function SIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'SI'-------
    // get current time
    t = SIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    
    // check if participant is too late
    if (t > 12){
        if (startGame===1){
            n_tooLate = n_tooLate + 1;
        }
        tooLate = 1;
        continueRoutine = false;
    }
    
    
    // check if estimate is within 1-100
    invalid = false;
    invalid_input = "";
    if (((estimate2_textbox.text.length > 0) && (estimate2_textbox.text !== " "))) {
        if ((isNaN(Number.parseInt(estimate2_textbox.text)))) {
            invalid = true;
            invalid_input = "*invalid input\n(needs to be numerical with range 1-100)";
        }
        if ((invalid === false)) {
            if (((Number.parseInt(estimate2_textbox.text) < 0) || (Number.parseInt(estimate2_textbox.text) > 100))) {
                invalid = true;
                invalid_input = "*invalid input\n(needs to be numerical with range 1-100)";
            }
        }
    }
    
    
    // check if rating has been completed:
    pressENTER = "";
    if ((((estimate2_textbox.text.length > 0) && (estimate2_textbox.text !== " ")) && (invalid === false))) {
        pressENTER = "Press ENTER to submit your decision";
        if (_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys)){
            estimate2 = Number.parseInt(estimate2_textbox.text);
            estimate2_rt = t-2;
            continueRoutine = false;
        }
    }
    
    
    
    // WHEN ACTUAL SLIDER
    //if ((estimation_slider_2.markerPos !== undefined)) {
    //    markerPos_2 = estimation_slider_2.markerPos; 
    //    markerPosition_2 = (markerPos_2 - 50) / 200;
    //    blueRectangle_2_pos = ((- 0.25) + ((markerPos_2 / 200) / 2));
    //    blueRectangle_2_size = markerPos_2 / 200;
    //    show_estimate_2_text = Number.parseInt(markerPosition_2*200+50);
    //}
    
    
    //rating_completed = 0;
    //if ((estimation_slider_2.getRating() !== undefined)) {
    //    rating_completed = 1;
    //}
    
    //if (((_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys)) && (rating_completed === 1))) {
    //    continueRoutine = false;
    //}
    
    
    
    
    
    
    
    // *how_many_mushrooms_2* updates
    if (t >= 0.0 && how_many_mushrooms_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      how_many_mushrooms_2.tStart = t;  // (not accounting for frame time here)
      how_many_mushrooms_2.frameNStart = frameN;  // exact frame index
      
      how_many_mushrooms_2.setAutoDraw(true);
    }

    
    // *peer_confidence_rating* updates
    if (t >= 0.0 && peer_confidence_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      peer_confidence_rating.tStart = t;  // (not accounting for frame time here)
      peer_confidence_rating.frameNStart = frameN;  // exact frame index
      
      peer_confidence_rating.setAutoDraw(true);
    }

    
    // *peers_estimate* updates
    if (t >= 2.0 && peers_estimate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      peers_estimate.tStart = t;  // (not accounting for frame time here)
      peers_estimate.frameNStart = frameN;  // exact frame index
      
      peers_estimate.setAutoDraw(true);
    }

    
    // *blue_box_peer* updates
    if (t >= 2.0 && blue_box_peer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_box_peer.tStart = t;  // (not accounting for frame time here)
      blue_box_peer.frameNStart = frameN;  // exact frame index
      
      blue_box_peer.setAutoDraw(true);
    }

    
    // *showEstimate_peer* updates
    if (t >= 2.0 && showEstimate_peer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      showEstimate_peer.tStart = t;  // (not accounting for frame time here)
      showEstimate_peer.frameNStart = frameN;  // exact frame index
      
      showEstimate_peer.setAutoDraw(true);
    }

    
    // *red_rectangle_peer* updates
    if (t >= 2.0 && red_rectangle_peer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_rectangle_peer.tStart = t;  // (not accounting for frame time here)
      red_rectangle_peer.frameNStart = frameN;  // exact frame index
      
      red_rectangle_peer.setAutoDraw(true);
    }

    
    // *blue_rectangle_peer* updates
    if (t >= 2.0 && blue_rectangle_peer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_rectangle_peer.tStart = t;  // (not accounting for frame time here)
      blue_rectangle_peer.frameNStart = frameN;  // exact frame index
      
      blue_rectangle_peer.setAutoDraw(true);
    }

    
    // *sliderMarker_peer* updates
    if (t >= 2.0 && sliderMarker_peer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderMarker_peer.tStart = t;  // (not accounting for frame time here)
      sliderMarker_peer.frameNStart = frameN;  // exact frame index
      
      sliderMarker_peer.setAutoDraw(true);
    }

    
    // *slider_text0_peer* updates
    if (t >= 2.0 && slider_text0_peer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_text0_peer.tStart = t;  // (not accounting for frame time here)
      slider_text0_peer.frameNStart = frameN;  // exact frame index
      
      slider_text0_peer.setAutoDraw(true);
    }

    
    // *slider_text100_peer* updates
    if (t >= 2.0 && slider_text100_peer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_text100_peer.tStart = t;  // (not accounting for frame time here)
      slider_text100_peer.frameNStart = frameN;  // exact frame index
      
      slider_text100_peer.setAutoDraw(true);
    }

    
    // *your_estimate_1* updates
    if (t >= 2.0 && your_estimate_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      your_estimate_1.tStart = t;  // (not accounting for frame time here)
      your_estimate_1.frameNStart = frameN;  // exact frame index
      
      your_estimate_1.setAutoDraw(true);
    }

    
    // *blue_box_2* updates
    if (t >= 2.0 && blue_box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_box_2.tStart = t;  // (not accounting for frame time here)
      blue_box_2.frameNStart = frameN;  // exact frame index
      
      blue_box_2.setAutoDraw(true);
    }

    
    // *showEstimate_2* updates
    if (t >= 2.0 && showEstimate_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      showEstimate_2.tStart = t;  // (not accounting for frame time here)
      showEstimate_2.frameNStart = frameN;  // exact frame index
      
      showEstimate_2.setAutoDraw(true);
    }

    
    // *red_rectangle_2* updates
    if (t >= 2.0 && red_rectangle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_rectangle_2.tStart = t;  // (not accounting for frame time here)
      red_rectangle_2.frameNStart = frameN;  // exact frame index
      
      red_rectangle_2.setAutoDraw(true);
    }

    
    // *blue_rectangle_2* updates
    if (t >= 2.0 && blue_rectangle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_rectangle_2.tStart = t;  // (not accounting for frame time here)
      blue_rectangle_2.frameNStart = frameN;  // exact frame index
      
      blue_rectangle_2.setAutoDraw(true);
    }

    
    // *sliderMarker_2* updates
    if (t >= 2.0 && sliderMarker_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderMarker_2.tStart = t;  // (not accounting for frame time here)
      sliderMarker_2.frameNStart = frameN;  // exact frame index
      
      sliderMarker_2.setAutoDraw(true);
    }

    
    // *slider_text0_2* updates
    if (t >= 2.0 && slider_text0_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_text0_2.tStart = t;  // (not accounting for frame time here)
      slider_text0_2.frameNStart = frameN;  // exact frame index
      
      slider_text0_2.setAutoDraw(true);
    }

    
    // *slider_text100_2* updates
    if (t >= 2.0 && slider_text100_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_text100_2.tStart = t;  // (not accounting for frame time here)
      slider_text100_2.frameNStart = frameN;  // exact frame index
      
      slider_text100_2.setAutoDraw(true);
    }

    
    // *your_estimate_2* updates
    if (t >= 2.0 && your_estimate_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      your_estimate_2.tStart = t;  // (not accounting for frame time here)
      your_estimate_2.frameNStart = frameN;  // exact frame index
      
      your_estimate_2.setAutoDraw(true);
    }

    
    // *estimate2_textbox* updates
    if (t >= 2.0 && estimate2_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      estimate2_textbox.tStart = t;  // (not accounting for frame time here)
      estimate2_textbox.frameNStart = frameN;  // exact frame index
      
      estimate2_textbox.setAutoDraw(true);
    }

    
    // *text_invalid_input_2* updates
    if (t >= 0.0 && text_invalid_input_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_invalid_input_2.tStart = t;  // (not accounting for frame time here)
      text_invalid_input_2.frameNStart = frameN;  // exact frame index
      
      text_invalid_input_2.setAutoDraw(true);
    }

    
    if (text_invalid_input_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_invalid_input_2.setText(invalid_input, false);
    }
    
    // *space_to_submit_estimation_2* updates
    if (t >= 0.0 && space_to_submit_estimation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_to_submit_estimation_2.tStart = t;  // (not accounting for frame time here)
      space_to_submit_estimation_2.frameNStart = frameN;  // exact frame index
      
      space_to_submit_estimation_2.setAutoDraw(true);
    }

    
    if (space_to_submit_estimation_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      space_to_submit_estimation_2.setText(pressENTER, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var sample_deviance;
var bonus;
function SIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'SI'-------
    SIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (tooLate === 0){
        deviance = estimate2 - true_ratio * 100;
        abs_deviance = Math.abs(deviance);
    }
    
    if ((startGame === 1)) {
        if (tooLate === 0){
            list_deviance.push(abs_deviance);
            psychoJS.experiment.addData("estimation2.rating", estimate2);
            psychoJS.experiment.addData("estimation2.rt", estimate2_rt); // slider appears after 2 secs
            psychoJS.experiment.addData("estimate_peer", peer_estimate);
            psychoJS.experiment.addData("confidence_peer", confidence_level);
        }
        // nRemaining is nRemaining across all, so nRemaining===0 is the very very last trial.
        if ((trials_parameters._snapshots[trial_index]["nRemaining"] === 0)) {
            sample_deviance = list_deviance[Math.floor(Math.random() * list_deviance.length)];
            bonus = (1.5 - (sample_deviance * 0.04));
            if ((bonus < 0)) {
                bonus = 0;
            }
            expInfo["bonus"] = bonus;
        }
    }
    
    trial_index = trial_index + 1
    
    psychoJS.experiment.addData('estimate2_textbox.text',estimate2_textbox.text)
    estimate2_textbox.reset()
    // the Routine "SI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var tooLate_feedbackComponents;
function tooLate_feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'tooLate_feedback'-------
    t = 0;
    tooLate_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    if ((tooLate === 0)) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    tooLate_feedbackComponents = [];
    tooLate_feedbackComponents.push(tooLate_fb);
    
    tooLate_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tooLate_feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'tooLate_feedback'-------
    // get current time
    t = tooLate_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tooLate_fb* updates
    if (t >= 0.0 && tooLate_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tooLate_fb.tStart = t;  // (not accounting for frame time here)
      tooLate_fb.frameNStart = frameN;  // exact frame index
      
      tooLate_fb.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (tooLate_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tooLate_fb.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    tooLate_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tooLate_feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'tooLate_feedback'-------
    tooLate_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((startGame === 1)) {
        if ((n_tooLate >= 5)) {
            loop_trials.finished = true;
        }
    }
    
    return Scheduler.Event.NEXT;
  };
}


var test_questionsComponents;
function test_questionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test_questions'-------
    t = 0;
    test_questionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // only run if phase is 2
    if (practice_phase !== 2) {
        continueRoutine = false;
    }
    
    progress_bar_size = (((window_x * 2) / 18) * 15);
    progress_bar_pos = ((- window_x) + ((((window_x * 2) / 18) * 15) / 2));
    
    test_Q1._fontSize = 0.015;
    test_Q1._bold = false;
    test_Q2._fontSize = 0.015;
    test_Q2._bold = false;
    test_Q3._fontSize = 0.015;
    test_Q3._bold = false;
    test_Q4._fontSize = 0.015;
    test_Q4._bold = false;
    test_Q5._fontSize = 0.015;
    test_Q5._bold = false;
    progress_bar_fixed_4.setPos([0, 0.48]);
    progress_bar_fixed_4.setSize([(window_x * 2), 0.03]);
    progress_bar_4.setPos([progress_bar_pos, 0.48]);
    progress_bar_4.setSize([progress_bar_size, 0.03]);
    test_Q1.reset()
    test_Q2.reset()
    test_Q3.reset()
    blue_mushroom_5.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_5.setPos([(window_x - 0.2), (- 0.4)]);
    test_Q4.reset()
    test_Q5.reset()
    // keep track of which components have finished
    test_questionsComponents = [];
    test_questionsComponents.push(progress_bar_fixed_4);
    test_questionsComponents.push(progress_bar_4);
    test_questionsComponents.push(progress_IC_4);
    test_questionsComponents.push(text_4);
    test_questionsComponents.push(Q1);
    test_questionsComponents.push(test_Q1);
    test_questionsComponents.push(wrong_answer_1);
    test_questionsComponents.push(Q2);
    test_questionsComponents.push(test_Q2);
    test_questionsComponents.push(wrong_answer_2);
    test_questionsComponents.push(Q3);
    test_questionsComponents.push(test_Q3);
    test_questionsComponents.push(wrong_answer_3);
    test_questionsComponents.push(enter_2);
    test_questionsComponents.push(blue_mushroom_5);
    test_questionsComponents.push(red_mushroom_5);
    test_questionsComponents.push(Q4);
    test_questionsComponents.push(test_Q4);
    test_questionsComponents.push(wrong_answer_4);
    test_questionsComponents.push(Q5);
    test_questionsComponents.push(test_Q5);
    test_questionsComponents.push(wrong_answer_5);
    
    test_questionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var rating_completed;
var show_false_1;
var show_false_2;
var show_false_3;
var show_false_4;
var show_false_5;
var show_enter;
function test_questionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test_questions'-------
    // get current time
    t = test_questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    
    rating_completed = 0;
    show_false_1 = " ";
    show_false_2 = " ";
    show_false_3 = " ";
    show_false_4 = " ";
    show_false_5 = " ";
    
    if ((test_Q1.getRating() === 2)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q1.getRating() === 1)) {
            show_false_1 = "Wrong answer. Please pick another option.";
        }
    }
    if ((test_Q2.getRating() === 2)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q2.getRating() === 1)) {
            show_false_2 = "Wrong answer. Please pick another option.";
        }
    }
    if ((test_Q3.getRating() === 1)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q3.getRating() === 2)) {
            show_false_3 = "Wrong answer. Please pick another option.";
        }
    }
    if ((test_Q4.getRating() === 2)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q4.getRating() === 1)) {
            show_false_4 = "Wrong answer. Please pick another option.";
        }
    }
    if ((test_Q5.getRating() === 1)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q5.getRating() === 2)) {
            show_false_5 = "Wrong answer. Please pick another option.";
        }
    }
    
    show_enter = "";
    if ((rating_completed === 5)) {
        show_enter = "Press ENTER to continue";
    }
    if (((_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys)) && (rating_completed === 5))) {
        continueRoutine = false;
    }
    
    
    // *progress_bar_fixed_4* updates
    if (t >= 0.0 && progress_bar_fixed_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_fixed_4.tStart = t;  // (not accounting for frame time here)
      progress_bar_fixed_4.frameNStart = frameN;  // exact frame index
      
      progress_bar_fixed_4.setAutoDraw(true);
    }

    
    // *progress_bar_4* updates
    if (t >= 0.0 && progress_bar_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_4.tStart = t;  // (not accounting for frame time here)
      progress_bar_4.frameNStart = frameN;  // exact frame index
      
      progress_bar_4.setAutoDraw(true);
    }

    
    // *progress_IC_4* updates
    if (t >= 0.0 && progress_IC_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_IC_4.tStart = t;  // (not accounting for frame time here)
      progress_IC_4.frameNStart = frameN;  // exact frame index
      
      progress_IC_4.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *Q1* updates
    if (t >= 0.0 && Q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q1.tStart = t;  // (not accounting for frame time here)
      Q1.frameNStart = frameN;  // exact frame index
      
      Q1.setAutoDraw(true);
    }

    
    // *test_Q1* updates
    if (t >= 0.0 && test_Q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_Q1.tStart = t;  // (not accounting for frame time here)
      test_Q1.frameNStart = frameN;  // exact frame index
      
      test_Q1.setAutoDraw(true);
    }

    
    // *wrong_answer_1* updates
    if (t >= 0.0 && wrong_answer_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrong_answer_1.tStart = t;  // (not accounting for frame time here)
      wrong_answer_1.frameNStart = frameN;  // exact frame index
      
      wrong_answer_1.setAutoDraw(true);
    }

    
    if (wrong_answer_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wrong_answer_1.setText(show_false_1, false);
    }
    
    // *Q2* updates
    if (t >= 0.0 && Q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q2.tStart = t;  // (not accounting for frame time here)
      Q2.frameNStart = frameN;  // exact frame index
      
      Q2.setAutoDraw(true);
    }

    
    // *test_Q2* updates
    if (t >= 0.0 && test_Q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_Q2.tStart = t;  // (not accounting for frame time here)
      test_Q2.frameNStart = frameN;  // exact frame index
      
      test_Q2.setAutoDraw(true);
    }

    
    // *wrong_answer_2* updates
    if (t >= 0.0 && wrong_answer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrong_answer_2.tStart = t;  // (not accounting for frame time here)
      wrong_answer_2.frameNStart = frameN;  // exact frame index
      
      wrong_answer_2.setAutoDraw(true);
    }

    
    if (wrong_answer_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wrong_answer_2.setText(show_false_2, false);
    }
    
    // *Q3* updates
    if (t >= 0.0 && Q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q3.tStart = t;  // (not accounting for frame time here)
      Q3.frameNStart = frameN;  // exact frame index
      
      Q3.setAutoDraw(true);
    }

    
    // *test_Q3* updates
    if (t >= 0.0 && test_Q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_Q3.tStart = t;  // (not accounting for frame time here)
      test_Q3.frameNStart = frameN;  // exact frame index
      
      test_Q3.setAutoDraw(true);
    }

    
    // *wrong_answer_3* updates
    if (t >= 0.0 && wrong_answer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrong_answer_3.tStart = t;  // (not accounting for frame time here)
      wrong_answer_3.frameNStart = frameN;  // exact frame index
      
      wrong_answer_3.setAutoDraw(true);
    }

    
    if (wrong_answer_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wrong_answer_3.setText(show_false_3, false);
    }
    
    // *enter_2* updates
    if (t >= 0.0 && enter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_2.tStart = t;  // (not accounting for frame time here)
      enter_2.frameNStart = frameN;  // exact frame index
      
      enter_2.setAutoDraw(true);
    }

    
    if (enter_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      enter_2.setText(show_enter, false);
    }
    
    // *blue_mushroom_5* updates
    if (t >= 0.0 && blue_mushroom_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_mushroom_5.tStart = t;  // (not accounting for frame time here)
      blue_mushroom_5.frameNStart = frameN;  // exact frame index
      
      blue_mushroom_5.setAutoDraw(true);
    }

    
    // *red_mushroom_5* updates
    if (t >= 0.0 && red_mushroom_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_mushroom_5.tStart = t;  // (not accounting for frame time here)
      red_mushroom_5.frameNStart = frameN;  // exact frame index
      
      red_mushroom_5.setAutoDraw(true);
    }

    
    // *Q4* updates
    if (t >= 0.0 && Q4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q4.tStart = t;  // (not accounting for frame time here)
      Q4.frameNStart = frameN;  // exact frame index
      
      Q4.setAutoDraw(true);
    }

    
    // *test_Q4* updates
    if (t >= 0.0 && test_Q4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_Q4.tStart = t;  // (not accounting for frame time here)
      test_Q4.frameNStart = frameN;  // exact frame index
      
      test_Q4.setAutoDraw(true);
    }

    
    // *wrong_answer_4* updates
    if (t >= 0.0 && wrong_answer_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrong_answer_4.tStart = t;  // (not accounting for frame time here)
      wrong_answer_4.frameNStart = frameN;  // exact frame index
      
      wrong_answer_4.setAutoDraw(true);
    }

    
    if (wrong_answer_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wrong_answer_4.setText(show_false_4, false);
    }
    
    // *Q5* updates
    if (t >= 0.0 && Q5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q5.tStart = t;  // (not accounting for frame time here)
      Q5.frameNStart = frameN;  // exact frame index
      
      Q5.setAutoDraw(true);
    }

    
    // *test_Q5* updates
    if (t >= 0.0 && test_Q5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_Q5.tStart = t;  // (not accounting for frame time here)
      test_Q5.frameNStart = frameN;  // exact frame index
      
      test_Q5.setAutoDraw(true);
    }

    
    // *wrong_answer_5* updates
    if (t >= 0.0 && wrong_answer_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrong_answer_5.tStart = t;  // (not accounting for frame time here)
      wrong_answer_5.frameNStart = frameN;  // exact frame index
      
      wrong_answer_5.setAutoDraw(true);
    }

    
    if (wrong_answer_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wrong_answer_5.setText(show_false_5, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    test_questionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_questionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test_questions'-------
    test_questionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "test_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var instrBonusComponents;
function instrBonusRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instrBonus'-------
    t = 0;
    instrBonusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // only run if phase is 2
    if (practice_phase !== 2) {
        loop_instrBonus.finished = true;
        continueRoutine = false;
    }
    
    progress_bar_size = (((window_x * 2) / 18) * (Number.parseInt(currentInstr) + 15));
    progress_bar_pos = ((- window_x) + ((((window_x * 2) / 18) * (Number.parseInt(currentInstr) + 15)) / 2));
    progress_text = (("Instructions: " + (Number.parseInt(currentInstr)+15).toString()) + "/18");
    
    text_3.setText(InstrDict[currentInstr]);
    blue_mushroom_2.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_2.setPos([(window_x - 0.2), (- 0.4)]);
    progress_bar_fixed_3.setPos([0, 0.48]);
    progress_bar_fixed_3.setSize([(window_x * 2), 0.03]);
    progress_bar_3.setPos([progress_bar_pos, 0.48]);
    progress_bar_3.setSize([progress_bar_size, 0.03]);
    progress_IC_3.setText(progress_text);
    // keep track of which components have finished
    instrBonusComponents = [];
    instrBonusComponents.push(key_resp_2);
    instrBonusComponents.push(text_3);
    instrBonusComponents.push(blue_mushroom_2);
    instrBonusComponents.push(red_mushroom_2);
    instrBonusComponents.push(progress_bar_fixed_3);
    instrBonusComponents.push(progress_bar_3);
    instrBonusComponents.push(progress_IC_3);
    
    instrBonusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrBonusRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instrBonus'-------
    // get current time
    t = instrBonusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['right', 'left', 'return', 'num_enter'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *blue_mushroom_2* updates
    if (t >= 0.0 && blue_mushroom_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_mushroom_2.tStart = t;  // (not accounting for frame time here)
      blue_mushroom_2.frameNStart = frameN;  // exact frame index
      
      blue_mushroom_2.setAutoDraw(true);
    }

    
    // *red_mushroom_2* updates
    if (t >= 0.0 && red_mushroom_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_mushroom_2.tStart = t;  // (not accounting for frame time here)
      red_mushroom_2.frameNStart = frameN;  // exact frame index
      
      red_mushroom_2.setAutoDraw(true);
    }

    
    // *progress_bar_fixed_3* updates
    if (t >= 0.0 && progress_bar_fixed_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_fixed_3.tStart = t;  // (not accounting for frame time here)
      progress_bar_fixed_3.frameNStart = frameN;  // exact frame index
      
      progress_bar_fixed_3.setAutoDraw(true);
    }

    
    // *progress_bar_3* updates
    if (t >= 0.0 && progress_bar_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_bar_3.tStart = t;  // (not accounting for frame time here)
      progress_bar_3.frameNStart = frameN;  // exact frame index
      
      progress_bar_3.setAutoDraw(true);
    }

    
    // *progress_IC_3* updates
    if (t >= 0.0 && progress_IC_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_IC_3.tStart = t;  // (not accounting for frame time here)
      progress_IC_3.frameNStart = frameN;  // exact frame index
      
      progress_IC_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrBonusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var list_deviance;
function instrBonusRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instrBonus'-------
    instrBonusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    if ((((key_resp_2.keys === "return") || (key_resp_2.keys === "num_enter")) && (Number.parseInt(currentInstr) === 3))) {
        currentInstr = (Number.parseInt(currentInstr) + 1);
    } else {
        if (((key_resp_2.keys === "right") && (Number.parseInt(currentInstr) === 3))) {
            currentInstr = Number.parseInt(currentInstr);
        } else {
            if (((key_resp_2.keys === "right") && (Number.parseInt(currentInstr) !== 3))) {
                currentInstr = (Number.parseInt(currentInstr) + 1);
            } else {
                if ((key_resp_2.keys === "left")) {
                    currentInstr = (Number.parseInt(currentInstr) - 1);
                }
            }
        }
    }
    if ((currentInstr === 0)) {
        currentInstr = 1;
    } else {
        if ((currentInstr === 4)) {
            loop_instrBonus.finished = true;
        }
    }
    currentInstr = currentInstr.toString();
    list_deviance = [];
    trial_index = 0;
    startGame = 1;
    // the Routine "instrBonus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var nPerLoop;
var _key_resp_3_allKeys;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pause'-------
    t = 0;
    pauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(180.000000);
    // update component parameters for each repeat
    event.clearEvents();
    
    //nPerLoop = trials_parameters._snapshots[trial_index-1]["nStim"] // when multiple reps
    nPerLoop = 1; // when one large rep, devided into multiple blocks
    if (((((trials_parameters._snapshots[trial_index-1]["thisTrialN"] + 1) % nPerLoop) === 0) && (trials_parameters._snapshots[trial_index-1]["nRemaining"] !== 0))) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    if (n_tooLate >= 5){
        continueRoutine = false;
    }
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    blue_mushroom_3.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_3.setPos([(window_x - 0.2), (- 0.4)]);
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(shortBreak);
    pauseComponents.push(key_resp_3);
    pauseComponents.push(timer);
    pauseComponents.push(blue_mushroom_3);
    pauseComponents.push(red_mushroom_3);
    
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var timer_text;
function pauseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pause'-------
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *shortBreak* updates
    if (t >= 0.0 && shortBreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shortBreak.tStart = t;  // (not accounting for frame time here)
      shortBreak.frameNStart = frameN;  // exact frame index
      
      shortBreak.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (shortBreak.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      shortBreak.setAutoDraw(false);
    }
    timer_text = Math.floor(180 - t);
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    frameRemains = 0.0 + 180.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *timer* updates
    if (t >= 0.0 && timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer.tStart = t;  // (not accounting for frame time here)
      timer.frameNStart = frameN;  // exact frame index
      
      timer.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      timer.setAutoDraw(false);
    }
    
    if (timer.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer.setText(timer_text, false);
    }
    
    // *blue_mushroom_3* updates
    if (t >= 0.0 && blue_mushroom_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_mushroom_3.tStart = t;  // (not accounting for frame time here)
      blue_mushroom_3.frameNStart = frameN;  // exact frame index
      
      blue_mushroom_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blue_mushroom_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blue_mushroom_3.setAutoDraw(false);
    }
    
    // *red_mushroom_3* updates
    if (t >= 0.0 && red_mushroom_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_mushroom_3.tStart = t;  // (not accounting for frame time here)
      red_mushroom_3.frameNStart = frameN;  // exact frame index
      
      red_mushroom_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (red_mushroom_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      red_mushroom_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pause'-------
    pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((startGame === 1)) {
        if (((((trials_parameters._snapshots[trial_index-1]["thisTrialN"] + 1) % nPerLoop) === 0) && (trials_parameters._snapshots[trial_index-1]["nRemaining"] !== 0))) {        
            if ((t > 179)) {
                psychoJS.experiment.addData("shortBreak.secs", 180);
            } else {
                psychoJS.experiment.addData("shortBreak.secs", t);
            }
        }
    }
    
    
    key_resp_3.stop();
    return Scheduler.Event.NEXT;
  };
}


var end_tooLateComponents;
function end_tooLateRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end_tooLate'-------
    t = 0;
    end_tooLateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(60.000000);
    // update component parameters for each repeat
    if ((n_tooLate < 5)) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    end_tooLateComponents = [];
    end_tooLateComponents.push(tooLate_finish);
    
    end_tooLateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_tooLateRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end_tooLate'-------
    // get current time
    t = end_tooLateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tooLate_finish* updates
    if (t >= 0.0 && tooLate_finish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tooLate_finish.tStart = t;  // (not accounting for frame time here)
      tooLate_finish.frameNStart = frameN;  // exact frame index
      
      tooLate_finish.setAutoDraw(true);
    }

    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (tooLate_finish.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tooLate_finish.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_tooLateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_tooLateRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end_tooLate'-------
    end_tooLateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var end_text;
var _enter_to_end_allKeys;
var showBonusComponents;
function showBonusRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'showBonus'-------
    t = 0;
    showBonusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (n_tooLate >= 5){
        continueRoutine = false;
        end_text = " ";
    } else if (n_tooLate < 5) {
        var text1 = "Great job! You have finished the harvest season.\n\n";
        var text2 = "On the day that was selected by the computer, the number of mushroom pickers you sent into the forest carrying a BLUE bag deviated ";
        var text3 = sample_deviance.toFixed(0);
        var text4 = " bags from the correct answer.\nTherefore, your bonus will be \u00a31.50 - ";
        var text5 = " x \u00a30.04 =\n\n\u00a3";
        var text6 = bonus.toFixed(2);
        var text7 = " \n\nPress ENTER to continue.";
        end_text = (((((((text1 + text2) + text3) + text4) + text3) + text5) + text6) + text7);
    }
    bonus_text.setText(end_text);
    enter_to_end.keys = undefined;
    enter_to_end.rt = undefined;
    _enter_to_end_allKeys = [];
    blue_mushroom_4.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_4.setPos([(window_x - 0.2), (- 0.4)]);
    // keep track of which components have finished
    showBonusComponents = [];
    showBonusComponents.push(bonus_text);
    showBonusComponents.push(enter_to_end);
    showBonusComponents.push(blue_mushroom_4);
    showBonusComponents.push(red_mushroom_4);
    
    showBonusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function showBonusRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'showBonus'-------
    // get current time
    t = showBonusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bonus_text* updates
    if (t >= 0.0 && bonus_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bonus_text.tStart = t;  // (not accounting for frame time here)
      bonus_text.frameNStart = frameN;  // exact frame index
      
      bonus_text.setAutoDraw(true);
    }

    
    // *enter_to_end* updates
    if (t >= 0.0 && enter_to_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_to_end.tStart = t;  // (not accounting for frame time here)
      enter_to_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enter_to_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enter_to_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enter_to_end.clearEvents(); });
    }

    if (enter_to_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = enter_to_end.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _enter_to_end_allKeys = _enter_to_end_allKeys.concat(theseKeys);
      if (_enter_to_end_allKeys.length > 0) {
        enter_to_end.keys = _enter_to_end_allKeys[_enter_to_end_allKeys.length - 1].name;  // just the last key pressed
        enter_to_end.rt = _enter_to_end_allKeys[_enter_to_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blue_mushroom_4* updates
    if (t >= 0.0 && blue_mushroom_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_mushroom_4.tStart = t;  // (not accounting for frame time here)
      blue_mushroom_4.frameNStart = frameN;  // exact frame index
      
      blue_mushroom_4.setAutoDraw(true);
    }

    
    // *red_mushroom_4* updates
    if (t >= 0.0 && red_mushroom_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_mushroom_4.tStart = t;  // (not accounting for frame time here)
      red_mushroom_4.frameNStart = frameN;  // exact frame index
      
      red_mushroom_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    showBonusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function showBonusRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'showBonus'-------
    showBonusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    enter_to_end.stop();
    // the Routine "showBonus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var commentsComponents;
function commentsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'comments'-------
    t = 0;
    commentsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    input_instructions.setText(' ');
    input_other.setText(' ');
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    if ((n_tooLate >= 5)) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    commentsComponents = [];
    commentsComponents.push(comments_title);
    commentsComponents.push(comments_instructions);
    commentsComponents.push(input_instructions);
    commentsComponents.push(comments_other);
    commentsComponents.push(input_other);
    commentsComponents.push(continue_button);
    commentsComponents.push(mouse);
    
    commentsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function commentsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'comments'-------
    // get current time
    t = commentsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *comments_title* updates
    if (t >= 0.0 && comments_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comments_title.tStart = t;  // (not accounting for frame time here)
      comments_title.frameNStart = frameN;  // exact frame index
      
      comments_title.setAutoDraw(true);
    }

    
    // *comments_instructions* updates
    if (t >= 0.0 && comments_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comments_instructions.tStart = t;  // (not accounting for frame time here)
      comments_instructions.frameNStart = frameN;  // exact frame index
      
      comments_instructions.setAutoDraw(true);
    }

    
    // *input_instructions* updates
    if (t >= 0.0 && input_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_instructions.tStart = t;  // (not accounting for frame time here)
      input_instructions.frameNStart = frameN;  // exact frame index
      
      input_instructions.setAutoDraw(true);
    }

    
    // *comments_other* updates
    if (t >= 0.0 && comments_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comments_other.tStart = t;  // (not accounting for frame time here)
      comments_other.frameNStart = frameN;  // exact frame index
      
      comments_other.setAutoDraw(true);
    }

    
    // *input_other* updates
    if (t >= 0.0 && input_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_other.tStart = t;  // (not accounting for frame time here)
      input_other.frameNStart = frameN;  // exact frame index
      
      input_other.setAutoDraw(true);
    }

    
    // *continue_button* updates
    if (t >= 0.0 && continue_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_button.tStart = t;  // (not accounting for frame time here)
      continue_button.frameNStart = frameN;  // exact frame index
      
      continue_button.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_button]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    commentsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function commentsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'comments'-------
    commentsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('input_instructions.text',input_instructions.text)
    input_instructions.reset()
    psychoJS.experiment.addData('input_other.text',input_other.text)
    input_other.reset()
    // store data for thisExp (ExperimentHandler)
    expInfo["instructions_clear"] = input_instructions.text;
    expInfo["other_comments"] = input_other.text;
    
    // the Routine "comments" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instrEndComponents;
function instrEndRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instrEnd'-------
    t = 0;
    instrEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    event.clearEvents();
    if ((n_tooLate >= 5)) {
        continueRoutine = false;
    }
    
    // setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instrEndComponents = [];
    instrEndComponents.push(textFinish);
    instrEndComponents.push(continue_button_2);
    instrEndComponents.push(mouse_2);
    
    instrEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrEndRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instrEnd'-------
    // get current time
    t = instrEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textFinish* updates
    if (t >= 0.0 && textFinish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textFinish.tStart = t;  // (not accounting for frame time here)
      textFinish.frameNStart = frameN;  // exact frame index
      
      textFinish.setAutoDraw(true);
    }

    
    // *continue_button_2* updates
    if (t >= 0.0 && continue_button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_button_2.tStart = t;  // (not accounting for frame time here)
      continue_button_2.frameNStart = frameN;  // exact frame index
      
      continue_button_2.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_button_2]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrEndRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instrEnd'-------
    instrEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    /* Syntax Error: Fix Python code */
    // store data for thisExp (ExperimentHandler)
    // the Routine "instrEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
