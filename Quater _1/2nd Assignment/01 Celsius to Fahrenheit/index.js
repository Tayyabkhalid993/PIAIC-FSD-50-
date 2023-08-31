"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Celsius to Fahrenheit
const celsius = Number(prompt("Enter temperature in Celsius "));
const celsiusToFahrenheit = (celsius * 9 / 5) + 32;
console.log(`Celsius to Fahrenheit = ${celsiusToFahrenheit} F`);
// Fahrenheit to Celsius
const fahrenheit = Number(prompt("Enter temperature in Fahrenheit "));
const fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
console.log(`Fahrenheit to Celsius = ${fahrenheitToCelsius} C`);
