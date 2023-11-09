/* 
    Module 1.6: Function 
    Basic Building Blocks
    Normal Function, Function as Expression, Anonymous Function, Method in Object
*/

/* Normal Function */
function showInfo(name:string,role:string='user'):string{
    return `Your Name: ${name} and Role is ${role}`
 }

 showInfo('Zishan')

 /* expression */
let getInfo=(name:string,role:string='user'):string=>
    `Your Name: ${name} and Role is ${role}`

getInfo('Sharfuddin','Admin')

/* 
    Method in Object
    Normal funtion offer this reference but anonymous not support this
    this used to access properties of object
*/

let orders:{
    name: string;
    balance: number;
    total(balance: number): number;
}
={
    name:"Sharfuddin Ahamed",
    balance:0,
    total(balance:number):number{
        this.balance+=balance
        return this.balance
    }
}

orders.total(100)
orders.total(50)
console.log(orders.balance);

/* Pass array as argument and return square */
let marks:number[]=[2,3,4,5,6]

let totalMarks:number[]=marks.map((mark:number):number=>mark*mark)
totalMarks.map(mark=>console.log(mark))



