// The minimum and maximum of a set of numbers can be calculated with Math.min() and Math.max():
// let min = Math.min(5, 7);
// let max = Math.max(3, 9, 2);
// min receives the value 5 and max the value 9. The special: Both functions
//  can be called with an arbitrary number of arguments.
// Exercise
// Write a function midrange, that calculates the midrange of 3 numbers. The
//  midrange is the mean of the smallest and largest number.

// Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

function midrange(a, b, c) {
    let min = Math.min(a, b, c);
     let max = Math.max(a, b, c);
    return (min + max) /2 
   }

// Besides functions Math offers some mathematical constants. Math.PI gives 
// π (roughly 3.14) and Math.E gives Euler's number e (roughly 2.71).
// Exercise
// Write a function area that calculates the area of a circle. The function 
// is given the radius of the circle.

// Example: area(1) should return π and area(2) should return 4 * π

let num = 4
function area(num) {
 return Math.pow(num, 2) * Math.PI
}

// Rounding
// If you want to round a number, you can use the Math.round(), Math.floor() and
//  Math.ceil() functions.
// let a = Math.round(5.49);
// let b = Math.round(4.5);
// let c = Math.floor(5.99);
// let d = Math.ceil(4.01);
// Math.round() rounds a number to the nearest integer, Math.floor() rounds a 
// number downwards to the nearest integer and Math.ceil() rounds a number upwards 
// to the nearest integer. Therefore, the variables a to d all get the value 5.
// Exercise
// Write a function round100 that rounds a number to the nearest hundred.

// Example: round100(1749) should return 1700 and round100(856.12) should return 900.

function round100(x) {
return Math.round(x / 100) * 100
}