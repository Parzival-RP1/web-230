var header = require('../header.js');

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/

console.log(header.display("Daniel", "Coleman", "Assignment 3.4"));

// test variable
var test = 6;

// for loop // 5.5.3 page 98
console.log('\n')
console.log("-- Displaying for loop --");

for (var x = 0; x <= 10; x++) {
    logMatch(test, randomNumber());

}

// while loop // 5.5.1 page 97
console.log('\n')
console.log("\n-- Displaying while loop --");

var test1 = 0
while (test1 < 10) {
    logMatch(test, randomNumber());
    test1++;
}


// Reused functions from exercise-3.2.js
//This function takes two arguments and returns True if they match and False if they do not.
function match(A, B) {
    if (A === B) {
        return true;
    } else {
        return false;
    }
}

//This function takes two arguments and logs a message to the console indicating the arguments do not match.
function logMismatch(C, D) {
    if (C != D) {
        return console.log(C + " does not match " + D + "!");
    } else {
        return console.log(C + " does match " + D + "!");
    }
}

//This function takes two arguments and logs a message to the console indicating arguments do match.
function logMatch(E, F) {
    if (E === F) {
        return console.log(E + " does match " + F + "!");
    } else {
        return logMismatch(E, F);
    }
}

// end program 
// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}