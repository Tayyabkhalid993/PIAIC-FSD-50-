/* Write a program that uses filter to remove all negative 
numbers from an array of numbers. */

let arr : number[] = [1,-2,4,4,-5,-3,-2];

let updateArray = arr.filter( (num) =>{

    if(num > 0){
        return true;
    }
})

console.log(updateArray);

