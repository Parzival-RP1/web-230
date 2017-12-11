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

var firstName = "Daniel ";
var lastName = "Coleman";
var fullName = firstName + lastName;

function fullName() {

}

var dateSelector = new Date();
var date = dateSelector.getDay(10);
var month = dateSelector.getMonth(0);
var year = dateSelector.getFullYear(2017);
var MonthDateYear = month + "/" + date + "/" + year;
var dateWriter = MonthDateYear;

function dateWriter() {

}

var tempFar = 97.829;
var temperature = tempFar.toFixed(1);

function formatNumber() {

}

function convertToInt() {

}

function convertToFloat() {

}

// output 
console.log(header.display("Daniel", "Coleman", "Assignment 2.4"));
console.log('\nHello my name is ' + fullName + '!');
console.log("\nToday's date is " + dateWriter + " and the current temperature is " + tempFar);






// end program