/*
Chapter 26 – Rounding numbers

Demonstrate rounding 2.6 using Math.round, Math.floor, and Math.ceil.
Ask the user to input a number and round it to the nearest integer.
Compare Math.floor(-2.9) and Math.ceil(-2.9). Explain the difference.
*/

// Demonstrate rounding 2.6 using Math.round, Math.floor, and Math.ceil.
let number = 2.6
console.log("Round: "+Math.round(number))
console.log("Floor: "+Math.floor(number))
console.log("Ceil: "+Math.ceil(number))


// Ask the user to input a number and round it to the nearest integer.
let inputNumber = prompt("Enter a number?")
let num2 = parseFloat(inputNumber)
console.log("Round to the nearest number: "+Math.round(num2))


// Compare Math.floor(-2.9) and Math.ceil(-2.9). Explain the difference.
console.log(Math.floor(-2.9))
console.log(Math.ceil(-2.9))
/* 
Math.floor(-2.9) it will return the -3, because it is lower number in negative side
Math.ceil(-2.9) it will return -2, because it big number towards 0.
*/