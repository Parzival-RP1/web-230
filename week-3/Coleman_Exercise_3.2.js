var header = require('../header.js');

/* ============================================ 
; Title: Assignment 3.2
; Author: Daniel Coleman
; Date: 19 December 2017
; Modified By: Daniel Coleman
; Description: Creating and calling functions with multiple paramaters. match, logMistmatch, logMatch, if...else, if.
;=========================================== */

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/

// functions 

//Create a function called match
//This function takes two arguments and returns True if they match and False if they do not.
function match(A, B) {
    if (A === B) {
        return true;
    } else {
        return false;
    }
}

//Create a function called logMismatch
//This function takes two arguments and logs a message to the console indicating the arguments do not match.
function logMismatch(C, D) {
    if (C != D) {
        return console.log(C + " and " + D + " do not match!");
    } else {
        return console.log(C + " and " + D + " do match!");
    }
}

//Create a function called logMatch
//This function takes two arguments and logs a message to the console indicating arguments do match.
function logMatch(E, F) {
    if (E === F) {
        return console.log(E + " and " + F + " do match!");
    } else {
        return false;
    }
}

// six (6) test variables 
var A = "cat";
var B = "dog";
var C = "blue";
var D = "blue";
var E = "bike";
var F = "car";


// Output from the match() function... 
console.log(header.display("Daniel", "Coleman", "Assignment 3.2"));
console.log("\n // Output from the match() function");
console.log(match("A", "B"));
console.log(match(2, 2));


// Conditional "if...else" statements. Include checks for all six (6) test variables 
console.log("\n // output from the if...else blocks");
logMismatch(A, B);
logMatch(C, D);
logMismatch(E, F);


// end program
