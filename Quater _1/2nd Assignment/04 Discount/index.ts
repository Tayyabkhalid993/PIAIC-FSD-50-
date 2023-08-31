import PromptSync from "prompt-sync";

const prompt = PromptSync();

const num = Number(prompt("Enter price of Product in $. "));

let discount = 0;

if(num >= 100){
    discount =  num * 0.1;
    console.log(`You got 10% discount. Now you have to pay ${num - discount} $`);
}

else {
    discount = num * 0.05;
    console.log(`You got 5% discount. Now you have to pay ${num - discount} $`);
}


