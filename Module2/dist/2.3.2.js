"use strict";
/*
    Recap Generics
*/
{
    let name = "Sharfuddin";
    let roll = 1;
    let subjectcredit = "Python";
    let dept = 3;
    /* Generics on Non-Primitive Type */
    let cart1;
    let cart2;
    const items = ['Laptop', 'Speaker'];
    const orders = [10, 12, 45];
    /* Generics on Function */
    let show = (n) => {
        return n.map(item => item);
    };
    console.log(show(items));
    console.log(show(orders));
    //  Array Of Object
    const users = [
        {
            name: 'Sharfuddin',
            age: 28,
            married: true,
            role: "Admin"
        },
        {
            name: 'Minar',
            age: 33,
            married: false,
            role: "User"
        }
    ];
    // Array of Strings
    const inventory = ['Mobile', 'Laptop', 'SSD'];
    // Array of Numbers
    const rolls = [10, 23, 54];
}
