"use strict";
/* Implement a simple shopping cart program using an array.
    Create function to add items, remove items and update
    quantities using the splice method. Print the cart's
    content after each operation. */
let cart = ["Soap", "Washing Powder", "Laundery Soap"];
console.log(cart);
let fun = (start, del, addition) => {
    // Deleting Items
    cart.splice(start, del);
    console.log("Deleting Item ", cart);
    // Replacing Item
    cart.splice(start, del, addition);
    console.log("Replacing Item ", cart);
    // Addition of Items
    cart.splice(start, 0, addition);
    console.log("Adding Item ", cart);
};
fun(0, 1, "Rio");
