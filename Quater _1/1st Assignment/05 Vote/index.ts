import PromptSync from "prompt-sync";

const prompt = PromptSync();

const num = Number(prompt(("Enter your age. ")));

if(num >= 18){
    console.log("You're eligible for vote.")
}

else {
    console.log("You're not eligible for vote.")
}