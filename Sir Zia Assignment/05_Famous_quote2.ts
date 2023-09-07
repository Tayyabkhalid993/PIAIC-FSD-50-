import PromptSync from "prompt-sync";

let prompt = PromptSync();

const name : string = prompt("Enter name of celebrity. ");

const message : string = prompt("Enter Quote. ");

console.log(`${name} once said, "${message}"`)