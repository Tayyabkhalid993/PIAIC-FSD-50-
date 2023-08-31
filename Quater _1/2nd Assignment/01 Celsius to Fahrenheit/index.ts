import PromptSync from "prompt-sync";

const prompt = PromptSync();

// Celsius to Fahrenheit

const celsius = Number(prompt("Enter temperature in Celsius "));

const celsiusToFahrenheit = (celsius * 9/5) + 32;

console.log(`Celsius to Fahrenheit = ${celsiusToFahrenheit} F` );



// Fahrenheit to Celsius


const fahrenheit = Number(prompt("Enter temperature in Fahrenheit "));

const fahrenheitToCelsius = (fahrenheit - 32) * 5/9;

console.log(`Fahrenheit to Celsius = ${fahrenheitToCelsius} C`);



