"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Write a program that tells us  Given number is divisible by 3, 5 or not
const num = Number(prompt("Enter a number. "));
let status = false;
if (num % 3 === 0) {
    if (num % 5 === 0) {
        console.log("Given numbe is divisible by both 3 and 5.");
    }
    else {
        console.log("Given number is divisible by 3.");
    }
}
else if (num % 5 === 0) {
    console.log("Given number is divisible by 5.");
}
else {
    console.log("Given number is not divisible by 3 and 5.");
}
