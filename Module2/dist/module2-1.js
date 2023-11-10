"use strict";
/*
    Module 2.1: Type Assertion/Narrowing
    - Two Form:
        1) Angle Bracket Syntax
        2) As Syntax
    - if developer knows type, then can used assertion
*/
let inputName; //Any Type
inputName = 'Sharfuddin';
inputName.length; // Angle bracket Syntax of Assertion
inputName.length;
function calSquar(num) {
    if (typeof num === 'number') {
        return num * num;
    }
    else if (typeof num === 'string') {
        num = parseInt(num);
        return `${num} * ${num} = ${num * num}`;
    }
    else {
        return `Invalid`;
    }
    // let a:number=calSquar(5) // As function return type may be number or string type
    let a = calSquar(5); // Developer sure that return value is number type
    console.log(a);
    let b = calSquar(5);
}
