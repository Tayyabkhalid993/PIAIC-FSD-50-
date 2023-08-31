let array : number[] = [1,4,2];

let result : number = 0;

let fun = (x : number[]) =>{

for(let i : number = 0; i < x.length; i++ ){

    result += array[i];

    }

}

console.log(result);

