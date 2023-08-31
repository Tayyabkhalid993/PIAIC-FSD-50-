import PromptSync from "prompt-sync";

let prompt = PromptSync();

const a = Number(prompt("Enter the length of single side of cube. "));

const cube = a ** 3;

console.log("Area of Cube = ", cube);

export{};

