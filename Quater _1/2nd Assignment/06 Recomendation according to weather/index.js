"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let temp = Number(prompt("What's temperature now of your location."));
if (temp > 20 && temp < 25) {
    console.log("Please use jacket.");
}
else if (temp > 9 && temp < 21) {
    console.log("Please use Jacket, Glove and warm shoes.");
}
else if (temp < 10) {
    console.log("Please use Jacket, Gloves, warm shoes and also take warm drinks. ");
}
else {
    console.log("Temperature is not cold.");
}
