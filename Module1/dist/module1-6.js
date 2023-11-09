"use strict";
/*
    Module 1.6: Function
    Basic Building Blocks
    Normal Function, Function as Expression, Anonymous Function, Method in Object
*/
/* Normal Function */
function showInfo(name, role = 'user') {
    return `Your Name: ${name} and Role is ${role}`;
}
showInfo('Zishan');
/* expression */
let getInfo = (name, role = 'user') => `Your Name: ${name} and Role is ${role}`;
getInfo('Sharfuddin', 'Admin');
/*
    Method in Object
    Normal funtion offer this reference but anonymous not support this
    this used to access properties of object
*/
let orders = {
    name: "Sharfuddin Ahamed",
    balance: 0,
    total(balance) {
        this.balance += balance;
        return this.balance;
    }
};
orders.total(100);
orders.total(50);
console.log(orders.balance);
/* Pass array as argument and return square */
let marks = [2, 3, 4, 5, 6];
function getMarks(marks) {
    let totalMarks = marks.map((mark) => mark * mark);
    return totalMarks;
}
getMarks(marks).map(mark => console.log(mark));
