/* 
Chapter 22 – Strings: measuring length and extracting parts

Write a script to extract the first 5 characters from the string "JavaScriptRocks".
Get the last character of any user-provided string.
Ask the user to input their full name and display the length of the input.
*/

//Write a script to extract the first 5 characters from the string "JavaScriptRocks".
// Method 1
let result = []
let firstFiveChar = "JavaScriptRocks";
for(let i=0; i<firstFiveChar.length; i++){
    if(i<5){
        result += firstFiveChar[i]; 
    }
}
console.log(result);

// Method 2
let firstFive = firstFiveChar.substring(0,5)
console.log("first five characters are: "+firstFive);


// Get last character of user provided string
let userInput = prompt("Enter string:")
// lastChar = userInput[userInput.length-1] // using length method
let lastChar = userInput.charAt(userInput.length - 1); // using charAt method
console.log("last character of your provided string: "+lastChar)


// Ask full name and display length

let fullName = prompt("Enter your full name?")
console.log("length of your full name is: "+fullName.length);
