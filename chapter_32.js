/*
Chapter 32 – Extracting parts of the date and time

Display the current day, month, and year separately.
Extract the hours and minutes from the current time.
Create a digital clock format like "13:45" using Date object methods.
*/


//Display the current day, month, and year separately.
let currentDate = new Date();
let currentDay = currentDate.getDate();
console.log("Current day: ",currentDay)

let currentMonth = currentDate.getMonth();
console.log("Current month: ", currentMonth)

let currentYear = currentDate.getFullYear();
console.log("Current year: ", currentYear);



//Extract the hours and minutes from the current time.
let hours = currentDate.getHours();
console.log("Current hours: ",hours);

let minutes = currentDate.getMinutes();
console.log("Current minutes: ",minutes)


//Create a digital clock format like "13:45" using Date object methods.

let hours2 = currentDate.getHours();
let minutes2 = currentDate.getMinutes();
if (minutes2 < 10) {
  minutes2 = "0" + minutes2;
}
let time = hours2 + ":" + minutes2;
console.log("Current Time: " + time);


