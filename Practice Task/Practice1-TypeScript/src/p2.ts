/*
Your challenge is to create a TypeScript function that 
turns an array of key-value pairs into a neatly organized object. 
We have a function that seamlessly merges the keys and values from 
the array, transforming them into a structured object.

Once your function is crafted, apply it to an array filled 
with various key-value pairs. Witness the array's shift 
into a tidy and structured object, showcasing its newfound form.

*/
{


    let datas:[string,any][] = [
        ['id', 1],
        ['name', 'Sharfuddin'],
        ['age', 24],
        ['isAuth', false]
    ];
/*
    function getProps(obj:object){
        let formatObject= datas.reduce((final:any,current:any)=>{
            final[current[0]]=current[1]
            return final
        },{});
        return formatObject
    }
    console.log(getProps(datas));
*/

/*
function getProps<T extends string,Q>(obj:Array<[T,Q]>){
    let formatObject= datas.reduce((final:any,current:any)=>{
        final[current[0]]=current[1]
        return final
    },{});
    return formatObject
}
console.log(getProps(datas));
*/

/*
function getProps<T extends string,Q>(obj:Array<[T,Q]>):Record<string,any>{
    let formatObject= datas.reduce((final,current)=>{
        final[current[0]]=current[1]
        return final
    },{} as Record<string,any>);
    return formatObject
}
console.log(getProps(datas));
*/

// Record<string,any> means {key:value} where key always string type.
// Record generates an object
function getProps<T extends string,Q>(obj:Array<[T,Q]>):Record<string,any>{
    let formatObject= obj.reduce((final,[key,value])=>{
        final[key]=value
        return final
    },{} as Record<string,any>);
    return formatObject
}
console.log(getProps([['name','Zishan']]));
console.log(getProps(datas));

}

