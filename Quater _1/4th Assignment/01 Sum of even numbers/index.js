"use strict";
/* Develop a program that calculates and prints the sum of the
first n even numbers using a for loop. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let num = Number(prompt("Enter a number. "));
let sum = 0;
for (let i = 2; i < num; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`The sum of even numbers from 0 to ${num} = ${sum}`);
