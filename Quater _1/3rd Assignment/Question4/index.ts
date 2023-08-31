/* Write a program that uses a while loop
    to print the first 10 even number. */

    import PromptSync = require("prompt-sync");

    let prompt = PromptSync();

    let gienNumber : number = Number(prompt("Enter a number."));

    let num : number = 0;

    while(num < 10){

        if(gienNumber % 2 ==0){

            console.log(gienNumber);

            num +=1;
        }
        gienNumber += 1;
    
    }
