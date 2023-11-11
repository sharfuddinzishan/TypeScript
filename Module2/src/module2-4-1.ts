{
interface Arr<T>{
    [index:number]:T
}
let a:Arr<number>=[1,2,3,4]
console.log(a);
let b:Arr<string>=['A','B']
console.log(b);

interface Fun<T>{
    (para:T):T
}
let orders:Fun<string>=(p)=>{
    return p
}
let carts=[]
carts.push(orders('A'))
carts.push(orders('B'))
console.log(carts);




let carts1=[]
let meals=<T>(meal:T):T=>{
    return meal
}
carts1.push(meals('Egg'))
carts1.push(meals('Rice'))
console.log(carts1);



}