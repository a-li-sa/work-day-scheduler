<div align="center">

# 05 Third-Party APIs: Work Day Scheduler

Built with HTML, CSS, Moment.js, and jQuery.

URL of the deployed application: https://a-li-sa.github.io/work-day-scheduler/

URL of the GitHub repository: https://github.com/a-li-sa/work-day-scheduler

</div>

## Table of Contents 

* [Description](#description)
* [View](#view)
* [Usage](#usage)
* [Built With](#built-with)
* [Credits](#credits)
* [License](#license)

## Description

I created a simple calendar that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. The Moment.js library was used to work with date and time.

For any employee with a busy schedule, this application can add important events to a daily planner to manage their time effectively.

### Acceptance Criteria 

GIVEN I am using a daily planner to create a schedule
- [x] WHEN I open the planner THEN the current day is displayed at the top of the calendar
- [x] WHEN I scroll down THEN I am presented with timeblocks for standard business hours
- [x] WHEN I view the timeblocks for that day THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- [x] WHEN I click into a timeblock THEN I can enter an event
- [x] WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
- [x] WHEN I refresh the page THEN the saved events persist

## View

To view the website, you can click [here](https://a-li-sa.github.io/work-day-scheduler/).

## Usage

The top of the page shows the current date and live, updating time. When the user scrolls down to the timeblocks, the current hour is colored red, the past hours are colored gray, and the future hours are colored green. 

When the user types in the text area and presses the save button next to the text area, the text inside will be saved to the page and local browser.

![](homework5.gif)


## Built With

* [HTML](https://html.spec.whatwg.org/) - Markup language used to define the structure of webpage.
* [CSS](https://www.w3.org/Style/CSS/) - Style sheet language used to add styling to markup languages like HTML. 
* [Moment.js](https://momentjs.com/) - JavaScript library that helps with managing dates and time in the browser.
* [jQuery](https://jquery.com/) - JavaScript library that simplifies HTML client-side scripting.

## Credits

The HTML and CSS were provided by 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

## License 

MIT License Copyright (c) 2020 Alisa Poon