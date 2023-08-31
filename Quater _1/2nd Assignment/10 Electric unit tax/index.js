"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const unitConsumed = Number(prompt("How much units you have consumed?  "));
let priceOfUnit = 20;
let newPriceOfUnit;
let finalBill;
if (unitConsumed >= 100 && unitConsumed < 200) {
    newPriceOfUnit = priceOfUnit * 0.10;
    newPriceOfUnit += priceOfUnit;
    finalBill = newPriceOfUnit * unitConsumed;
    console.log(`Normal price of unit = ${priceOfUnit}`);
    console.log(`You have charged 10% tax. Now a unit of price is ${newPriceOfUnit}`);
    console.log(`Your Bill = ${finalBill}`);
}
else if (unitConsumed >= 200 && unitConsumed < 300) {
    newPriceOfUnit = priceOfUnit * 0.15;
    newPriceOfUnit += priceOfUnit;
    finalBill = newPriceOfUnit * unitConsumed;
    console.log(`Normal price of unit = ${priceOfUnit}`);
    console.log(`You have charged 15% tax. Now a unit of price is ${newPriceOfUnit}`);
    console.log(`Your Bill = ${finalBill}`);
}
else if (unitConsumed >= 300 && unitConsumed < 400) {
    newPriceOfUnit = priceOfUnit * 0.20;
    newPriceOfUnit += priceOfUnit;
    finalBill = newPriceOfUnit * unitConsumed;
    console.log(`Normal price of unit = ${priceOfUnit}`);
    console.log(`You have charged 20% tax. Now a unit of price is ${newPriceOfUnit}`);
    console.log(`Your Bill = ${finalBill}`);
}
else if (unitConsumed >= 400 && unitConsumed < 500) {
    newPriceOfUnit = priceOfUnit * 0.25;
    newPriceOfUnit += priceOfUnit;
    finalBill = newPriceOfUnit * unitConsumed;
    console.log(`Normal price of unit = ${priceOfUnit}`);
    console.log(`You have charged 25% tax. Now a unit of price is ${newPriceOfUnit}`);
    console.log(`Your Bill = ${finalBill}`);
}
else if (unitConsumed >= 500) {
    newPriceOfUnit = priceOfUnit * 0.30;
    newPriceOfUnit += priceOfUnit;
    finalBill = newPriceOfUnit * unitConsumed;
    console.log(`Normal price of unit = ${priceOfUnit}`);
    console.log(`You have charged 30% tax. Now a unit of price is ${newPriceOfUnit}`);
    console.log(`Your Bill = ${finalBill}`);
}
else {
    console.log("Invalid input");
}
