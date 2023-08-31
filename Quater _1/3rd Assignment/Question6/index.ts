import PromptSync from "prompt-sync";

let prompt = PromptSync();

let numArray : number[] = [1,3,6,2,-3,-1,5,-7];

for (let i :number =0; i< numArray.length; i++){

    if(numArray[i] < 0){

       numArray.splice(i,1);

       i--;
    }
}
console.log(numArray);