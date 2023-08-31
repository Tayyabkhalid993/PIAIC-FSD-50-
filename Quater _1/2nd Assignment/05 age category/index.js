"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const age = Number(prompt("Enter your age. "));
if (age === 0 || age < 13) {
    console.log("You're child. ");
}
else if (age > 12 && age < 20) {
    console.log("You're teenager. ");
}
else {
    console.log("you're adult. ");
}
