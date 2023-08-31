"use strict";
let array = [1, 4, 2];
let result = 0;
let fun = (x) => {
    for (let i = 0; i < x.length; i++) {
        result += array[i];
    }
};
console.log(result);
