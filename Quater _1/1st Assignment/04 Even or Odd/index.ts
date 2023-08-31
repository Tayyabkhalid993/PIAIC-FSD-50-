import PromptSync from "prompt-sync";

const prompt = PromptSync();

const num =Number (prompt("Enter a number. "));

if (num % 2 === 0){
    console.log("Given number is even");    
}

else {

    console.log("Given number is odd");
}

