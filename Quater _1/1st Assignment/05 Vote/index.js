"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const num = Number(prompt(("Enter your age. ")));
if (num >= 18) {
    console.log("You're eligible for vote.");
}
else {
    console.log("You're not eligible for vote.");
}
