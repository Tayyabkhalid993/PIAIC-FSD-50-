import PromptSync from "prompt-sync";

let prompt = PromptSync();
const num = Number(prompt("Enter any Number. "));

if (num === 0){
    console.log("Given number is 0 ");
}

else if( num > 0){
    console.log("Given number is Positive. ");

}

else {
    console.log("Given number is Negative. ");
}

