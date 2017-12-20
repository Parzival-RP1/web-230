var header = require('../header.js');


/* ============================================ 
; Title: Assignment 2.4
; Author: Daniel Coleman
; Date: 20 December 2017
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
function fullName(firstName, lastName) {
    return "Hello my name is " + firstName + " " + lastName + "!";

}
//Create a function called formatNumber that accepts two parameters (number and fixed position) as arguments and returns the formatted value
function formatNumber(temp, position) {
    return temp.toFixed(position);
}

//Create a function called dateWriter that accepts three parameters (year, month, and day) as arguments and returns a fully qualified JavaScript date object
function dateWriter(month, day, year) {
    return "Today's date is " + month + "/" + day + "/" + year + " and the current temperature is " + formatNumber(45.859, 1) + ".";
}

//Create a function called convertToInt that accepts one parameter (string) as an argument and returns the value as a parsed integer
function convertToInt(age) {
    var convertInt = Number(age);
    return "I am " + convertInt + " years old and my savings account goal is $" + convertToFloat(10000000) + ".";
}

//Create a function called convertToFloat that accepts one parameter (string) as an argument and returns the value as a parsed float
function convertToFloat(numberToConvert) {
    return parseFloat(numberToConvert)
}

/* output OLD
console.log(header.display("Daniel", "Coleman", "Assignment 2.4"));
console.log('\nHello my name is ' + fullName("Daniel", "Coleman"));
console.log("\nToday's date is " + dateWriter(19, 11, 2017) + " and the current temperature is " + formatNumber(45.859, 1) + '.');
console.log("\nI am " + convertToInt(31) + " years old and my savings account goal is " + convertToFloat(1000000000.00) + '.');
*/

// output

console.log(header.display("Daniel", "Coleman", "Assignment 2.4"));
console.log('\n');
console.log(fullName("Daniel", "Coleman"));
console.log('\n');
console.log(dateWriter(12, 20, 2017));
console.log('\n');
console.log(convertToInt("31"));

// end program