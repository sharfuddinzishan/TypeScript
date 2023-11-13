/*
    Develop a TypeScript function 
    to retrieve specific details from an array of objects. 
    Your task is to extract 'id' and 'name' properties, 
    unveiling their concealed values.
    After crafting the function, apply it to an array of diverse objects. 
    Showcase the extracted 'id' and 'name' details, 
    revealing the secrets kept within these mysterious objects.
*/
{
type User={
    id:number,
    name:string,
    salary:number
}
let user1:User={
    id:1,
    name:'Sharfuddin',
    salary:20000
}
let user2:User={
    id:22,
    name:'Minar',
    salary:25000
}
const user:Array<User>=[user1,user2]

let getProps=<T,Q extends keyof T>(obj:Array<T>,key:Q):Array<T[Q]>=>{
    return obj.map(data=>data[key])
}
console.log(getProps(user,'id'));
console.log(getProps(user,'name'));





}