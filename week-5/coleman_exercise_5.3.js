var header = require('../header.js');

console.log("\n");
console.log(header.display("Daniel", "Coleman", "Exercise 5.3"));

var header = require('../header.js');
console.log("\n");


/* ============================================ 
; Title: Exercise 5.3
; Author: Richard Krasso / Daniel Coleman
; Date: 20 January 2018
; Modified By: Daniel Coleman
; Description: ES5 Built in Functions
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program - Contemporary Composers Rated from #1-#5

var composers = [{
        firstName: "John",
        lastName: "Williams",
        genre: "Contemporary",
        rating: 9
    },
    {
        firstName: "Hans",
        lastName: "Zimmer",
        genre: "Contemporary",
        rating: 7
    },
    {
        firstName: "Ennio",
        lastName: "Morricone",
        genre: "Contemporary",
        rating: 6
    },
    {
        firstName: "Howard",
        lastName: "Sharce",
        genre: "Contemporary",
        rating: 5
    },
    {
        firstName: "Samantha",
        lastName: "Bouquin",
        genre: "Contemporary",
        rating: 3
    }
];

composers.forEach(function(composer) {
    console.log(
        "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    );
})

// end program