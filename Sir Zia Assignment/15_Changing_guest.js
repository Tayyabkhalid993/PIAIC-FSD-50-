"use strict";
/* You just heard that one of your guests can't make the
dinner, so you need to send out a new set of invitation.
You'll have to think of someone else to invite. */
let guest1 = ["Haris", "Nabeel", "Zain"];
// Let suppose Zain couldn't join dinner. Now, I wanna invite someone else.
guest1[2] = "Arslan";
for (let i = 0; i < guest1.length; i++) {
    console.log(`I would like to invite you tonight dinner at my home, ${guest1[i]}`);
}
