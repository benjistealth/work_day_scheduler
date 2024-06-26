// global elements / variables
var currentDayEl = $('#currentDay');
var timeNowEl = $('#timeNow');
var containerEl = $('.container');
var saveNotifyEl = $('.saveNotify');
var hourNow = moment().format("H"); // 24hour format hour number only
// array of timeslots to build scheduler from
var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// put todays date on the Jumbotron
const todaysDate = new Date().toDateString();
currentDayEl.text(todaysDate);

// put the current time beneath the date
const currentDate = new Date();
const timestamp = currentDate.getTime();
const timenow = currentDate.toLocaleTimeString()
timeNowEl.text(timenow);

// creates divs to store the scheduler components
var schedulerBlock = function () {
  // create save notify div
  var saveNotify = $('<p>').addClass('saveNotify container');
  var saveNotifyText = "";
  saveNotify.text(saveNotifyText);
  saveNotify.appendTo(containerEl);
  // create a div to hang the scheduler from
  var schedulerEl = $('<div>').addClass('scheduler container');
  schedulerEl.appendTo(containerEl);
// create 3 divs to sit side by side & name them for visibility
  var timeBlock = $('<div>');
  timeBlock.addClass('time-block-box');
  timeBlock.appendTo(schedulerEl);
  var textBlock = $('<div>');
  textBlock.addClass('textareaBox');
  textBlock.appendTo(schedulerEl);
  var buttonBlock = $('<div>');
  buttonBlock.addClass('saveBtnBox');
  buttonBlock.appendTo(schedulerEl);
}

// create time / text / button Elements within above divs
var schedulerDivs = function (timeArr, recalledAppts) {
  // when no saved data populate with empty strings
  if (JSON.parse(localStorage.getItem("appointments"))) { var recalledAppts = JSON.parse(localStorage.getItem("appointments")); }
  else { recalledAppts = ["", "", "", "", "", "", "", "", ""]; }
  for (i = 0; i < timeArr.length; i++) {
    var timeEl = $('<div>');
    var textEl = $('<div>');
    var buttonEl = $('<div>');
    var timeDetail = timeArr[i];
    var textDetail = recalledAppts[i];
    timeEl.addClass('time-block row hour').text(timeDetail);
    textEl.addClass('textarea row description input').text(textDetail);
    textEl.attr("data-index", i);
    buttonEl.addClass('fa-solid fa-floppy-disk saveBtn row');
    timeEl.appendTo(timeBlock);
    textEl.appendTo(textBlock);
    buttonEl.appendTo(buttonBlock);
    // convert index to 24 hour time equiv for compare
    textHour = i + 9;
    // colour the text elements based on time
    if (hourNow > textHour) { textEl.addClass('past'); }
    else if (hourNow == textHour) { textEl.addClass("present"); }
    else if (hourNow < textHour) { textEl.addClass("future"); }
  }
};

// save data in all text blocks to local storage
// this function resets the array so in order to retain scores
// we need to grab data from storage, amend and re-save
var saveDescription = function () {
  var saveArr = [];
  for (let i = 0; i < timeArr.length; i++) {
    // variable for descriptoin on hour slot
    var appointment = $('.textareaBox').children().eq(i).text();
    saveArr[i] = appointment;
    localStorage.setItem("appointments", JSON.stringify(saveArr));
  }
  // notify at top of page beneath jumbotron
  var saveNotify = $('.saveNotify');
  var localStorageText = $('<span>');
  localStorageText.addClass('localStorage');
  localStorageText.text('LocalStorage');
  saveNotify.text("Appointment added to");
  saveNotify.append(localStorageText);
  setTimeout(function () {
    saveNotify.text("");
  }, 800);
}

// create 3 divs for scheduler components
schedulerBlock();
// grab these divs after creation
var timeBlock = $('.time-block-box');
var textBlock = $('.textareaBox');
var buttonBlock = $('.saveBtnBox');

// insert time / text / btn divs & populate stored data
schedulerDivs(timeArr);

// any save button becomes a save event
buttonBlock.on('click', function () {
  // any save button saves all appointments
  saveDescription();
});

// any description box becomes a text box
textBlock.on('click', function () {
  // allow text entry into selected text div
  $('.textareaBox *').attr('contentEditable', 'true');
});
