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
    textEl.addClass('textarea row description input past present future').text(textDetail);
    // textEl.maybe add hour data from array to identify each text element
    buttonEl.addClass('fa-solid fa-floppy-disk center saveBtn row');
    // addClass('saveBtn row');
    timeEl.appendTo(timeBlock);
    textEl.appendTo(textBlock);
    buttonEl.appendTo(buttonBlock);
  }
};


//<i class="fas fa-save"></i>
// <i class="fa-solid fa-floppy-disk"></i>


var saveDescription = function () {
  // variable for descriptoin on hour slot
  var hourSlotItem = $('input[name="description"]').val();
  localStorage.setItem("hourNote", hourSlotItem);
}

// create 3 divs for scheduler components
schedulerBlock();

// grab these divs after creation
var timeBlock = $('.time-block-box');
var textBlock = $('.textareaBox');
var buttonBlock = $('.saveBtnBox');

// insert time text btn divs
schedulerDivs(timeArr);

// allow text entry into selected div
var enterText = (function () {
  let focusedElement;
  $(document).on('focus', 'input', function () {
    if (focusedElement == this) return; // already focused, return so the user can place the cursor at a specific entry point
    focusedElement = this;
    setTimeout(function () {
      focusedElement.select();
    }, 100); //Select all text in any field in focus for easy re-entry. The delay is a bit to allow the focus to “stick” to the selection.
  });
});

$( "input" ).select(function() {
  $( "div" ).text( "Something was selected" ).show().fadeOut( 1000 );
});
textBlock.on('input', enterText);
buttonBlock.on('click', saveDescription);


