"use strict";
/* Create a function that takes an array of numbers as parameters.
Use a while loop to calculate and return the sum of all the numbers
in the array. */
let numArray = [1, 2];
let sum = 0;
let i = 0;
function add(x) {
    while (i <= numArray.length) {
        sum += i;
        i++;
    }
    return sum;
}
let funCall = add(numArray);
console.log(funCall);
