import PromptSync from "prompt-sync";

const prompt = PromptSync();

const age = Number(prompt("Enter your age. "));

if (age === 0 || age < 13){
    console.log("You're child. ")
}

else if (age > 12 && age < 20 ){
    console.log("You're teenager. ")
}

else {
    console.log("you're adult. ")
}