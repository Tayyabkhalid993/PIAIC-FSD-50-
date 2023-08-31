"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const num = Number(prompt("Enter a number. "));
if (num % 2 === 0) {
    console.log("Given number is even");
}
else {
    console.log("Given number is odd");
}
