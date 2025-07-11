/*
Chapter 29 – Converting strings to numbers, numbers to strings

Convert a number to a string and show its type using typeof.
Convert the string "2025" to a number and add 10.
Explain the difference between parseInt and Number() using examples.
*/

// Convert a number to a string and show its type using typeof.
let nmbr = 22;
let convertNmbr = nmbr.toString();
console.log(typeof(convertNmbr));


//Convert the string "2025" to a number and add 10.
let nmbr2 = "2025";
let convertNmbr2 = parseInt(nmbr2);
console.log(convertNmbr2+10);


// Explain the difference between parseInt and Number() using examples.
// parseInt()
// Parses only the integer part of a string.
console.log("Using parseInt method")
console.log(parseInt("123abc"));
console.log(parseInt("123.45"));
console.log(parseInt("abc123"));
console.log(parseInt("10", 2));   // ✅ 2  (binary to decimal)


// Number()
// Parses only the integer part of a string.
console.log("using Number()");
console.log(Number("123abc"));
console.log(Number("123.45"));
console.log(Number("10"));
console.log(Number("   42  "));