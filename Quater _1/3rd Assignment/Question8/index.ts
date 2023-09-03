/* Implement a program that takes a list of temperature in 
Celsius as input from the user. Convert each temperature to 
Fahrenheit using the formula F = (C*9/5) + 32 and store the 
converted temoperature in an array. Use a while loop to perform
the conversion for each temperature */



import PromptSync from "prompt-sync";

let prompt = PromptSync();

let inputArray : number[] =[];

let outPutArray : number[] = [];

for(let i = 0; i < 3; i++){

    let a : number  = Number(prompt(`Enter ${i +1} Celsius temperature.  `));

    inputArray.push(a);
}

let j : number = 0;

while(j<inputArray.length){

    let b : number = Math.round((inputArray[j] * 1.8) + 32);

    outPutArray.push(b);

    j++;
}

console.log(outPutArray);




