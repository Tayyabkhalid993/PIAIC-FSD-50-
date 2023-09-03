"use strict";
/* Implement a program that uses a for loop to iterate through
an array of numbers and print only the even numbers. */
let numArray = [1, 2, 5, 6, 7, 3, 6, 2];
let sum = 0;
for (let i = 0; i <= numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
        sum += numArray[i];
    }
}
console.log(sum);
