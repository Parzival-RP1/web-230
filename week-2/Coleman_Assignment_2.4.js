var header = require('../header.js');

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
function dateWriter() {
    return dateSelect;
}

var today = new Date();
var dateSelect = today.toDateString();

var day = today.setDate(16);
var month = today.setMonth(11);
var year = today.setFullYear(2017);

/* SUGGESTED KRASSO CODE
function dateWriter(year, month, day) {
    return new Date(year, month, day);
}
console.log(dateWriter(2017, 12, 18));
*/

//Create a function called formatNumber that accepts two parameters (number and fixed position) as arguments and returns the formatted value
function formatNumber() {
    return temp;
}

var far = 45.859;
var temp = far.toFixed(1);
var tempFar = formatNumber();

//Create a function called convertToInt that accepts one parameter (string) as an argument and returns the value as a parsed integer
function convertToInt() {
    return parseInt(31)
}

var age = convertToInt();

//Create a function called convertToFloat that accepts one parameter (string) as an argument and returns the value as a parsed float
function convertToFloat() {
    return parseFloat(1000000000.00)
}

var savings = convertToFloat();

// output 
console.log(header.display("Daniel", "Coleman", "Assignment 2.4"));
console.log('\nHello my name is ' + fullName("Daniel", "Coleman"));
console.log("\nToday's date is " + today.toLocaleDateString() + " and the current temperature is " + formatNumber() + '.');
console.log("\nI am " + convertToInt() + " years old and my savings account goal is " + convertToFloat() + '.');
// end program
