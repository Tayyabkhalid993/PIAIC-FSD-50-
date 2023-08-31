"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const dayNum = parseInt(prompt("Ente a number (1 - 7)"));
if (dayNum === 1) {
    console.log("Sunday");
}
else if (dayNum === 2) {
    console.log("Monday");
}
else if (dayNum === 3) {
    console.log("Tuesday");
}
else if (dayNum === 4) {
    console.log("Wednesday");
}
else if (dayNum === 5) {
    console.log("Thursday");
}
else if (dayNum === 6) {
    console.log("Friday");
}
else if (dayNum === 7) {
    console.log("Saturday");
}
else {
    console.log("invale number. Please enter a number between 1 and 7.");
}
