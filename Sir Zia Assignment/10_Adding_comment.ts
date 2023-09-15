/* Choose two of the programs you've written and add at least one comment to each. If you don't 
have anything specific to write because your program are too simple at this point, just add your
name and the current date at the top of each program file. Then write one sentence describing what
the program does. */



// 14/09/2023.

// Muhammad Tayyab Khalid. 

// In this progrma we gonna take input name of Celebrity and a message from the user and then print it.

import PromptSync from "prompt-sync";

let prompt = PromptSync();

const name : string = prompt("Enter name of celebrity. ");

const message : string = prompt("Enter Quote. ");

console.log(`${name} once said, "${message}"`);

