import PromptSync from "prompt-sync";

const prompt = PromptSync();

const dayNum = parseInt(prompt("Ente a number (1 - 7)"));


if (dayNum === 1 ){
    console.log("Sunday")
}

else if (dayNum === 2){
    console.log("Monday")
}

else if (dayNum === 3){
    console.log("Tuesday")
}

else if (dayNum === 4){
    console.log("Wednesday")
}

else if (dayNum === 5){
    console.log("Thursday")
}

else if (dayNum === 6){
    console.log("Friday")
}

else if (dayNum === 7){
    console.log("Saturday")
}

else {
    console.log("invale number. Please enter a number between 1 and 7.")
}