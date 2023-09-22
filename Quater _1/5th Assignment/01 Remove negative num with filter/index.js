"use strict";
/* Write a program that uses filter to remove all negative
numbers from an array of numbers. */
let arr = [1, -2, 4, 4, -5, 43, 64, -3, -2];
let updateArray = arr.filter((num) => {
    if (num > 0) {
        return true;
    }
});
console.log(updateArray);
