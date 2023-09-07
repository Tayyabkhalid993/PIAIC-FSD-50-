"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let name = prompt("Enter you name. ");
//lowercase 
console.log(`LowerCase  = ${name.toLowerCase()}`);
// UpperCase
console.log(`UpperCase =  ${name.toUpperCase()}`);
//titleCase 
let fistChar = name.charAt(0);
let remainingChar = name.slice(1);
remainingChar.toLowerCase();
let finalChar = `${fistChar.toUpperCase()}${remainingChar}`;
console.log(`TitleCase = ${finalChar}`);
