/*
Chapter 24 – Strings: finding a character at a location

Write a script to find the character at position 4 in the word “JavaScript”.
Ask a user for a string and a position; return the character at that position.
What happens when the index is out of bounds? Test it.
*/

// Write a script to find the character at position 4 in the word “JavaScript”.
let stringWord = "JavaScript";
// console.log(stringWord[4]) // method 1
console.log(stringWord.charAt(4)) // using charAt method


// Ask a user for a string and a position; return the character at that position.

let userString = prompt("Enter a string:");
let userPosition = prompt("Enter the position of the character you want:");
userPosition = parseInt(userPosition);


if (userPosition >= 0 && userPosition < userString.length){
  let userChar = userString.charAt(userPosition);
  console.log("The character at position " + userPosition + " is:", userChar);
}
else{
  console.log("Invalid position! Index is out of bounds.");
}


// What happens when the index is out of bounds? Test it.
let str = "JavaScript";

// Test with a valid index
console.log(str.charAt(4));  
console.log(str[4]);          

// Test with an out-of-bounds index (too high)
console.log(str.charAt(100)); 
console.log(str[100]);        

// Test with a negative index
console.log(str.charAt(-1));  
console.log(str[-1]);         
