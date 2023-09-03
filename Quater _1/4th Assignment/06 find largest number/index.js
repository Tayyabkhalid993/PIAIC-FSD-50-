"use strict";
/* find the largest number from array */
let arr = [1, 3, 5, 1];
let largerNumber = 0;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= largerNumber) {
        largerNumber = arr[i];
    }
}
console.log(largerNumber);
