"use strict";
{
    let a = [1, 2, 3, 4];
    console.log(a);
    let b = ['A', 'B'];
    console.log(b);
    let orders = (p) => {
        return p;
    };
    let carts = [];
    carts.push(orders('A'));
    carts.push(orders('B'));
    console.log(carts);
    let carts1 = [];
    let meals = (meal) => {
        return meal;
    };
    carts1.push(meals('Egg'));
    carts1.push(meals('Rice'));
    console.log(carts1);
}
