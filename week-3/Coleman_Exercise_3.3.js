var header = require('../header.js');

// start program

/* ============================================ 
; Title: Assignment 3.3
; Author: Daniel Coleman
; Date: 19 December 2017
; Modified By: Daniel Coleman
; Description: Creating and calling functions with multiple paramaters. Multi Branch / Switch Block
;=========================================== */

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/

// Multiway branch of if statements (replace with a switch statement)

/*var eventKeyCode = 13;

if (eventKeyCode == 13) {
    console.log("The enter key was pressed"); 
} else (eventKeyCode == 16) {
    console.log("The shift key was pressed"); 
} else (eventKeyCode == 32) {
    console.log("The spacebar key was pressed")
} else (eventKeyCode == 8) {
    console.log("The backspace / delete key was pressed");
} else {
    console.log("Unrecognized key press"); 
}


                                    // BOOK NOTES - PAGES //
PAGE 164 @ JSCIPT JQUERY BOOK
or
PAGE 95 5.4 Conditionals Definitive Guide
*/


console.log(header.display("Daniel", "Coleman", "Exercise 3.3"));

console.log("\n // Expected output");

var eventKeyCode = 13;

switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The spacebar key was pressed");
        break;
    case 8:
        console.log("The backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press");
}

// end program
