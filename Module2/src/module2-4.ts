/*
    Generic Interface
*/
{

interface CourseWork{
    sName:string,
    dept:'CSE'|'EEE'|'ETE'
}
interface Committee{
    name:string,
    title:string,
    mobile?:number
}
interface Proposal{
    topics:string,
    type:'Thesis'|'Project',
    advisor:Committee
}
interface Form extends CourseWork,Proposal{
    formNo:number
}

let finalize=<F,R=null>(form:F,status:boolean,rest?:R)=>{
    return {...form,accepted:status,others:{...rest}}
}
let s1:Form={
    formNo:1,
    sName:'Sharfuddin',
    dept:"CSE",
    topics:"Oracle APEX",
    type:"Project",
    advisor:{
        name:"Habibullah",
        title:"Professor"
    }
}
let s2:Form={
    formNo:2,
    sName:'Minar',
    dept:"CSE",
    topics:"React JS",
    type:"Project",
    advisor:{
        name:"Mahbub",
        title:"Asst. Professor"
    }
}

let defenseList:Array<Form>=[]
/*
console.log((defenseList[0] as Form).dept) this code is not run
if let defenseList:Array<object>=[] initialized
as dept belongs to Form
*/

defenseList.push(finalize(s1,true))
// defenseList.push(finalize<Form>(s1,true)) //same as above

defenseList.push(finalize<Form,{desc:string}>(s2,true,{desc:'sharfuddin.com'}))
console.log(defenseList[0]);
console.log(defenseList[0].advisor.name);




}