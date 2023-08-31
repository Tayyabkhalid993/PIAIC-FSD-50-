"use strict";
/* Write a program that uses a while loop
    to print the first 10 even number. */
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
let prompt = PromptSync();
let gienNumber = Number(prompt("Enter a number."));
let num = 0;
while (num < 10) {
    if (gienNumber % 2 == 0) {
        console.log(gienNumber);
        num += 1;
    }
    gienNumber += 1;
}
