/*
Chapter 21 – Changing case
Write a program to convert a user’s input into lowercase and display it.
Use toUpperCase() to normalize city names before comparison.
Explain the importance of changing case in user input validation. 
*/

// Converting into lowercase
let nameInput = prompt("Enter city name for converting it into lowercase?");
let lowerCaseInput = nameInput.toLowerCase();
console.log(lowerCaseInput)


// toUpperCase() for normalize city names before comparison.
let normalizedInput = nameInput.toUpperCase();
console.log(normalizedInput)

/*  Explanation:
User input is unprictable: user may input all characters in uppercase,lowercase or some letters in lowercase and some in uppercase.
while comparison, computer is case sensitive, it treats all letter different if the case is not handled
*/