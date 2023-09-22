"use strict";
/* More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your
  program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.

• Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list. */
let guest2 = ["Haris", "Nabeel", "Zain"];
// Let suppose Zain couldn't join dinner. Now, I wanna invite someone else.
guest2[2] = "Arslan";
// adding new one in the beginning of array.
guest2.unshift("Tayyab");
// adding guest in the middle of the array.
guest2.splice(1, 0, "Abdullah");
// adding guest in the last.
guest2.push("Aman");
console.log(guest2);
for (let i = 0; i < guest2.length; i++) {
    console.log(`I would like to invite you tonight dinner at my home, ${guest2[i]}`);
}
