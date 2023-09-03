"use strict";
/* Given an array of numbers [1,2,3,4,5,6,7,8,9,10]
use the map and filter methods together to create a
new array containing the square of even numbers. */
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updatedArray = numArray.filter((num) => {
    if (num % 2 === 0) {
        return true;
    }
});
let squareArray = updatedArray.map((num) => {
    return num ** 2;
});
console.log(squareArray);
