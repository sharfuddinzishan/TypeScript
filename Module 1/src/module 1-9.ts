/*
    Module 1.9 Type Alias
    Type Alias Applied On: variable, object, function
*/
{
// Object Type Alias
type Student={
    name:string;
    dept:string;
    roll?:number;
    institute:"CPI";
}

const s1:Student={
    name:'A',
    dept:'CSE',
    roll:1,
    institute:'CPI',
}
const s2:Student={
    name:'A',
    dept:'EEE',
    institute:'CPI'
}
console.log(s1.roll);
console.log(s2.roll);

// Type Alias for Variable
type gpa=number
type isAdmin=boolean

let result:gpa=10
let role:isAdmin=true

// Type Alias for function 
type getStudent=(student:Student)=>string

let showStudent:getStudent=(s)=>s.name;
console.log(showStudent(s1));

/*
    Calculate total from method of object by implementingtype alias
*/

type Order={
    product:string;
    quantity:number;
    price:number;
    total:()=>number;
}
let order1:Order={
    product:'Iphone13',
    price:120000,
    quantity:2,
    total(){ //normal function
        return this.price*this.quantity
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
}

console.log(order1.total())


}