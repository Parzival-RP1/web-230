var header = require('../header.js');


/* ============================================ 
; Title: Exercise 4.3
; Author: Richard Krasso / Daniel Coleman
; Date: 23 December 2017
; Modified By: Daniel Coleman
; Description: Filtering data with Arrays / Adding and Iterating using conditionals
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program


// Var Elements / vehicles + vehicle Array
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];


console.log(header.display("Daniel", "Coleman", "Exercise 4.3"));

console.log("\n" + "-- DISPLAYING ARRAY ITEMS --");
vehicles.forEach(function(element) {
    console.log(element);
});

// function / Vehicle Array / pg 154 JS Definitive guide book / pg 536 JS JQ book
function getValue(arr, val) {

    console.log("\n" + "-- SELECTED VALUE --")
    arr.forEach(function(element) {
        if (element == val) {
            console.log(element);
        }
    });
}

// Output
getValue(vehicles, "Motorcycle");
getValue(vehicles, "Bus");


// end program