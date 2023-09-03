/* Develop a program that calculates and prints the sum of the 
first n even numbers using a for loop. */

import promptSync from 'prompt-sync';

let prompt = promptSync();

let num : number = Number(prompt("Enter a number. "));

let sum: number = 0;

for (let i = 2; i< num; i++){

    if(i % 2 === 0){
        sum += i;
    }   
}

console.log(`The sum of even numbers from 0 to ${num} = ${sum}`);

