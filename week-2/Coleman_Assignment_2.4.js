var header = require('../header.js');


/* ============================================ 
; Title: Assignment 2.4
; Author: Daniel Coleman
; Date: 19 December 2017
; Modified By: Daniel Coleman
; Description: Creating and calling functions with multiple paramaters. Returning strings, parsed integers, and formatted values
;=========================================== */



// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/



// function(s) go here...


//Full Name Block
// OLD CODE - 
/* var firstName = "Daniel ";
var lastName = "Coleman";
var Name = fullName();
*/

function fullName(firstName, lastName) {
    return firstName + " " + lastName + "!";
}

//Create a function called dateWriter that accepts three parameters (year, month, and day) as arguments and returns a fully qualified JavaScript date object
function dateWriter(16, 11, 2017) {
    return dateSelect;
}

var today = new Date(day, month, year);
var dateSelect = today.toDateString();

/*
var day = today.setDate();
var month = today.setMonth();
var year = today.setFullYear();

SUGGESTED KRASSO CODE
function dateWriter(year, month, day) {
    return new Date(year, month, day);
}
console.log(dateWriter(2017, 12, 18));
*/

//Create a function called formatNumber that accepts two parameters (number and fixed position) as arguments and returns the formatted value
function formatNumber(45.859) {
    return temp;
}
var temp = temp.toFixed(1);


//Create a function called convertToInt that accepts one parameter (string) as an argument and returns the value as a parsed integer
function convertToInt(31) {
    return parseInt()
}

//Create a function called convertToFloat that accepts one parameter (string) as an argument and returns the value as a parsed float
function convertToFloat(1000000000.00) {
    return parseFloat()
}

// output 
console.log(header.display("Daniel", "Coleman", "Assignment 2.4"));
console.log('\nHello my name is ' + fullName("Daniel", "Coleman"));
console.log("\nToday's date is " + dateWriter() + " and the current temperature is " + formatNumber() + '.');
console.log("\nI am " + convertToInt() + " years old and my savings account goal is " + convertToFloat() + '.');
// end program
