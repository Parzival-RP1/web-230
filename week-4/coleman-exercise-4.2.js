var header = require('../header.js');


/* ============================================ 
; Title: Exercise 4.2
; Author: Richard Krasso / Daniel Coleman
; Date: 23 December 2017
; Modified By: Daniel Coleman
; Description: Arrays - Listing
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program



// function / Array - 5 Fruits / for loop // pg 175 (JS JQ Book)
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"]
var arrayLength = fruits.length

function getFruit() {
    for (var i = 0; i < arrayLength; i++) {
        console.log(fruits[i]);
    }
}


// Output from the getFruit() function
getFruit();




// end program