import PromptSync from "prompt-sync";

const prompt = PromptSync();

const unitConsumed = Number(prompt("How much units you have consumed?  "));

let priceOfUnit = 20;

let newPriceOfUnit;

let finalBill;

if (unitConsumed >= 100 && unitConsumed < 200){

    newPriceOfUnit =  priceOfUnit *  0.10;
    
   newPriceOfUnit += priceOfUnit;

    finalBill = newPriceOfUnit * unitConsumed;

   console.log(`Normal price of unit = ${priceOfUnit}`);

    console.log(`You have charged 10% tax. Now a unit of price is ${newPriceOfUnit}`);

    console.log(`Your Bill = ${finalBill}`);
}

else if ( unitConsumed >= 200 && unitConsumed < 300){
    newPriceOfUnit =  priceOfUnit *  0.15;
    
    newPriceOfUnit += priceOfUnit;

    finalBill = newPriceOfUnit * unitConsumed;

    console.log(`Normal price of unit = ${priceOfUnit}`);
 
     console.log(`You have charged 15% tax. Now a unit of price is ${newPriceOfUnit}`);

     console.log(`Your Bill = ${finalBill}`);
}



else if ( unitConsumed >= 300 && unitConsumed < 400){
    newPriceOfUnit =  priceOfUnit *  0.20;
    
    newPriceOfUnit += priceOfUnit;

    finalBill = newPriceOfUnit * unitConsumed;

    console.log(`Normal price of unit = ${priceOfUnit}`);
 
     console.log(`You have charged 20% tax. Now a unit of price is ${newPriceOfUnit}`);

     console.log(`Your Bill = ${finalBill}`);
}




else if ( unitConsumed >= 400 && unitConsumed < 500){

    newPriceOfUnit =  priceOfUnit *  0.25;
    
    newPriceOfUnit += priceOfUnit;

    finalBill = newPriceOfUnit * unitConsumed;

    console.log(`Normal price of unit = ${priceOfUnit}`);
 
     console.log(`You have charged 25% tax. Now a unit of price is ${newPriceOfUnit}`);

     console.log(`Your Bill = ${finalBill}`);
}



else if ( unitConsumed >= 500 ){

    newPriceOfUnit =  priceOfUnit *  0.30;
    
    newPriceOfUnit += priceOfUnit;

    finalBill = newPriceOfUnit * unitConsumed;

    console.log(`Normal price of unit = ${priceOfUnit}`);
 
     console.log(`You have charged 30% tax. Now a unit of price is ${newPriceOfUnit}`);

     console.log(`Your Bill = ${finalBill}`);
}

else {
    console.log("Invalid input")
}



