$(document).ready(function() {
  const $containerEl = $('.container');
  for (let i = 0; i < 9; i++) {
    //create a div for each time block
    const $timeBlockDiv = $('<div>').addClass("time-block row");
    const workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    //create an hour div for each time block
    let $hourDiv = $('<div>').addClass("text-right col-1 hour").text('\n' + workHours[i]);
    //create a textarea for each corresponding hour
    //give each textarea an attribute equal to the hour of the day it corresponds to
    let $textArea = $('<textarea>').addClass("col").attr("time-value", (9+i));
    //
    if ($textArea.attr("time-value") < moment().hour()) {
      //if the time-value attribute is earlier than the current hour, then give it a class of past
      $textArea.addClass("past");
    } else if ($textArea.attr("time-value") > moment().hour()) {
      //if the time-value attribute is later than the current hour, then give it a class of future
      $textArea.addClass("future");
    } else {
      //if the time-value attribute is equal to the current hour, then give it a class of present
      $textArea.addClass("present");
    }
    //create a button for each time block
    let $button = $('<button>').addClass("col-1 saveBtn");
    //put an icon in each button
    const $saveIcon = $('<i>').addClass("fas fa-save");
    $button.append($saveIcon);
    //in order, append the hour div, textarea, and button to the time block
    $timeBlockDiv.append($hourDiv, $textArea, $button);
    //append the time block to the container div
    $containerEl.append($timeBlockDiv);
  }
  //this object will be saved in the local storage
  let scheduleObj = {
    '9':'',
    '10':'',
    '11':'',
    '12':'',
    '13':'',
    '14':'',
    '15':'',
    '16':'',
    '17':''
  }
  //get the object from the local storage and update the scheduleObj
  function init() {
    let storedSchedule = JSON.parse(localStorage.getItem('scheduleInput'));
    if (storedSchedule !== null) {
      scheduleObj = storedSchedule;
    }
    //change the text inside the textarea to the saved schedule object
    let $savedInputs = Array.from($('.col'));
    $savedInputs.forEach(element => {
      timeValue = element.getAttribute('time-value').toString();
      element.textContent = (scheduleObj[timeValue]);
    });
  }
  init();
  $('.saveBtn').on('click', function() {
    //this targets the textarea of the corresponding button and grabs its value, AKA its text content
    var scheduleInput = $(this).prev()[0].value;
    //this grabs the textarea's time-value attribute
    var timeValue = ($(this).prev()[0].getAttribute("time-value")); 
    scheduleObj[timeValue] = scheduleInput;
    localStorage.setItem('scheduleInput', JSON.stringify(scheduleObj));
  })
});