var currentDay = document.querySelector("#currentDay");
var currentTime = moment().format("H");

//Date at top of page, formatted as Day of Week, Month and Day of Month

currentDay.textContent = moment().format("dddd, MMMM Do");

console.log(currentTime);

//Time-block variables

var timeblockOne = 9;
var timeblockTwo = 10;
var timeblockThree = 11;
var timeblockFour = 12;
var timeblockFive = 13;
var timeblockSix = 14;
var timeblockSeven = 15;
var timeblockEight = 16;
var timeblockNine = 17;

//Conditional CSS stylings for time
//Timeblock One
if (currentTime > timeblockOne) {
    $("#block-one").addClass("past");
}
else if (currentTime < timeblockOne) {
    $("#block-one").addClass("future");
}
else if (currentTime = timeblockOne) {
    $("#block-one").addClass("present");
}
//Timeblock TWo
if (currentTime > timeblockTwo) {
    $("#block-two").addClass("past");
}
else if (currentTime < timeblockTwo) {
    $("#block-two").addClass("future");
}
else if (currentTime = timeblockTwo) {
    $("#block-two").addClass("present");
}
//Timeblock Three
if (currentTime > timeblockThree) {
    $("#block-three").addClass("past");
}
else if (currentTime < timeblockThree) {
    $("#block-three").addClass("future");
}
else if (currentTime = timeblockThree) {
    $("#block-three").addClass("present");
}
//Timeblock Four
if (currentTime > timeblockFour) {
    $("#block-four").addClass("past");
}
else if (currentTime < timeblockFour) {
    $("#block-four").addClass("future");
}
else if (currentTime = timeblockFour) {
    $("#block-four").addClass("present");
}
//Timeblock Five
if (currentTime > timeblockFive) {
    $("#block-five").addClass("past");
}
else if (currentTime < timeblockFive) {
    $("#block-five").addClass("future");
}
else if (currentTime = timeblockFive) {
    $("#block-five").addClass("present");
}
//Timeblock Six
if (currentTime > timeblockSix) {
    $("#block-six").addClass("past");
}
else if (currentTime < timeblockSix) {
    $("#block-six").addClass("future");
}
else if (currentTime = timeblockSix) {
    $("#block-six").addClass("present");
}
//Timeblock Seven
if (currentTime > timeblockSeven) {
    $("#block-seven").addClass("past");
}
else if (currentTime < timeblockSeven) {
    $("#block-seven").addClass("future");
}
else if (currentTime = timeblockSeven) {
    $("#block-seven").addClass("present");
}
//Timeblock Eight
if (currentTime > timeblockEight) {
    $("#block-eight").addClass("past");
}
else if (currentTime < timeblockEight) {
    $("#block-eight").addClass("future");
}
else if (currentTime = timeblockEight) {
    $("#block-eight").addClass("present");
}
//Timeblock Nine
if (currentTime > timeblockNine) {
    $("#block-nine").addClass("past");
}
else if (currentTime < timeblockNine) {
    $("#block-nine").addClass("future");
}
else if (currentTime = timeblockNine) {
    $("#block-nine").addClass("present");
}