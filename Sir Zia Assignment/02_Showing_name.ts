import promptSync from "prompt-sync";

let prompt = promptSync();

let name : string = prompt("Enter your name. ");

console.log(`Hi ${name}, would you like to learn some Python? `);

