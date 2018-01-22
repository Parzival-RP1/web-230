var header = require('../header.js');

console.log("\n");
console.log(header.display("Daniel", "Coleman", "Assignment 6.4"));
console.log("\n");


/* ============================================ 
; Title: Assignment 6.4
; Author: Richard Krasso / Daniel Coleman
; Date: 20 January 2018
; Modified By: Daniel Coleman
; Description: Create an object literal ticket with a nested object literal person
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    // ticket properties
    id: "789",
    name: "Kenna Lombar",
    dateCreated: "January 21, 2018",
    priority: "High",
    personId: "KLomb",

    person: {
        // person properties
        id: "654",
        firstName: "Ash",
        lastName: "Ketchum",
        jobTitle: "Pokemon Master",
    }
};

console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");

// end program