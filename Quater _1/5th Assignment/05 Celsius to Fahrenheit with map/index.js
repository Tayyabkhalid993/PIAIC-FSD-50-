"use strict";
/* Given an array of temperature in Celsius [0, 10,
20, 30, 40] use the map method to create a new array
where each temperature is converted to Fahrenheit using
the formula (Celsius * 9/5) + 32. */
let CelsiusTemp = [0, 10, 20, 30, 40, 50];
let fahrenheitTemp = CelsiusTemp.map((num) => {
    return Math.round((num * 9 / 5) + 32);
});
console.log(fahrenheitTemp);
