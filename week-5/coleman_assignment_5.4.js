var header = require('../header.js');

console.log("\n");
console.log(header.display("Daniel", "Coleman", "Assignment 5.4"));

var header = require('../header.js');
console.log("\n");

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

var famousComposers = [{
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
    },
];

var comnposersByRating = famousComposers.map(function(composer) {

});

var composersByGenre = famousComposers.map(function(composer) {

});

console.log("-- COMPOSER BY RATING --");


console.log("-- COMPOSER BY GENRE --");



// end program