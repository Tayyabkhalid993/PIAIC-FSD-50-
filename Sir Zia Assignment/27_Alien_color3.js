"use strict";
/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the
 appropriate color alien. */
const alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("You have earned 5 points.");
}
else if (alien_color3 == "yellow") {
    console.log("You have earned just 10 points.");
}
else if (alien_color3 == "red") {
    console.log("You have earned just 15 points.");
}
else {
    console.log("You have entred wrong Alien color.");
}
