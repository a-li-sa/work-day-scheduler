$(document).ready(function() {
  for (let i = 0; i < 9; i++) {
    const $container = $('.container');
    const $timeBlockDiv = $('<div>').addClass("time-block row");
    const workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
    let $hourDiv = $('<div>').addClass("text-right col-1 hour").text('\n' + workHours[i]);
    let $textArea = $('<textarea>').addClass("col").attr("time-value", (9+i));
    if ($textArea.attr("time-value") < moment().hour()) {
      $textArea.addClass("past");
    } else if ($textArea.attr("time-value") > moment().hour()) {
      $textArea.addClass("future");
    } else {
      $textArea.addClass("present");
    }
    let $button = $('<button>').addClass("col-1 saveBtn");
    const $saveIcon = $('<i>').addClass("fas fa-save");
    $timeBlockDiv.append($hourDiv, $textArea, $button);
    $button.append($saveIcon);
    $container.append($timeBlockDiv);
  }
});