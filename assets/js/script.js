// var currentDay = document.querySelector("#currentDay");
// var scheduler = document.querySelector(".scheduler");
var currentDay = $('#currentDay');
var schedulerEl = $('.scheduler');
var timeBlock = $('.time-block');
var textBlock = $('.textarea');
var buttonBlock = $('.saveBtn');
var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
// put todays date on the Jumbotron
var todaysDate = moment().format("dddd MMMM DDDo");
currentDay.text(todaysDate);

// create 3 divs to sit side by side
var schedulerBlock = function () {
  var timeBlock = $('<div>');
  timeBlock.addClass('time-block').text("time div");
  timeBlock.appendTo(schedulerEl);
  
  var textBlock = $('<div>');
  textBlock.addClass('textarea').text("text div");
  textBlock.appendTo(schedulerEl);
  var buttonBlock = $('<div>');
  buttonBlock.addClass('saveBtn').text("button div");
  buttonBlock.appendTo(schedulerEl);
}

// create time / text / button Elements within above divs
var schedulerDivs = function (timeArr) {
  for (i = 0; i < timeArr.length; i++) {
    var timeEl = $('<div>');
    var textEl = $('<div>');
    var listDetail = timeArr[i];
    timeEl.addClass('time-block').text(listDetail);
    textEl.addClass('textarea');
    timeEl.appendTo(timeBlock);
    textEl.appendTo(textBlock);
  }
};


// schedulerEl.append('<div>' + list[i] + '<span class="picker" 
// id="save" onclick="saveEntry()"> (X)</span></div>');

// var textArea = function () {
//   for (i = 0; i < timeArr.length; i++) {
//     var textEl = $('<div>');
//     textEl.addClass('textarea');
//     textEl.appendTo(schedulerEl);
//   }
// };

schedulerBlock();
// textArea();