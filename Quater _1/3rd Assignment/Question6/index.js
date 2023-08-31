"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let numArray = [1, 3, 6, 2, -3, -1, 5, -7];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < 0) {
        numArray.splice(i, 1);
        i--;
    }
}
console.log(numArray);
