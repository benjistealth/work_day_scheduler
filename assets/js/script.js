// var currentDay = document.querySelector("#currentDay");
// var scheduler = document.querySelector(".scheduler");
var currentDay = $('#currentDay');
var scheduler = $('.scheduler');

var todaysDate = moment().format("dddd DD.MM.YYYY");
currentDay.text(todaysDate);


var schedulerBlock = function (name, date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(skillsListEl);
  };
  