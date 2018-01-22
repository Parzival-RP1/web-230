var header = require('../header.js');

console.log("\n");
console.log(header.display("Daniel", "Coleman", "Exercise 6.3"));
console.log("\n");


/* ============================================ 
; Title: Exercise 6.3
; Author: Richard Krasso / Daniel Coleman
; Date: 20 January 2018
; Modified By: Daniel Coleman
; Description: Object Literals
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}
*/


// start program

var ticket = {
    id: "456",
    name: "Arkansas vs. Texas",
    requestor: "Coleman",
};

console.log("{id: %s, name: %s, requester: %s}", ticket.id, ticket.name, ticket.requestor);


// end program