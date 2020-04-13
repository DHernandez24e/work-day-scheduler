var currentDay = document.querySelector("#currentDay");
var currentTime = moment().format("H");

//Date at top of page, formatted as Day of Week, Month and Day of Month

currentDay.textContent = moment().format("dddd, MMMM Do");

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

//Timeblock Two
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

//Save/Load Functions

//Save 9AM Task
$("#row-one").on("click", "#save-one", function () {
    event.preventDefault();
    var textOne = $("#input-one").val().trim();

    localStorage.setItem("9AM Task", JSON.stringify(textOne));
});

//Load 9AM Task
$("#input-one").val(JSON.parse(localStorage.getItem("9AM Task")));

//Save 10AM Task
$("#row-two").on("click", "#save-two", function () {
    event.preventDefault();
    var textTwo = $("#input-two").val().trim();

    localStorage.setItem("10AM Task", JSON.stringify(textTwo));
});

//Load 10AM Task
$("#input-two").val(JSON.parse(localStorage.getItem("10AM Task")));

//Save 11AM Task
$("#row-three").on("click", "#save-three", function () {
    event.preventDefault();
    var textThree = $("#input-three").val().trim();

    localStorage.setItem("11AM Task", JSON.stringify(textThree));
});

//Load 11AM Task
$("#input-three").val(JSON.parse(localStorage.getItem("11AM Task")));

//Save 12PM Task
$("#row-four").on("click", "#save-four", function () {
    event.preventDefault();
    var textFour = $("#input-four").val().trim();

    localStorage.setItem("12PM Task", JSON.stringify(textFour));
});

//Load 12PM Task
$("#input-four").val(JSON.parse(localStorage.getItem("12PM Task")));

//Save 1PM Task
$("#row-five").on("click", "#save-five", function () {
    event.preventDefault();
    var textFive = $("#input-five").val().trim();

    localStorage.setItem("1PM Task", JSON.stringify(textFive));
});

//Load 1PM Task
$("#input-five").val(JSON.parse(localStorage.getItem("1PM Task")));

//Save 2PM Task
$("#row-six").on("click", "#save-six", function () {
    event.preventDefault();
    var textSix = $("#input-six").val().trim();

    localStorage.setItem("2PM Task", JSON.stringify(textSix));
});

//Load 2PM Task
$("#input-six").val(JSON.parse(localStorage.getItem("2PM Task")));

//Save 3PM Task
$("#row-seven").on("click", "#save-seven", function () {
    event.preventDefault();
    var textSeven = $("#input-seven").val().trim();

    localStorage.setItem("3PM Task", JSON.stringify(textSeven));
});

//Load 3PM Task
$("#input-seven").val(JSON.parse(localStorage.getItem("3PM Task")));

//Save 4PM Task
$("#row-eight").on("click", "#save-eight", function () {
    event.preventDefault();
    var textEight = $("#input-eight").val().trim();

    localStorage.setItem("4PM Task", JSON.stringify(textEight));
});

//Load 4PM Task
$("#input-eight").val(JSON.parse(localStorage.getItem("4PM Task")));

//Save 5PM Task
$("#row-nine").on("click", "#save-nine", function () {
    event.preventDefault();
    var textNine = $("#input-nine").val().trim();

    localStorage.setItem("5PM Task", JSON.stringify(textNine));
});

//Load 5PM Task
$("#input-nine").val(JSON.parse(localStorage.getItem("5PM Task")));

// I love jQuery, makes this so much easier