"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const num = Number(prompt("Enter price of Product in $. "));
let discount = 0;
if (num >= 100) {
    discount = num * 0.1;
    console.log(`You got 10% discount. Now you have to pay ${num - discount} $`);
}
else {
    discount = num * 0.05;
    console.log(`You got 5% discount. Now you have to pay ${num - discount} $`);
}
