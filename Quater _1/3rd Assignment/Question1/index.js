"use strict";
/* Create a function that takes an array, an index and a value
   as parameters. Inside the function, use the splice method
   to insert the value at the specified index in the array.
   Return the modified array.
   */
let fun = (fruits, index, value) => {
    fruits.splice(index, 1, value);
    return fruits;
};
let call = fun(["Apple", "Mango", "Banana"], 1, "Apple");
console.log(call);
