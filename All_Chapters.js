/*
Chapter 20 – for loops nested
Write a nested for loop to generate all combinations of two arrays: firstNames = ["Lil", "Big"] and lastNames = ["Zzz", "Boom"].
Explain how many times the inner loop runs if the outer loop runs 3 times and the inner loop runs 2 times.
Modify the nested loop to only generate names where both indexes are not the same.
*/

firstNames = ["Lil", "Big"]
lastNames = ["Zzz", "Boom"]

console.log("Possible combinations")
for(let i = 0; i<firstNames.length; i++){
    for(let j=0; j<lastNames.length; j++){
        console.log(firstNames[i]+" "+lastNames[j])
    }
}

/* Explaination:
when outer loop run one then inner loop will runs 2 time,
so, inner loop will runs 6 times when outer loop runs 3 times.
*/


// Modification:

console.log("When Indexes are not same: ")

for(let y=0; y<firstNames.length; y++){
    for(let z=0; z<lastNames.length; z++){
        if(y!=z){
            console.log(firstNames[y]+" "+lastNames[z])
        }
    }
}


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
let userInput1 = prompt("Enter string:")
// lastChar = userInput[userInput.length-1] // using length method
let lastChar = userInput1.charAt(userInput1.length - 1); // using charAt method
console.log("last character of your provided string: "+lastChar)


// Ask full name and display length

let fullName = prompt("Enter your full name?")
console.log("length of your full name is: "+fullName.length);



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
let userInput3 = prompt("Enter string to check if hello word is present or not? ")
userInput = userInput3.toLowerCase();
if(userInput3.includes("hello")){
    console.log("Yes,it is exist")
}
else{
    console.log("Not exist")
}


// How does indexOf behave if the string isn’t found?
/*
It will return -1 in case of not found the string, -1 indicate that it is Clear and unambigious signal

*/


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



/*
Chapter 25 – Strings: replacing characters

Replace the word “bad” with “good” in the string "This is a bad example.".
Replace all instances of "JS" with "JavaScript" in a given sentence.
Use replace() to customize a template message like "Hello, NAME".
*/


// Replace the word “bad” with “good” in the string "This is a bad example.".
let mystring = "This is a bad example.";
let newString = mystring.replace("bad", "good");
console.log(newString);

// Replace all instances of "JS" with "JavaScript" in a given sentence.
let myString2 = "JS is fun. I love JS because JS is powerful language";
// let updatedString = myString2.replace(/JS/g, "JavaScript");
let updatedString = myString2.replaceAll("JS", "JavaScript");
console.log(updatedString);


// Use replace() to customize a template message like "Hello, NAME".
let template = `Hello, NAME`;
let name = `Waseem`;
let message = template.replace("NAME", name);
console.log(message);


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


/*
Chapter 27 – Generating random numbers

Generate a random number between 1 and 6 (like a dice roll).
Write a coin toss simulator using Math.random().
Simulate a random password generator that picks a number between 1000 and 9999.
*/

// Generate a random number between 1 and 6 (like a dice roll).
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("You rolled: " + diceRoll);


//Write a coin toss simulator using Math.random().
// Method 1
let coinToss = Math.round(Math.random())
if(coinToss == 0){
    console.log("Heads")
}else{
    console.log("Tails")
}
// Methods 2
// let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
// console.log("The coin landed on: " + coinToss);


// Simulate a random password generator that picks a number between 1000 and 9999.
let password = Math.floor(Math.random() * 9000) + 1000;
console.log("Your random 4-digit password is: " + password);



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
let result1 = parseInt("abc");
console.log(result1); 
// result will be Nan (Not a number)



/*
Chapter 29 – Converting strings to numbers, numbers to strings

Convert a number to a string and show its type using typeof.
Convert the string "2025" to a number and add 10.
Explain the difference between parseInt and Number() using examples.
*/

// Convert a number to a string and show its type using typeof.
let nmbr5 = 22;
let convertNmbr = nmbr5.toString();
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
let num6 = "12.999";
let convertNum2 = parseFloat(num6);
// console.log(typeof(convertNum2));
let roundNum2 = Math.round(convertNum2);
console.log("Convert into integer and round to 1: ",roundNum2);


// Ask the user to input a decimal and display it rounded to 3 decimal places.
let num3 = prompt("Enter a decimal number: ");
let num4 = parseFloat(num3);
let roundedDecimal = num4.toFixed(3);
console.log("Round to 3 decimal: ",roundedDecimal);



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



/*
Chapter 32 – Extracting parts of the date and time

Display the current day, month, and year separately.
Extract the hours and minutes from the current time.
Create a digital clock format like "13:45" using Date object methods.
*/


//Display the current day, month, and year separately.
let currentDate1 = new Date();
let currentDay = currentDate1.getDate();
console.log("Current day: ",currentDay)

let currentMonth = currentDate1.getMonth();
console.log("Current month: ", currentMonth)

let currentYear1 = currentDate1.getFullYear();
console.log("Current year: ", currentYear1);



//Extract the hours and minutes from the current time.
let hours1 = currentDate.getHours();
console.log("Current hours: ",hours1);

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


