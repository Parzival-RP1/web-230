/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: Daniel Coleman
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Daniel";
var myLastName = "Coleman";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n" +
    assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);


// start of program - your code goes below this line

//Employee Record #1
var empFirstName = "John";
var empMiddleName = "Kent";
var empLastName = "Coleman";
var empAddress = "123 6th St. Melbourne, FL";

var empPay = 10.4589;
var empPayRate = empPay.toFixed(2);


var hireDate = new Date();
var date = hireDate.getDay(19);
var month = hireDate.getMonth(3);
var year = hireDate.getFullYear(2009);
var empMonthDateYear = month + "/" + date + "/" + year;

var employeeRecord1 = "\nFirst Name: " + empFirstName + "\nMiddle Name: " + empMiddleName + "\nLast Name: " + empLastName + "\nAddress: " + empAddress + "\nPayRate: " + empPayRate + "\nHireDate: " + empMonthDateYear;
console.log(employeeRecord1);


//Employee Record #2
var empFirstName = "Ashley";
var empMiddleName = "Marie";
var empLastName = "Helms";
var empAddress = "171 Pilgrim Avenue Chevy Chase, MD";

var empPay = 17.829;
var empPayRate = empPay.toFixed(2);


var hireDate = new Date();
var date = hireDate.getDay(19);
var month = hireDate.getMonth(3);
var year = hireDate.getFullYear(2009);
var empMonthDateYear = month + "/" + date + "/" + year;

var employeeRecord2 = "\nFirst Name: " + empFirstName + "\nMiddle Name: " + empMiddleName + "\nLast Name: " + empLastName + "\nAddress: " + empAddress + "\nPayRate: " + empPayRate + "\nHireDate: " + empMonthDateYear;
console.log(employeeRecord2);


//Employee Record #3
var empFirstName = "Maranda";
var empMiddleName = "Jo";
var empLastName = "Moore";
var empAddress = "70 Bowman St. South Windsor, CT";

var empPay = 14.829;
var empPayRate = empPay.toFixed(2);


var hireDate = new Date();
var date = hireDate.getDay(19);
var month = hireDate.getMonth(3);
var year = hireDate.getFullYear(2009);
var empMonthDateYear = month + "/" + date + "/" + year;

var employeeRecord3 = "\nFirst Name: " + empFirstName + "\nMiddle Name: " + empMiddleName + "\nLast Name: " + empLastName + "\nAddress: " + empAddress + "\nPayRate: " + empPayRate + "\nHireDate: " + empMonthDateYear;
console.log(employeeRecord3);


//Employee Record #4
var empFirstName = "Jamie";
var empMiddleName = "Ann";
var empLastName = "Duke";
var empAddress = "44 Shirley Ave.West Chicago, IL";

var empPay = 22.969;
var empPayRate = empPay.toFixed(2);


var hireDate = new Date();
var date = hireDate.getDay(19);
var month = hireDate.getMonth(3);
var year = hireDate.getFullYear(2009);
var empMonthDateYear = month + "/" + date + "/" + year;

var employeeRecord4 = "\nFirst Name: " + empFirstName + "\nMiddle Name: " + empMiddleName + "\nLast Name: " + empLastName + "\nAddress: " + empAddress + "\nPayRate: " + empPayRate + "\nHireDate: " + empMonthDateYear;
console.log(employeeRecord4);

//Employee Record #5
var empFirstName = "Josh";
var empMiddleName = "Allen";
var empLastName = "Rink";
var empAddress = "514 S. Magnolia St. Orlando, FL";

var empPay = 21.939;
var empPayRate = empPay.toFixed(2);


var hireDate = new Date();
var date = hireDate.getDay(19);
var month = hireDate.getMonth(3);
var year = hireDate.getFullYear(2009);
var empMonthDateYear = month + "/" + date + "/" + year;

var employeeRecord5 = "\nFirst Name: " + empFirstName + "\nMiddle Name: " + empMiddleName + "\nLast Name: " + empLastName + "\nAddress: " + empAddress + "\nPayRate: " + empPayRate + "\nHireDate: " + empMonthDateYear;
console.log(employeeRecord5);

// end of program