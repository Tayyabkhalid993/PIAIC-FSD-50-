"use strict";
// 1. Write a proram that calculate the area of a rectangle.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
const lenght = Number(prompt("Enter the length of rectangle. "));
const width = Number(prompt("Enter the width of width. "));
const rectangle = lenght * width;
console.log("The are of Rectangle = ", rectangle);
