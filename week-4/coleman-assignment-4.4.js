var header = require('../header.js');

/* ============================================ 
; Title: Assignment 4.4
; Author: Richard Krasso / Daniel Coleman
; Date: 23 December 2017
; Modified By: Daniel Coleman
; Description: Arrays - Predicates / listing and sorting arrays of US States
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */
// HEADER START
console.log(header.display("Daniel", "Coleman", "Assignment 4.4"));
console.log("\n");

// start program // Unsorted Array of States
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
var x = states[2];


// function
function getValue(x, val) {
    return x > 8;
}
console.log(" --Original Array-- ");
for (var i = 0; i < states.length; i++) {
    if (!states[i]) continue;
    console.log(states[i]);
}

//sorts elements alphabetically - listed loop
console.log("\n");
console.log(" --Sorted Array-- ");
states.sort();
for (var i = 0; i < states.length; i++) {
    if (!states[i]) continue; // loop continues
    console.log(states[i]);
}

console.log("\n");
console.log(" --Selected value-- ");
var y = states.filter(getValue);


// Output

console.log(x);
return getValue(x, y);

// end program