/*
Chapter 31 – Getting the current date and time

Write a script to display the current date and time using new Date().
Extract and display only the year from the current date.
Display a greeting based on current time (AM/PM).
*/


// Write a script to display the current date and time using new Date()
let currentDate = new Date();
console.log("Current Date and Time: ",currentDate)


// Extract and display only the year from the current date.
let currentYear = currentDate.getFullYear()
console.log("Current year: ", currentDate)


// Display a greeting based on current time (AM/PM).
let currentTime = new Date();
let hours = currentTime.getHours();
let greeting;

if(hours<12) {
  greeting = "Good Morning!";
} 
else if (hours < 18) {
  greeting = "Good Afternoon!";
}
else {
  greeting = "Good Evening!";
}
console.log(greeting);
