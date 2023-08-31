// 1. Write a proram that calculate the area of a rectangle.


import PromptSync from "prompt-sync";

let prompt = PromptSync();


const lenght = Number(prompt("Enter the length of rectangle. "));

const width = Number(prompt("Enter the width of rectangle. "));

const rectangle = lenght*width;

console.log("The are of Rectangle = ", rectangle);


