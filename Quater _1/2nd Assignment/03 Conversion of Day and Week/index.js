"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num = parseInt(prompt("Enter a number."));
let w = num / 7;
let weeks = Math.trunc(w);
let days = num % 7;
console.log(`${weeks} Weeks and ${days} days `);
