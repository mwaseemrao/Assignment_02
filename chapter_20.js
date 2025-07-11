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