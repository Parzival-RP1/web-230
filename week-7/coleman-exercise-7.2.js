var header = require('../header.js');

console.log("\n");
console.log(header.display("Daniel", "Coleman", "Exercise 7.2"));
console.log("\n");

/* ============================================ 
; Title: Exercise 7.2
; Author: Richard Krasso 
; Date: 27 January 2018
; Modified By: Daniel Coleman
; Description: Object Literals
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */
// From Example - Constructor Object
/* function Book(title, author) {

    this.title = title;

    this.author = author;

}


var books = [

    new Book("Don Quixote", "Miguel De Cervantes"),

    new Book("A Tale of Two Cities", "Charles Dickens"),

    new Book("The Lord of the Rings", "J.R.R. Tolkien")

];
*/

// start program
//Employee Function
function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

//Employee Array
var employee = [];

employee[0] = new Employee(1, "Thomas", "Edison", "Software Engineer");
employee[1] = new Employee(2, "Benjamin", "Franklin", "Programmer");
employee[2] = new Employee(3, "Nikola", "Tesla", "Project Manager");
employee[3] = new Employee(4, "Charles", "Babbage", "Product Manager");
employee[4] = new Employee(5, "Alexander", "Bell", "Business Analyst");

for (var i = 0; i < employee.length; i++) {

    var emp = employee[i]

    console.log(emp.id + " " + emp.firstName + " " + emp.lastName + " " + emp.title);

}

// end program