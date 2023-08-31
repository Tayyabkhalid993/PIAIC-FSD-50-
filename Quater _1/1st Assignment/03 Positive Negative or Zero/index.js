"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
const num = Number(prompt("Enter any Number. "));
if (num === 0) {
    console.log("Given number is 0 ");
}
else if (num > 0) {
    console.log("Given number is Positive. ");
}
else {
    console.log("Given number is Negative. ");
}
