import PromptSync from "prompt-sync";

let prompt = PromptSync();

let name : string = prompt("Enter you name. ");

//lowercase 

console.log(`LowerCase  = ${name.toLowerCase()}`);

// UpperCase

console.log(`UpperCase =  ${name.toUpperCase()}`);

//titleCase 

let fistChar : string = name.charAt(0);

let remainingChar : string = name.slice(1);

remainingChar.toLowerCase();

let finalChar : string = `${fistChar.toUpperCase()}${remainingChar}`;

console.log(`TitleCase = ${finalChar}`);

