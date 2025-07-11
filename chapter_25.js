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
