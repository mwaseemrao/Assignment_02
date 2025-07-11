/*
Chapter 30 – Controlling the length of decimals

Use .toFixed(2) to display only 2 decimal places of 123.45678.
How would you convert "12.999" to a number and round it to 1 decimal?
Ask the user to input a decimal and display it rounded to 3 decimal places.
*/


// Use .toFixed(2) to display only 2 decimal places of 123.45678.
let num1 = 123.45678;
console.log("fixed 2 digits after decimal: ",num1.toFixed(2))


// How would you convert "12.999" to a number and round it to 1 decimal?
let num2 = "12.999";
let convertNum2 = parseFloat(num2);
// console.log(typeof(convertNum2));
let roundNum2 = Math.round(convertNum2);
console.log("Convert into integer and round to 1: ",roundNum2);


// Ask the user to input a decimal and display it rounded to 3 decimal places.
let num3 = prompt("Enter a decimal number: ");
let num4 = parseFloat(num3);
let roundedDecimal = num4.toFixed(3);
console.log("Round to 3 decimal: ",roundedDecimal);