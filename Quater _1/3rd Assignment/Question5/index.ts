/* Create a function that takes a positive integer as 
    parameter and uses a while loop to calculate and 
    return the factorial of that number. */

   let factorial = (userInput : number)=> {

    let answer = 1
    if(userInput < 0){
        console.log("Given number is negative.")
    }
    
    else if (userInput ===0){
        console.log("Given number is equal to zero.")
    }
    
    else {
        for (let i = 1; i <= userInput; i++) {
    
            answer *=i;
            
        }
    
        console.log(`Factorial of ${userInput} is ${answer}`);
    }
    
    
   }

   factorial(5);



