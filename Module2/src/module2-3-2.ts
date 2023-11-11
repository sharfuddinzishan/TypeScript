/*
    Recap Generics
*/

{
    /* Generics on Primitive Type */
    type StrNum1=string|number
    type StrNum2<T>=T

    let name:StrNum1="Sharfuddin"
    let roll:StrNum1=1

    let subjectcredit:StrNum2<string>="Python"
    let dept:StrNum2<number>=3

    /* Generics on Non-Primitive Type */

    let  cart1:number[]|string[]
    type Cart1<T>=T[]

    let  cart2:Array<number|string>
    type Cart2<T>=Array<T>
    
    const items:Cart1<string>=['Laptop','Speaker']
    const orders:Cart2<number>=[10,12,45]

    /* Generics on Function */
    let show=<T>(n:T[]):T[]=>{
        return n.map(item=>item)
    }
    
    console.log(show(items));
    console.log(show(orders));

    // Generic for Array of Object

    type Arr<T>=Array<T>
    type Person={
        name:string;
        age:number;
        married?:boolean;
        role:'User'|'Admin'|'Normal'
    }
//  Array Of Object
    const users:Arr<Person>=[
        {
            name:'Sharfuddin',
            age:28,
            married:true,
            role:"Admin"
        },
        {
            name:'Minar',
            age:33,
            married:false,
            role:"User"
        }
    ]
// Array of Strings
    const inventory:Arr<string>=['Mobile','Laptop','SSD']
// Array of Numbers
    const rolls:Arr<number>=[10,23,54]

}