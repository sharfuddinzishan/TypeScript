"use strict";
/*
    Module 1.9 Type Alias
    Type Alias Applied On: variable, object, function
*/
{
    const s1 = {
        name: 'A',
        dept: 'CSE',
        roll: 1,
        institute: 'CPI',
    };
    const s2 = {
        name: 'A',
        dept: 'EEE',
        institute: 'CPI'
    };
    console.log(s1.roll);
    console.log(s2.roll);
    let result = 10;
    let role = true;
    let showStudent = (s) => s.name;
    console.log(showStudent(s1));
    let order1 = {
        product: 'Iphone13',
        price: 120000,
        quantity: 2,
        total() {
            return this.price * this.quantity;
        }
        /*
        total:function(){ // anonymous function
            return this.price*this.quantity
        }
        */
        /*
         // Function as Expression not support this
         total:()=>this.price*this.quantity
         */
    };
    console.log(order1.total());
}
