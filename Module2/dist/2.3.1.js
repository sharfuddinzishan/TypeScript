"use strict";
/*
    Generics for Function
*/
{
    // Remove itemID from cart
    let removeFromCart1 = (carts, item) => {
        let finalCarts = carts.filter(p => p != item);
        return finalCarts;
    };
    let orders1 = [1, 2, 3, 4, 5];
    let carts1 = removeFromCart1(orders1, 3);
    console.log(carts1);
    // Remove item from cart
    let removeFromCart2 = (carts, item) => {
        let finalCarts = carts.filter(p => p != item);
        return finalCarts;
    };
    let orders2 = ['Iphone14', 'Asus Rog', 'TWS Sony'];
    let carts2 = removeFromCart2(orders2, 'TWS Sony');
    console.log(carts2);
    let removeFromCart3 = (carts, item) => {
        let finalCarts;
        if (typeof carts[0] === 'string') {
            finalCarts = carts.filter(p => p != item);
        }
        else if (typeof carts[0] === 'number') {
            finalCarts = carts.filter(p => p != item);
        }
        else {
            return [];
        }
        return finalCarts;
    };
    let orders3 = ['Iphone15', 'Lenovo Flex 5', 'Mouse'];
    let carts3 = removeFromCart3(orders3, 'Mouse');
    console.log(carts3);
    let removeFromCart4 = (carts, item) => {
        let finalCarts;
        finalCarts = carts.filter(p => p != item);
        return finalCarts;
    };
    let removeFromCart5 = (carts, item) => {
        let finalCarts;
        finalCarts = carts.filter(p => p != item);
        return finalCarts;
    };
    let orders4 = ['Iphone13', 'Lenovo Region', 'Keyboard'];
    let carts4 = removeFromCart3(orders4, 'Keyboard');
    console.log(carts4);
    // Best Practice For Generics Function
    let removeFromCart6 = (carts, item) => {
        return carts.filter(p => p != item);
    };
    let carts6 = removeFromCart6([10, 11, 12, 1, 3, 14], 14);
    console.log(carts6);
}
