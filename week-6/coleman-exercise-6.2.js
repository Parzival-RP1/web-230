var header = require('../header.js');

console.log("\n");
console.log(header.display("Daniel", "Coleman", "Exercise 6.2"));
console.log("\n");

/* ============================================ 
; Title: Exercise 6.2
; Author: Richard Krasso / Daniel Coleman
; Date: 20 January 2018
; Modified By: Daniel Coleman
; Description: Handling Exceptions // try/catch/finally
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program
/*
try {

} catch (err) {

} finally {

}
*/
// end program


var number = "Test";

try { //Try to parse and integer / Throw if NaN
    var num = parseInt(number);
    if (isNaN(num)) throw "Error Catching Test";

    console.log(num);
} catch (err) { //Catch Clause 
    console.log("\n Catch clause");
    console.log(err);
} finally {
    console.log("\n Finally clause reached");
    console.log("End of program"); //Finally Display result
}