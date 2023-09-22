"use strict";
/* Favorite Fruit: Make a array of your favorite fruits, and then write a series
 of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is
 in your array. If the fruit is in your array, the if block should print a statement,
  such as You really like bananas! */
const favorite_fruits = ["Apple", "Orange", "Peach", "Banana"];
for (let i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] == "Banana") {
        console.log("I really like Banana.");
    }
}
