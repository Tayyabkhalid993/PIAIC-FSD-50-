"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const leapYear = Number(prompt("Enter year. "));
if (leapYear % 4 === 0) {
    console.log("Given year is a leap year.");
}
else {
    console.log("Given year is not a leap year.");
}
