"use strict";
/* Choose two of the programs you've written and add at least one comment to each. If you don't
have anything specific to write because your program are too simple at this point, just add your
name and the current date at the top of each program file. Then write one sentence describing what
the program does. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 14/09/2023.
// Muhammad Tayyab Khalid. 
// In this progrma we gonna take input name of Celebrity and a message from the user and then print it.
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
const name = prompt("Enter name of celebrity. ");
const message = prompt("Enter Quote. ");
console.log(`${name} once said, "${message}"`);
