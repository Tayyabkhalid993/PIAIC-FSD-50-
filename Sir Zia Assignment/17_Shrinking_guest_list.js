"use strict";
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in

time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying

 that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.

 Each time you pop a name from your list, print a message to that person letting them know
 
 you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re

still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make

sure you actually have an empty list at the end of your program.

 */
let guest3 = ['Tayyab', 'Abdullah', 'Haris', 'Nabeel', 'Arslan', 'Aman'];
console.log(guest3);
console.log("We don't have enough space. You can invite only two people for dinner.");
for (let i = 0; i < guest3.length + 2; i++) {
    let a = guest3.pop();
    console.log(`Sorry We can't invite ${a} you to at dinner. `);
}
let j = 0;
while (j < guest3.length) {
    console.log(`${guest3[j]}, You're still invited for dinner.`);
    j++;
}
guest3.splice(0, 2);
console.log(guest3);
