/* Given an array of numbers [3, 6, 9, 12, 15, 18];
use the map and filter methods together to create a 
new array containing the doubled values of odd numbers. */

let numArray : number[] = [3, 6, 9, 12, 15, 18];

let oddArray = numArray.filter((num)=>{

    if(num % 2 !==0){
        return true;
    }
})

let squareArray = oddArray.map((num)=>{

    return num = num ** 2;
})

console.log(squareArray);

