/* implement a program that uses a loop to iterate through 
an array of numbers and remove all the even numbers from
them and just leave the odd ones. */

let numArray : number[] = [1, 2, 4, 5, 6, 2, 5];

for (let i = 0; i <= numArray.length; i++){

    if(numArray[i] % 2 === 0){
        numArray.splice(i,i);
    }
}

console.log(numArray);

