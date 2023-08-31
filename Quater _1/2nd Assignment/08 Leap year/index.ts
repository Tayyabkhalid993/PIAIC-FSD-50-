import PromptSync from "prompt-sync";

const prompt = PromptSync();

const leapYear = parseInt(prompt("Enter year. "));

if (leapYear % 4 === 0){
    console.log("Given year is a leap year.");

}

else {
    console.log("Given year is not a leap year.")
}

