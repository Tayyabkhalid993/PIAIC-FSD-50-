"use strict";
/* Implement a program that takes a list of temperature in
Celsius as input from the user. Convert each temperature to
Fahrenheit using the formula F = (C*9/5) + 32 and store the
converted temoperature in an array. Use a while loop to perform
the conversion for each temperature */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let inputArray = [];
let outPutArray = [];
for (let i = 0; i < 3; i++) {
    let a = Number(prompt(`Enter ${i + 1} Celsius temperature.  `));
    inputArray.push(a);
}
let j = 0;
while (j < inputArray.length) {
    let b = Math.round((inputArray[j] * 1.8) + 32);
    outPutArray.push(b);
    j++;
}
console.log(outPutArray);
