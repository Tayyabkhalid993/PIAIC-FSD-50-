"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const totalMarks = Number(prompt("Enter total Marks. "));
const gotScore = Number(prompt("How much you got. "));
const per = (gotScore / totalMarks) * 100;
console.log(`you're percentage = ${per}`);
