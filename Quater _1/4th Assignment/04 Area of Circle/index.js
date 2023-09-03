"use strict";
/* write a program that defines a function to calculate
the area of a circle. The function should take the radius
as input and return the calculated area. */
let areaOfCircle = (radius) => {
    let area = Math.round(radius * ((22 / 7) ** 2));
    return area;
};
let a = areaOfCircle(3.5);
console.log(a);
