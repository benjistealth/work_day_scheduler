// var currentDay = document.querySelector("#currentDay");
// var scheduler = document.querySelector(".scheduler");
var currentDay = $('#currentDay');
var schedulerEl = $('.scheduler');
var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
// put todays date on the Jumbotron
var todaysDate = moment().format("dddd MMMM DDDo");
currentDay.text(todaysDate);


var schedulerBlock = function (timeArr) {
  for (i = 0; i < timeArr.length; i++) {
    var listEl = $('<div>');
    var listDetail = timeArr[i];
    listEl.addClass('time-block').text(listDetail);
    listEl.appendTo(schedulerEl);
  }
};

schedulerBlock(timeArr);