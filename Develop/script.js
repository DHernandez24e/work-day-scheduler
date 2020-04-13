var currentDay = document.querySelector("#currentDay");
var blockContainer = document.querySelector(".container");
var taskBox = document.querySelector(".taskbox");
var currentTime = moment().format("k");
//
currentDay.textContent = moment().format("dddd, MMMM Do");

console.log(currentTime);
// $(taskBox).on("click", function () {
//     var taskItem = $("<p>")
//     .addClass("m-auto");

//     .append(this);
//     console.log(taskItem);
// })



