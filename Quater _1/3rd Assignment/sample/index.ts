import PromptSync from 'prompt-sync'

let prompt = PromptSync();

let name = prompt("what's your name.")

console.log(`How are you ${name} !`);
