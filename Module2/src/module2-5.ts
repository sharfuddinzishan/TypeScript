/*
    Module 2.5: Generic Function
*/
{

type Reg={
    name: string;
    age: number;
    gpa:number
}
type Admit=Reg |{
    semester:number
}
type Dept='CSE'|'EEE'|'BBA'

let enroll=<T,Q>(s:T,p:Q):T=>{
    let id=Math.floor(Math.random()*1000)
    return {...s,roll:id,dept:p}
}

let student:Array<object>=[]
let s1:Admit={
    name:'Sharfuddin',
    age:20,
    gpa:3.5,
    semester:1
}
let s2:Admit={
    name:'Minar',
    age:20,
    gpa:3.75,
    semester:1
}
student.push(enroll<Admit,Dept>(s1,'CSE'))
student.push(enroll<Admit,Dept>(s2,'EEE'))

console.log(student);








}






