/*
Chapter 28 – Converting strings to integers and decimals

Convert the string "45.67" to a float and log it.
Parse an integer from the string "123px". What’s the result?
What happens when you try to parse "abc" to an integer? 
*/

// Convert the string "45.67" to a float and log it.
let nmbr = "45.67";
let floatNmbr = parseFloat(nmbr);
console.log("Floating nmbr:", floatNmbr);

let logResult = Math.log(nmbr);
console.log("Natural log of 10:", logResult);


// Parse an integer from the string "123px". What’s the result?
let value = parseInt("123px");
console.log("Result after parse: ",value);


// What happens when you try to parse "abc" to an integer? 
let result = parseInt("abc");
console.log(result); 
// result will be Nan (Not a number)

