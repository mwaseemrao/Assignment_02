/*
Chapter 23 – Strings: finding segments

Use indexOf to find the position of “dog” in "The lazy dog sleeps.".
Write a script that checks if the word “hello” exists in user input.
How does indexOf behave if the string isn’t found?
*/

// Use indexOf to find the position of “dog” in "The lazy dog sleeps.".
let findingIndex = "The lazy sleeps."
console.log("Index of 'dog' is: "+findingIndex.indexOf("dog"))


// Write a script that checks if the word “hello” exists in user input.
let userInput = prompt("Enter string to check if hello word is present or not? ")
userInput = userInput.toLowerCase();
if(userInput.includes("hello")){
    console.log("Yes,it is exist")
}
else{
    console.log("Not exist")
}


// How does indexOf behave if the string isn’t found?
/*
It will return -1 in case of not found the string, -1 indicate that it is Clear and unambigious signal

 */