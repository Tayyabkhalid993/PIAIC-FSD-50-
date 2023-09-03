"use strict";
/* Given an array of numbers [1,2,3,4,5] use the map
method to create a new array where each number is
multiplied by 2 */
let numArray = [1, 2, 3, 4, 5];
let newArray = numArray.map((num) => {
    num = num * 2;
    return num;
});
console.log(newArray);
