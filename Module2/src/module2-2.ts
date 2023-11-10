/*
    Module 2.2: Type vs Interface
    - For function and Variable, Type is suggested for code simplicity
    - For Object, Interface used is best practice
    - Interface support reused but Type not support
    - Interface only support Intersaction, Union not supported
    - Interface inherits from parent by extends keyword  
    - Type inherits from parent by intersation &
    - interface starts and ends with {} so only used in object and function
    - Array is object, so interface can be used, 
      but not good practice for code redeability


*/
type marks=number[]
type emailPass=string|number

// Type
type Person={
    name:string,
    salary?:number
}
type Role={
    role:"User"|"Admin"|"Public"
}
/*
// type Reused not allowed but allowed in Interface
type Person={
    creditCard:number|null
}
*/

type Auth=Role & {
    email:string,
    password:number
}

const user1:Person & Auth={
    name:"Sharfuddin",
    role:"Admin",
    email:"sahamed@gmail.com",
    password:123456
}

/* Interface */

interface IPerson{
    name:string,
    salary?:number
}
interface IPerson{ // reused possible in interface
    creditCard?:number|null
}
interface IRole{
    role:"User"|"Admin"|"Public"
}
interface IAuth extends IRole{
    email:string,
    password:number
}
// const user2:IAuth | IPerson={ // interface not support union
const user2:IAuth & IPerson={
    name:"Sharfuddin",
    creditCard:1234678,
    role:"Admin",
    email:"sahamed@gmail.com",
    password:123456
}