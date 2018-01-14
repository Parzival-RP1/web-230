var header = require('../header.js');

console.log("\n");
console.log(header.display("Daniel", "Coleman", "Exercise 5.2"));
console.log("\n");


/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi
- Insert 5 Favorite Food Types Here
 */

// start program
var foods = ["Sushi", "Indian", "Thai", "Tacos", "Chicken-Anything"];

foods.forEach(function(food) {
    console.log(food);
});