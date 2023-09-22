"use strict";
/* find the largest number from array */
let arr = [1, 3, 5, 2, -1, -10, 1];
let largerNumber = 0;
let largestNumber = (array) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= largerNumber) {
            largerNumber = arr[i];
        }
    }
    return largerNumber;
};
let a = largestNumber(arr);
console.log(a);
