"use strict";
let array1 = [1, 4, 2, 5, 6, 7];
let result1 = 0;
let _status = true;
let fun1 = (x) => {
    while (_status) {
        let i = 0;
        if (_status && i >= x.length) {
            result1 += array[i];
            i++;
        }
        else {
            _status = false;
        }
    }
    return result1;
};
let a = fun1(array1);
console.log(a);
