"use strict";
/* Given an array of strings ["Apple", "banana","cherry",
"date", "grape"] use the filter method to create a new array
containing only fruits with more than 5 characters. */
let fruits = ["apple", "banana", "cherry", "date", "grape"];
let newFruits = fruits.filter((fruit, index) => {
    if (fruits[index].length > 5) {
        return true;
    }
});
console.log(newFruits);
