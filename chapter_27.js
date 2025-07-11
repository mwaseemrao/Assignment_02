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