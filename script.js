console.log(moment().format('LT'))
$(document).ready(function() {
    let $textArea = Array.from($('.textarea'));
    $textArea.forEach(element => {
      if (parseInt(element.getAttribute("time-value")) < moment().hour()) {
        element.classList.add("past");
      } else if (parseInt(element.getAttribute("time-value")) > moment().hour()) {
        element.classList.add("future");
      } else {
        element.classList.add("present");
      }
    });
    
});