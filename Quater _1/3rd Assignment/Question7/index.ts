/* Create a function that takes an array of numbers as parameters.
Use a while loop to calculate and return the sum of all the numbers
in the array. */


let numArray : number[] = [1, 2];

let sum : number = 0;

let i = 0;

function add(x:number[]) {

    while(i<=numArray.length){

        sum += i;

        i++;
    }
    return sum;
}

let funCall :number = add(numArray);

console.log(funCall);


