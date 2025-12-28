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
const loop_informedConsentLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_informedConsentLoopBegin, loop_informedConsentLoopScheduler);
flowScheduler.add(loop_informedConsentLoopScheduler);
flowScheduler.add(loop_informedConsentLoopEnd);
flowScheduler.add(instr_questionnaireRoutineBegin());
flowScheduler.add(instr_questionnaireRoutineEachFrame());
flowScheduler.add(instr_questionnaireRoutineEnd());
flowScheduler.add(personality_statementsRoutineBegin());
flowScheduler.add(personality_statementsRoutineEachFrame());
flowScheduler.add(personality_statementsRoutineEnd());
flowScheduler.add(feedback_traitsRoutineBegin());
flowScheduler.add(feedback_traitsRoutineEachFrame());
flowScheduler.add(feedback_traitsRoutineEnd());
const loop_instrPracLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_instrPracLoopBegin, loop_instrPracLoopScheduler);
flowScheduler.add(loop_instrPracLoopScheduler);
flowScheduler.add(loop_instrPracLoopEnd);
const loop_prTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_prTrialsLoopBegin, loop_prTrialsLoopScheduler);
flowScheduler.add(loop_prTrialsLoopScheduler);
flowScheduler.add(loop_prTrialsLoopEnd);
flowScheduler.add(test_questionsRoutineBegin());
flowScheduler.add(test_questionsRoutineEachFrame());
flowScheduler.add(test_questionsRoutineEnd());
const loop_instrLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_instrLoopBegin, loop_instrLoopScheduler);
flowScheduler.add(loop_instrLoopScheduler);
flowScheduler.add(loop_instrLoopEnd);
const loop_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_trialsLoopBegin, loop_trialsLoopScheduler);
flowScheduler.add(loop_trialsLoopScheduler);
flowScheduler.add(loop_trialsLoopEnd);
flowScheduler.add(instrBonusRoutineBegin());
flowScheduler.add(instrBonusRoutineEachFrame());
flowScheduler.add(instrBonusRoutineEnd());
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
    {'name': 'finish.png', 'path': 'finish.png'},
    {'name': 'red_mushroom.png', 'path': 'red_mushroom.png'},
    {'name': 'trial_structure.csv', 'path': 'trial_structure.csv'},
    {'name': 'blue_mushroom.png', 'path': 'blue_mushroom.png'},
    {'name': 'continue.png', 'path': 'continue.png'}
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
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=1D53F7C4', '');

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
var header_statements;
var statements_left;
var mouse_3;
var box_1;
var box_2;
var box_3;
var box_4;
var box_5;
var box_6;
var box_7;
var box_8;
var statements_right;
var box_9;
var box_10;
var box_11;
var box_12;
var box_13;
var box_14;
var box_15;
var box_16;
var enter_3;
var feedback_traitsClock;
var fb_text;
var key_resp_4;
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
var setupSamplesClock;
var crossHairClock;
var cross_hair;
var mushroomSampleClock;
var text_2;
var ISIClock;
var isi;
var firstEstimationClock;
var how_many_mushrooms;
var showEstimate;
var estimation_slider;
var red_rectangle;
var blue_rectangle;
var sliderMarker;
var slider_text0;
var slider_text100;
var confidence_text;
var confidence;
var space_to_submit_estimation;
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
var Q4;
var test_Q4;
var wrong_answer_4;
var Q5;
var test_Q5;
var wrong_answer_5;
var enter_2;
var blue_mushroom_5;
var red_mushroom_5;
var instructionsClock;
var key_resp_2;
var startGame;
var Instr1;
var Instr2;
var Instr3;
var Instr4;
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
var instrBonusClock;
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
  // Initialize components for Routine "informedConsent"
  informedConsentClock = new util.Clock();
  IC1 = "Dear participant,\n\nFirst, thank you for your interest!\nBefore the study starts, it is important that you are informed about the procedures. Therefore, we would like you to read this information letter carefully.\nPlease do not hesitate to ask for clarification about this text or the general procedure. If anything is unclear, the researcher will answer your questions.\n\n\nYou can go back and forth through the instructions by pressing the LEFT and RIGHT arrow keys.\n\n\nNow press the RIGHT arrow key to move on to the next instruction.";
  IC2 = "Type of Research:\n\nYou will participate in an online estimation study.\n\nThe study will start with a short personality questionnaire, followed by an estimation game. This will take approximately 30 minutes in total.\n\n\n";
  IC3 = "Voluntary participation:\n\nThere are no consequences if you decide not to participate in this study.\nDuring the study, you are free to stop participating at any moment, without giving a reason for doing so.\nWithin seven days after participation, you are allowed to withdraw your data from this study and your data will be deleted permanently.";
  IC4 = "Your privacy is guaranteed:\n\nYour personal information (about who you are) remains confidential and will not be shared without your explicit consent.\nYour research data will be analyzed by the researchers who collected the information. Research data published in scientific journals will be anonymous and cannot be traced back to you as an individual. Completely anonymized data can be shared with other researchers.";
  IC5 = "Discomfort, risks and insurance:\n\nAs with any research at the University of Amsterdam (UvA), a standard liability insurance applies.\n\n\n\n\nCompensation:\n\nA flat fee of \u00a33.00 upon completion of the study, plus a bonus of up to \u00a31.50 depending on your performance in the estimation game.";
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
    text: 'PART 1: PERSONALITY QUESTIONNAIRE\n\n\nYou will see a list with 16 personality traits.\nPlease select the 2 traits that characterize you the most. \n\nAfter you have selected 2 traits, you can continue with the next part of the study. \n\nPlease take your time to read through the personality traits carefully.\n\n\nPress ENTER to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "personality_statements"
  personality_statementsClock = new util.Clock();
  header_statements = new visual.TextStim({
    win: psychoJS.window,
    name: 'header_statements',
    text: 'Please select the 2 personality traits that characterize you the most:',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.4], height: 0.032,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  statements_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'statements_left',
    text: 'Active\n\n\nOrganized\n\n\nEnergetic\n\n\nResponsible\n\n\nOutgoing\n\n\nDependable\n\n\nOutspoken\n\n\nEfficient',
    font: 'Open Sans',
    units: 'height', 
    pos: [(- 0.27), 0], height: 0.026,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  box_1 = new visual.Rect ({
    win: psychoJS.window, name: 'box_1', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), 0.301],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_2', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), 0.215],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  box_3 = new visual.Rect ({
    win: psychoJS.window, name: 'box_3', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), 0.129],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  box_4 = new visual.Rect ({
    win: psychoJS.window, name: 'box_4', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), 0.043],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  box_5 = new visual.Rect ({
    win: psychoJS.window, name: 'box_5', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), (- 0.042)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  box_6 = new visual.Rect ({
    win: psychoJS.window, name: 'box_6', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), (- 0.128)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  box_7 = new visual.Rect ({
    win: psychoJS.window, name: 'box_7', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), (- 0.214)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  box_8 = new visual.Rect ({
    win: psychoJS.window, name: 'box_8', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [(- 0.3), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -11, interpolate: true,
  });
  
  statements_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'statements_right',
    text: 'Sympathetic\n\n\nImaginative\n\n\nKind\n\n\nInsightful\n\n\nAffectionate\n\n\nCurious\n\n\nWarm\n\n\nArtistic',
    font: 'Open Sans',
    units: 'height', 
    pos: [0.18, 0], height: 0.026,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  box_9 = new visual.Rect ({
    win: psychoJS.window, name: 'box_9', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, 0.301],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -13, interpolate: true,
  });
  
  box_10 = new visual.Rect ({
    win: psychoJS.window, name: 'box_10', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, 0.215],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -14, interpolate: true,
  });
  
  box_11 = new visual.Rect ({
    win: psychoJS.window, name: 'box_11', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, 0.129],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -15, interpolate: true,
  });
  
  box_12 = new visual.Rect ({
    win: psychoJS.window, name: 'box_12', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, 0.043],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -16, interpolate: true,
  });
  
  box_13 = new visual.Rect ({
    win: psychoJS.window, name: 'box_13', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, (- 0.042)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -17, interpolate: true,
  });
  
  box_14 = new visual.Rect ({
    win: psychoJS.window, name: 'box_14', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, (- 0.128)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -18, interpolate: true,
  });
  
  box_15 = new visual.Rect ({
    win: psychoJS.window, name: 'box_15', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, (- 0.214)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -19, interpolate: true,
  });
  
  box_16 = new visual.Rect ({
    win: psychoJS.window, name: 'box_16', units : 'height', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 0, pos: [0.15, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -20, interpolate: true,
  });
  
  enter_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.0235,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -21.0 
  });
  
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
  
  // Initialize components for Routine "instrPrac"
  instrPracClock = new util.Clock();
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Pr1 = "PART 2: ESTIMATION GAME\n\n\nBefore we start the game, we will provide you with some instructions, followed by a few practice rounds.\n\nYou can go back and forth through the instructions by pressing the LEFT and RIGHT arrow keys.\n\n\nNow press the RIGHT arrow key to move on to the next instruction." 
  
  Pr2 = "In this game, you are part of a community for which the main food resource is mushrooms\n\nThese mushrooms are harvested from a forest in the vicinity of your village. Soon, it will be time to harvest, and the leader of the community has asked you for your help in coordinating this."
  
  Pr3 = "Each day, 100 people from the community will enter the forest.\nEach person will carry a bag to pick 1 type of mushroom.\n\nThere are two types of mushrooms, blue and red ones.\nThe problem is that these two types of mushrooms each need their own type of bag. A blue mushroom can only be carried in a blue bag and a red mushroom can only be carried in a red bag."
   
  Pr4 = "Your task at the start of the day is to decide how many people will go into the forest carrying a blue bag and how many people will be carrying a red bag.\n\nIf on one day there are 70 blue mushrooms and 30 red mushrooms in the forest, you need to give 70 people a blue bag and 30 people a red bag. If you would give too many people a blue bag, some people carrying a blue bag would arrive home with an empty bag, while some red mushrooms would be left in the forest because there were not enough people with a red bag.\nThat means your yield would not be optimal."
   
  Pr5 = "To make an informed guess about how many mushroom pickers should carry a blue or a red bag, you will get up early each morning to walk through 5 fields that surround your village.\n\nThere are some blue and red mushrooms growing in these fields. You know that the mushrooms you see here are a good, but not exact representation of what will be found in the forest on that day.\n\nThus, based on the number of blue versus red mushrooms in these 5 nearby fields, you can decide how many pickers you give a blue or a red bag."
   
  Pr6 = "On some days, you encounter many mushrooms in the fields, so you have a large sample to base your estimate on. On other days, however, you encounter fewer mushrooms, so you have a smaller sample to base your estimate on.\n\nThe more mushrooms you find in the nearby fields, the more precisely they can represent the mushrooms in the forest."
   
  Pr7 = "During the game, you will first see the mushrooms in each of the 5 fields.\n\nYou are then asked to decide how many out of 100 pickers should carry a blue bag.\n\nThis is followed by rating your confidence in your decision.\n\nYou will play multiple rounds. Each round represents a new day and all days together represent the entire harvest season."
   
  Pr8 = "To get a better understanding of the task and how everything looks, you will first play some practice days.\n\nPress ENTER to start the practice."
  
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
    text: 'Based on the sample you just saw, how many mushroom pickers should carry a BLUE bag today?\n',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.3], height: 0.035,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  showEstimate = new visual.TextStim({
    win: psychoJS.window,
    name: 'showEstimate',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  estimation_slider = new visual.Slider({
    win: psychoJS.window, name: 'estimation_slider',
    size: [0.5, 0.05], pos: [0, 0.15], units: 'height',
    labels: [0, 100], ticks: [0, 100],
    granularity: 1.0, style: ["SLIDER"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  red_rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'red_rectangle', units : 'height', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.15],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  blue_rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'blue_rectangle', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  sliderMarker = new visual.Rect ({
    win: psychoJS.window, name: 'sliderMarker', units : 'height', 
    width: [0.008, 0.05][0], height: [0.008, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  slider_text0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text0',
    text: '0',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.25), 0.11], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  slider_text100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text100',
    text: '100',
    font: 'Arial',
    units: 'height', 
    pos: [0.25, 0.11], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  confidence_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_text',
    text: 'Please rate your confidence in your decision:',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.1)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  confidence = new visual.Slider({
    win: psychoJS.window, name: 'confidence',
    size: [0.3, 0.02], pos: [0, (- 0.17)], units: 'height',
    labels: ["low", "medium", "high"], ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  space_to_submit_estimation = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_to_submit_estimation',
    text: 'Press ENTER to submit your response',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
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
    text: '2. On some days you find more mushrooms in the nearby fields to base your estimate on than on other days:',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.17], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  test_Q2 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q2',
    size: [0.17, 0.015], pos: [0, 0.13], units: 'height',
    labels: ["True", "False"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('white'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  wrong_answer_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.09], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -10.0 
  });
  
  Q3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q3',
    text: '3. If you just saw 4 blue mushrooms and 3 red mushrooms in the nearby fields, how many out of 100 mushrooms in the forest would probably be blue?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.03], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  test_Q3 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q3',
    size: [0.3, 0.015], pos: [0, (- 0.02)], units: 'height',
    labels: ["Around 4, because I just\nsaw 4 blue mushrooms", "More than 4, because there\nare more mushrooms in the\nforest than in the fields "], ticks: [1, 2],
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
  
  Q4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q4',
    text: '4. If you estimate that there are 70 blue and 30 red mushrooms in the forest, what is the optimal number of BLUE pickers to send out?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.16)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  test_Q4 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q4',
    size: [0.3, 0.015], pos: [0, (- 0.21)], units: 'height',
    labels: ["30", "50", "70"], ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -15, 
    flip: false,
  });
  
  wrong_answer_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -16.0 
  });
  
  Q5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q5',
    text: '5. If on day 1 you sample 7 mushrooms in the nearby fields and on day 2 you sample 37 mushrooms, on which day could you be more confident that the sample is a good representative of the number of blue and red mushrooms in the forest? ',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.31)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -17.0 
  });
  
  test_Q5 = new visual.Slider({
    win: psychoJS.window, name: 'test_Q5',
    size: [0.17, 0.015], pos: [0, (- 0.36)], units: 'height',
    labels: ["Day 1", "Day 2"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -18, 
    flip: false,
  });
  
  wrong_answer_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wrong_answer_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -19.0 
  });
  
  enter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.44)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  blue_mushroom_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blue_mushroom_5', units : 'height', 
    image : 'blue_mushroom.png', mask : undefined,
    ori : 350.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : true, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -21.0 
  });
  red_mushroom_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'red_mushroom_5', units : undefined, 
    image : 'red_mushroom.png', mask : undefined,
    ori : 10.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  event.clearEvents();
  startGame = 0;
  
  Instr1 = "BONUS:\n\nAt the end of the harvest season you will receive a bonus.\nThe amount of this bonus depends on how well you did during the game, and is calculated as follows:\n\nThe computer will randomly pick one of the harvest days and compare your decision that day to the correct answer. If your decision was exactly correct, you will receive a bonus of \u00a31.50. For each blue bag off, we will deduct 4 pence.\n\n\nPress the RIGHT arrow key to continue."
  
  Instr2 = "For example, if you decided to give 70 out of the 100 pickers a blue bag, but there were 88 blue mushrooms in the forest, you will receive \u00a31.50 - 18 x \u00a30.04 = \u00a30.78.\n\nYour bonus will never go below \u00a30.00.\n\nThis means that each and every day might determine your bonus at the end of the season.\n\n\nPress the RIGHT arrow key to continue."
  
  Instr3 = "Importanty, you can increase your chances of earning a high bonus by rating your confidence in your estimate:\n\nIf you rate your confidence as MEDIUM, the chance that the computer will pick that day will be TWO times as high as when you would rate your confidence as LOW.\n\nIf you rate your confidence as HIGH, the chance that the computer will pick that day will be THREE times as high as when you would rate your confidence as LOW.\n\nThus, if you think that on a certain day your estimate is close to the correct answer, you can increase the chance that the computer will pick that particular day by giving a higher confidence rating.\n\n\nPress the RIGHT arrow key to continue."
  
  Instr4 = "As said before, the game will consist of multiple harvest days and all days together represent the harvest season. The entire season consists of 3 blocks. After each block, you can take a short break before continuing with the next block.\n\n\n\nIf everything is clear, you can press ENTER to start the game."
  
  InstrDict = {"1": Instr1, "2": Instr2, "3": Instr3, "4": Instr4};
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
    text: 'Based on the sample you just saw, how many mushroom pickers should carry a BLUE bag today?\n',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.3], height: 0.035,  wrapWidth: 0.8, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  showEstimate = new visual.TextStim({
    win: psychoJS.window,
    name: 'showEstimate',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('blue'),  opacity: undefined,
    depth: -2.0 
  });
  
  estimation_slider = new visual.Slider({
    win: psychoJS.window, name: 'estimation_slider',
    size: [0.5, 0.05], pos: [0, 0.15], units: 'height',
    labels: [0, 100], ticks: [0, 100],
    granularity: 1.0, style: ["SLIDER"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  red_rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'red_rectangle', units : 'height', 
    width: [0.5, 0.04][0], height: [0.5, 0.04][1],
    ori: 0.0, pos: [0, 0.15],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  blue_rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'blue_rectangle', units : 'height', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color(undefined),
    fillColor: new util.Color('blue'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  sliderMarker = new visual.Rect ({
    win: psychoJS.window, name: 'sliderMarker', units : 'height', 
    width: [0.008, 0.05][0], height: [0.008, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  slider_text0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text0',
    text: '0',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.25), 0.11], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  slider_text100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text100',
    text: '100',
    font: 'Arial',
    units: 'height', 
    pos: [0.25, 0.11], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  confidence_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_text',
    text: 'Please rate your confidence in your decision:',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.1)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  confidence = new visual.Slider({
    win: psychoJS.window, name: 'confidence',
    size: [0.3, 0.02], pos: [0, (- 0.17)], units: 'height',
    labels: ["low", "medium", "high"], ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  space_to_submit_estimation = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_to_submit_estimation',
    text: 'Press ENTER to submit your response',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (- 0.4)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  shortBreak = new visual.TextStim({
    win: psychoJS.window,
    name: 'shortBreak',
    text: 'Great job!\n\nYou can now take a 2 minute break before we continue with the next part of the season. \n\nIf you wish to continue earlier, you can press ENTER to start immediately.',
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
  // Initialize components for Routine "instrBonus"
  instrBonusClock = new util.Clock();
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
var setupComponents;
function setupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    selected_practice_trials = shuffle(range(81,0));
    selected_practice_trials.length = 5;
    selected_trials = shuffle(range(81,0));
    selected_trials.length = 81;
    
    
    
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


var loop_instr;
function loop_instrLoopBegin(loop_instrLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_instr = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 200, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'loop_instr'
  });
  psychoJS.experiment.addLoop(loop_instr); // add the loop to the experiment
  currentLoop = loop_instr;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_instr.forEach(function() {
    const snapshot = loop_instr.getSnapshot();

    loop_instrLoopScheduler.add(importConditions(snapshot));
    loop_instrLoopScheduler.add(instructionsRoutineBegin(snapshot));
    loop_instrLoopScheduler.add(instructionsRoutineEachFrame(snapshot));
    loop_instrLoopScheduler.add(instructionsRoutineEnd(snapshot));
    loop_instrLoopScheduler.add(endLoopIteration(loop_instrLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_instrLoopEnd() {
  psychoJS.experiment.removeLoop(loop_instr);

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


var gotValidClick;
var checkboxes;
var clicked;
var bufferTime;
var clickClock;
var lastClickTime;
var personality_statementsComponents;
function personality_statementsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'personality_statements'-------
    t = 0;
    personality_statementsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    statements_left.setAlignHoriz('left');
    statements_right.setAlignHoriz('left');
    
    checkboxes = [box_1, box_2, box_3, box_4, box_5, box_6, box_7, box_8, box_9, box_10, box_11, box_12, box_13, box_14, box_15, box_16];
    clicked = [];
    for (var box, _pj_c = 0, _pj_a = checkboxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        box.setFillColor(new util.Color([1,1,1]));
    }
    bufferTime = 0.1;
    clickClock = new util.Clock();
    lastClickTime = 0;
    
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
    personality_statementsComponents.push(box_7);
    personality_statementsComponents.push(box_8);
    personality_statementsComponents.push(statements_right);
    personality_statementsComponents.push(box_9);
    personality_statementsComponents.push(box_10);
    personality_statementsComponents.push(box_11);
    personality_statementsComponents.push(box_12);
    personality_statementsComponents.push(box_13);
    personality_statementsComponents.push(box_14);
    personality_statementsComponents.push(box_15);
    personality_statementsComponents.push(box_16);
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
                if ((! _pj.in_es6(box.name, clicked))) {
                    box.setFillColor(new util.Color([1,0,0]));
                    clicked.append(box.name);
                } else {
                    if (_pj.in_es6(box.name, clicked)) {
                        box.setFillColor(new util.Color([1,1,1]));
                        clicked.splice(clicked.indexOf(box.name),1);
                    }
                }
            }
            lastClickTime = thisClickTime;
        }
    }
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

    
    // *statements_right* updates
    if (t >= 0.0 && statements_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      statements_right.tStart = t;  // (not accounting for frame time here)
      statements_right.frameNStart = frameN;  // exact frame index
      
      statements_right.setAutoDraw(true);
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

    
    // *box_13* updates
    if (t >= 0.0 && box_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_13.tStart = t;  // (not accounting for frame time here)
      box_13.frameNStart = frameN;  // exact frame index
      
      box_13.setAutoDraw(true);
    }

    
    // *box_14* updates
    if (t >= 0.0 && box_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_14.tStart = t;  // (not accounting for frame time here)
      box_14.frameNStart = frameN;  // exact frame index
      
      box_14.setAutoDraw(true);
    }

    
    // *box_15* updates
    if (t >= 0.0 && box_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_15.tStart = t;  // (not accounting for frame time here)
      box_15.frameNStart = frameN;  // exact frame index
      
      box_15.setAutoDraw(true);
    }

    
    // *box_16* updates
    if (t >= 0.0 && box_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_16.tStart = t;  // (not accounting for frame time here)
      box_16.frameNStart = frameN;  // exact frame index
      
      box_16.setAutoDraw(true);
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


function personality_statementsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'personality_statements'-------
    personality_statementsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "personality_statements" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trait_numbers;
var trait_list;
var trait_1;
var trait_2;
var fb1;
var fb2;
var fb3;
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
    clicked = clicked.join('_');
    trait_numbers = function () {
        var _pj_a = [], _pj_b = clicked.split("_");
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
    trait_list = ["Active", "Organized", "Energetic", "Responsible", "Outgoing", "Dependable", "Outspoken", "Efficient", "Sympathetic", "Imaginative", "Kind", "Insightful", "Affectionate", "Curious", "Warm", "Artistic"];
    trait_1 = trait_list[trait_numbers[0]];
    trait_2 = trait_list[trait_numbers[1]];
    fb1 = "According to your selection, the traits that characterize you the most are:\n\n";
    fb2 = " and ";
    fb3 = "\n\n\n\n\n\n\n\n\nPress ENTER to continue with the next part of the study.";
    fb = ((((fb1 + trait_1) + fb2) + trait_2) + fb3);
    expInfo["traits"] = trait_1 + " " + trait_2;
    
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
    event.clearEvents();
    
    progress_bar_size = (((window_x * 2) / 13) * Number.parseInt(currentPr));
    progress_bar_pos = ((- window_x) + ((((window_x * 2) / 13) * Number.parseInt(currentPr)) / 2));
    progress_text = (("Instructions: " + currentPr) + "/13");
    
    
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


var trials_parameters;
var thisIndex;
var nTotal;
var true_ratio;
var given_ratio;
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
    given_ratio = trials_parameters._trialList[thisIndex]["givenRatio"];
    
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


var markerPosition;
var blueRectangle_pos;
var blueRectangle_size;
var show_estimate_text;
var sliderfont;
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
    
    estimation_slider.markerPos = 50; // in slider units
    markerPosition = 0; // in height units
    blueRectangle_pos = -0.125;
    blueRectangle_size = 0.25;
    show_estimate_text = " ";
    
    
    estimation_slider._opacity = 0;
    confidence._bold = false; 
    sliderfont = "Helvetica";
    showEstimate.setFont(sliderfont);
    estimation_slider.reset()
    slider_text0.setFont(sliderfont);
    slider_text100.setFont(sliderfont);
    confidence.reset()
    // keep track of which components have finished
    firstEstimationComponents = [];
    firstEstimationComponents.push(how_many_mushrooms);
    firstEstimationComponents.push(showEstimate);
    firstEstimationComponents.push(estimation_slider);
    firstEstimationComponents.push(red_rectangle);
    firstEstimationComponents.push(blue_rectangle);
    firstEstimationComponents.push(sliderMarker);
    firstEstimationComponents.push(slider_text0);
    firstEstimationComponents.push(slider_text100);
    firstEstimationComponents.push(confidence_text);
    firstEstimationComponents.push(confidence);
    firstEstimationComponents.push(space_to_submit_estimation);
    
    firstEstimationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var markerPos;
var rating_completed;
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
    
    
    if ((estimation_slider.markerPos !== undefined)) {
        markerPos = estimation_slider.markerPos; 
        markerPosition = (markerPos - 50) / 200;
        blueRectangle_pos = ((- 0.25) + ((markerPos / 200) / 2));
        blueRectangle_size = markerPos / 200;
        show_estimate_text = Number.parseInt(markerPosition*200+50);
    }
    
    
    rating_completed = 0;
    if ((estimation_slider.getRating() !== undefined)) {
        rating_completed = 1;
        if ((confidence.getRating() !== undefined)) {
            rating_completed = 2;
        }
    }
    if (((_pj.in_es6("return", keys) || _pj.in_es6("num_enter", keys)) && (rating_completed === 2))) {
        estimation_slider.markerPos = undefined; 
        markerPosition = 0;
        show_estimate_text = " ";
        blueRectangle_pos = - 0.125;
        blueRectangle_size = 0.25;
        continueRoutine = false;
    }
    
    // *how_many_mushrooms* updates
    if (t >= 0.0 && how_many_mushrooms.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      how_many_mushrooms.tStart = t;  // (not accounting for frame time here)
      how_many_mushrooms.frameNStart = frameN;  // exact frame index
      
      how_many_mushrooms.setAutoDraw(true);
    }

    
    // *showEstimate* updates
    if (t >= 0.0 && showEstimate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      showEstimate.tStart = t;  // (not accounting for frame time here)
      showEstimate.frameNStart = frameN;  // exact frame index
      
      showEstimate.setAutoDraw(true);
    }

    
    if (showEstimate.status === PsychoJS.Status.STARTED){ // only update if being drawn
      showEstimate.setPos([markerPosition, 0.2], false);
      showEstimate.setText(show_estimate_text, false);
    }
    
    // *estimation_slider* updates
    if (t >= 0.0 && estimation_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      estimation_slider.tStart = t;  // (not accounting for frame time here)
      estimation_slider.frameNStart = frameN;  // exact frame index
      
      estimation_slider.setAutoDraw(true);
    }

    
    // *red_rectangle* updates
    if (t >= 0.0 && red_rectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_rectangle.tStart = t;  // (not accounting for frame time here)
      red_rectangle.frameNStart = frameN;  // exact frame index
      
      red_rectangle.setAutoDraw(true);
    }

    
    // *blue_rectangle* updates
    if (t >= 0.0 && blue_rectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blue_rectangle.tStart = t;  // (not accounting for frame time here)
      blue_rectangle.frameNStart = frameN;  // exact frame index
      
      blue_rectangle.setAutoDraw(true);
    }

    
    if (blue_rectangle.status === PsychoJS.Status.STARTED){ // only update if being drawn
      blue_rectangle.setPos([blueRectangle_pos, 0.15], false);
      blue_rectangle.setSize([blueRectangle_size, 0.04], false);
    }
    
    // *sliderMarker* updates
    if (t >= 0.0 && sliderMarker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderMarker.tStart = t;  // (not accounting for frame time here)
      sliderMarker.frameNStart = frameN;  // exact frame index
      
      sliderMarker.setAutoDraw(true);
    }

    
    if (sliderMarker.status === PsychoJS.Status.STARTED){ // only update if being drawn
      sliderMarker.setPos([markerPosition, 0.15], false);
    }
    
    // *slider_text0* updates
    if (t >= 0.0 && slider_text0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_text0.tStart = t;  // (not accounting for frame time here)
      slider_text0.frameNStart = frameN;  // exact frame index
      
      slider_text0.setAutoDraw(true);
    }

    
    // *slider_text100* updates
    if (t >= 0.0 && slider_text100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_text100.tStart = t;  // (not accounting for frame time here)
      slider_text100.frameNStart = frameN;  // exact frame index
      
      slider_text100.setAutoDraw(true);
    }

    
    // *confidence_text* updates
    if ((rating_completed > 0) && confidence_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_text.tStart = t;  // (not accounting for frame time here)
      confidence_text.frameNStart = frameN;  // exact frame index
      
      confidence_text.setAutoDraw(true);
    }

    
    // *confidence* updates
    if ((rating_completed > 0) && confidence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence.tStart = t;  // (not accounting for frame time here)
      confidence.frameNStart = frameN;  // exact frame index
      
      confidence.setAutoDraw(true);
    }

    
    // *space_to_submit_estimation* updates
    if ((rating_completed == 2) && space_to_submit_estimation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_to_submit_estimation.tStart = t;  // (not accounting for frame time here)
      space_to_submit_estimation.frameNStart = frameN;  // exact frame index
      
      space_to_submit_estimation.setAutoDraw(true);
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
var sample_deviance;
var bonus;
function firstEstimationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'firstEstimation'-------
    firstEstimationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    deviance = Number.parseInt((estimation_slider.getRating() - (true_ratio * 100)));
    abs_deviance = Math.abs(deviance);
    if ((startGame === 1)) {
        for (var iConfidence = 0, _pj_a = confidence.getRating(); (iConfidence < _pj_a); iConfidence += 1) {
            list_deviance.push(abs_deviance);
        }
        psychoJS.experiment.addData("cross_hair.ITI", crosshair_ITI);
        psychoJS.experiment.addData("seen_ratio", seen_ratio);
        psychoJS.experiment.addData("nMushrooms", String(nObservations));
        psychoJS.experiment.addData("nBlue", String(blue));
        psychoJS.experiment.addData("nRed", String(red));
        psychoJS.experiment.addData("estimation.rating", estimation_slider.getRating());
        psychoJS.experiment.addData("estimation.rt", estimation_slider.getRT());
        psychoJS.experiment.addData("confidence.response", confidence.getRating());
        psychoJS.experiment.addData("confidence.rt", confidence.getRT());
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
    
    
    // the Routine "firstEstimation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    progress_bar_size = (((window_x * 2) / 12) * 9);
    progress_bar_pos = ((- window_x) + ((((window_x * 2) / 12) * 9) / 2));
    
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
    test_Q4.reset()
    test_Q5.reset()
    blue_mushroom_5.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_5.setPos([(window_x - 0.2), (- 0.4)]);
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
    test_questionsComponents.push(Q4);
    test_questionsComponents.push(test_Q4);
    test_questionsComponents.push(wrong_answer_4);
    test_questionsComponents.push(Q5);
    test_questionsComponents.push(test_Q5);
    test_questionsComponents.push(wrong_answer_5);
    test_questionsComponents.push(enter_2);
    test_questionsComponents.push(blue_mushroom_5);
    test_questionsComponents.push(red_mushroom_5);
    
    test_questionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


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
    if ((test_Q2.getRating() === 1)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q2.getRating() === 2)) {
            show_false_2 = "Wrong answer. Please pick another option.";
        }
    }
    if ((test_Q3.getRating() === 2)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q3.getRating() === 1)) {
            show_false_3 = "Wrong answer. Please pick another option.";
        }
    }
    if ((test_Q4.getRating() === 3)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q4.getRating() < 3)) {
            show_false_4 = "Wrong answer. Please pick another option.";
        }
    }
    if ((test_Q5.getRating() === 2)) {
        rating_completed = (rating_completed + 1);
    } else {
        if ((test_Q5.getRating() === 1)) {
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
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    progress_bar_size = (((window_x * 2) / 13) * (Number.parseInt(currentInstr) + 9));
    progress_bar_pos = ((- window_x) + ((((window_x * 2) / 13) * (Number.parseInt(currentInstr) + 9)) / 2));
    progress_text = (("Instructions: " + (Number.parseInt(currentInstr)+9).toString()) + "/13");
    
    text_3.setText(InstrDict[currentInstr]);
    blue_mushroom_2.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_2.setPos([(window_x - 0.2), (- 0.4)]);
    progress_bar_fixed_3.setPos([0, 0.48]);
    progress_bar_fixed_3.setSize([(window_x * 2), 0.03]);
    progress_bar_3.setPos([progress_bar_pos, 0.48]);
    progress_bar_3.setSize([progress_bar_size, 0.03]);
    progress_IC_3.setText(progress_text);
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(key_resp_2);
    instructionsComponents.push(text_3);
    instructionsComponents.push(blue_mushroom_2);
    instructionsComponents.push(red_mushroom_2);
    instructionsComponents.push(progress_bar_fixed_3);
    instructionsComponents.push(progress_bar_3);
    instructionsComponents.push(progress_IC_3);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
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
    instructionsComponents.forEach( function(thisComponent) {
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
function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    if ((((key_resp_2.keys === "return") || (key_resp_2.keys === "num_enter")) && (Number.parseInt(currentInstr) === 4))) {
        currentInstr = (Number.parseInt(currentInstr) + 1);
    } else {
        if (((key_resp_2.keys === "right") && (Number.parseInt(currentInstr) === 4))) {
            currentInstr = Number.parseInt(currentInstr);
        } else {
            if (((key_resp_2.keys === "right") && (Number.parseInt(currentInstr) !== 4))) {
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
        if ((currentInstr === 5)) {
            loop_instr.finished = true;
        }
    }
    currentInstr = currentInstr.toString();
    startGame = 1;
    list_deviance = [];
    trial_index = 0;
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
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
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    event.clearEvents();
    
    //if (((((trials_parameters._snapshots[trial_index-1]["thisTrialN"] + 1) % trials_parameters._snapshots[trial_index-1]["nStim"]) === 0) && (trials_parameters._snapshots[trial_index-1]["nRemaining"] !== 0))) {
    //nPerLoop = trials_parameters._snapshots[trial_index-1]["nStim"] // when multiple reps
    nPerLoop = 27; // when one large rep, devided into multiple blocks
    if (((((trials_parameters._snapshots[trial_index-1]["thisTrialN"] + 1) % nPerLoop) === 0) && (trials_parameters._snapshots[trial_index-1]["nRemaining"] !== 0))) {
        continueRoutine = true;
    } else {
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

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (shortBreak.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      shortBreak.setAutoDraw(false);
    }
    timer_text = Math.floor(120 - t);
    
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

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
        if (((((trials_parameters._snapshots[trial_index-1]["thisTrialN"] + 1) % trials_parameters._snapshots[trial_index-1]["nStim"]) === 0) && (trials_parameters._snapshots[trial_index-1]["nRemaining"] !== 0))) {
            if ((t > 119)) {
                psychoJS.experiment.addData("shortBreak.secs", 120);
            } else {
                psychoJS.experiment.addData("shortBreak.secs", t);
            }
        }
    }
    
    
    key_resp_3.stop();
    return Scheduler.Event.NEXT;
  };
}


var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var end_text;
var _enter_to_end_allKeys;
var instrBonusComponents;
function instrBonusRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instrBonus'-------
    t = 0;
    instrBonusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text1 = "Great job! You have finished the harvest season.\n\n";
    text2 = "On the day that was selected by the computer, the number of mushroom pickers you sent into the forest carrying a BLUE bag deviated ";
    text3 = sample_deviance.toString();
    text4 = " bags from the correct answer.\nTherefore, your bonus will be \u00a31.50 - ";
    text5 = " x \u00a30.04 =\n\n\u00a3";
    text6 = bonus.toFixed(2);
    text7 = " \n\nPress ENTER to continue.";
    end_text = (((((((text1 + text2) + text3) + text4) + text3) + text5) + text6) + text7);
    
    bonus_text.setText(end_text);
    enter_to_end.keys = undefined;
    enter_to_end.rt = undefined;
    _enter_to_end_allKeys = [];
    blue_mushroom_4.setPos([(window_x - 0.3), (- 0.4)]);
    red_mushroom_4.setPos([(window_x - 0.2), (- 0.4)]);
    // keep track of which components have finished
    instrBonusComponents = [];
    instrBonusComponents.push(bonus_text);
    instrBonusComponents.push(enter_to_end);
    instrBonusComponents.push(blue_mushroom_4);
    instrBonusComponents.push(red_mushroom_4);
    
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


function instrBonusRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instrBonus'-------
    instrBonusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    enter_to_end.stop();
    // the Routine "instrBonus" was not non-slip safe, so reset the non-slip timer
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
  
  
  
  
  
  
  
  
  
  bonus = (1.5 - (abs_deviance * 0.04));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
