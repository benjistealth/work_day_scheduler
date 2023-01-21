// global elements / variables
var currentDay = $('#currentDay');
var schedulerEl = $('.scheduler');

var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// put todays date on the Jumbotron in requried format
var todaysDate = moment().format("dddd MMMM DDDo");
currentDay.text(todaysDate);

// create 3 divs to sit side by side & name them for visibility
var schedulerBlock = function () {
  var timeBlock = $('<div>');
  timeBlock.addClass('time-block-box').text("time block");
  timeBlock.appendTo(schedulerEl);
  var textBlock = $('<div>');
  textBlock.addClass('textareaBox').text("text block");
  textBlock.appendTo(schedulerEl);
  var buttonBlock = $('<div>');
  buttonBlock.addClass('saveBtnBox').text("button block");
  buttonBlock.appendTo(schedulerEl);
}

// create time / text / button Elements within above divs
var schedulerDivs = function (timeArr) {
  for (i = 0; i < timeArr.length; i++) {
    var timeEl = $('<div>');
    var textEl = $('<div>');
    var buttonEl = $('<div>');
    var timeDetail = timeArr[i];
    timeEl.addClass('time-block row hour').text(timeDetail);
    textEl.addClass('textarea row description past present future');
    buttonEl.addClass('saveBtn row');
    timeEl.appendTo(timeBlock);
    textEl.appendTo(textBlock);
    buttonEl.appendTo(buttonBlock);
  }
};

// create 3 divs for scheduler components
schedulerBlock();

// grab these divs after creation
var timeBlock = $('.time-block-box');
var textBlock = $('.textareaBox');
var buttonBlock = $('.saveBtnBox');

// insert time text btn divs
schedulerDivs(timeArr);