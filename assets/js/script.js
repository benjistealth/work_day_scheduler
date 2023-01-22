// global elements / variables
var currentDay = $('#currentDay');
var schedulerEl = $('.scheduler');
var hourNow = moment().format("H");
// alert(hourNow);

var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// put todays date on the Jumbotron in requried format
var todaysDate = moment().format("dddd MMMM DDDo");
currentDay.text(todaysDate);

// create 3 divs to sit side by side & name them for visibility
var schedulerBlock = function () {
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
var schedulerDivs = function (timeArr) {
  for (i = 0; i < timeArr.length; i++) {
    var timeEl = $('<div>');
    var textEl = $('<div>');
    var buttonEl = $('<div>');
    var timeDetail = timeArr[i];
    var textDetail = "";
    timeEl.addClass('time-block row hour').text(timeDetail);
    textEl.addClass('textarea row description input').text(textDetail);
    // textEl.maybe add hour data from array to identify each text element
    buttonEl.attr("data-index", i);
    timeEl.attr("data-index", i);
    textEl.attr("data-index", i);
    buttonEl.addClass('fa-solid fa-floppy-disk center saveBtn row');
    timeEl.appendTo(timeBlock);
    textEl.appendTo(textBlock);
    buttonEl.appendTo(buttonBlock);
    textHour = i +9;
    // colour the text elements based on time
    console.log(hourNow + " - " + textHour);
    if (hourNow > textHour) { textEl.addClass('past');}
    else if (hourNow == textHour) { textEl.addClass("present");}
    else if (hourNow < textHour) {textEl.addClass("future"); }
  }
};




var saveDescription = function () {
  // variable for descriptoin on hour slot
  var hourSlotItem = $('input[name="description"]').val();
  console.log(hourSlotItem);
  hourSlotItem = JSON.stringify(hourSlotItem);
  localStorage.setItem("hourNote", hourSlotItem);
  // notify at top of screen
}

// create 3 divs for scheduler components
schedulerBlock();
// allow description to be editable
$('textarea *').attr('contenteditable', 'true');

// grab these divs after creation
var timeBlock = $('.time-block-box');
var textBlock = $('.textareaBox');
var buttonBlock = $('.saveBtnBox');

// insert time text btn divs
schedulerDivs(timeArr);

// allow text entry into selected div
var enterText = function () {
  $('.textareaBox *').attr('contentEditable', 'true');
  // $(".input").append("Added text<br>");
}

// textBlock.on('input', enterText);
// buttonBlock.on('click', saveDescription);

buttonBlock.on('click', function () {
  // alert('Save Button');
  saveDescription();
});

textBlock.on('click', function () {
  //alert('description box'); //check click is read
  enterText();
});


