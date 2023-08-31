import PromptSync from "prompt-sync";

const prompt = PromptSync();

let num = parseInt(prompt("Enter a number."));

let w = num / 7;

let weeks =Math.trunc(w);

let days = num % 7;

console.log(`${weeks} Weeks and ${days} days `);


