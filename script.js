$(document).ready(function() {
  for (let i = 0; i < 8; i++) {
    const $container = $('.container');
    const $timeBlockDiv = $('<div>').addClass("time-block row");
    let $hourDiv = $('<div>').addClass("text-right col-1 hour").text('\n' + (9+i));
    let $textArea = $('<textarea>').addClass("col").attr("time-value", (9+i));
    if ($textArea.attr("time-value") < m.hour()) {
      $textArea.addClass("past");
    } else if ($textArea.attr("time-value") > m.hour()) {
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
