/*
    Generics for Function
*/
{

// Remove itemID from cart
let removeFromCart1=(carts:number[],item:number)=>{
    let finalCarts:number[]=carts.filter(p=>p!=item)
    return finalCarts
}

let orders1:number[]=[1,2,3,4,5]
let carts1=removeFromCart1(orders1,3)
console.log(carts1);

// Remove item from cart
let removeFromCart2=(carts:string[],item:string)=>{
    let finalCarts:string[]=carts.filter(p=>p!=item)
    return finalCarts
}

let orders2:string[]=['Iphone14','Asus Rog','TWS Sony']
let carts2=removeFromCart2(orders2,'TWS Sony')
console.log(carts2);

// Solved avobe two requirement in union way
type Carts1=(c:string[]|number[],i:string|number)=>string[]|number[]

let removeFromCart3:Carts1=(carts,item)=>{
    let finalCarts:string[]|number[]
    if(typeof carts[0]==='string'){
        finalCarts=(carts as string[]).filter(p=>p!=item)
    }
    else if(typeof carts[0]==='number'){
        finalCarts=(carts as number[]).filter(p=>p!=item)
    }
    else{
        return []
    }
    return finalCarts
}

let orders3:string[]=['Iphone15','Lenovo Flex 5','Mouse']
let carts3=removeFromCart3(orders3,'Mouse')
console.log(carts3);

// Solved avobe two requirement by applying Generic on Type Alias
type Carts2<T>=(c:T[],i:T)=>T[]

let removeFromCart4:Carts2<string>=(carts,item)=>{
    let finalCarts:string[]
    finalCarts=carts.filter(p=>p!=item)
    return finalCarts
}
let removeFromCart5:Carts2<number>=(carts,item)=>{
    let finalCarts:number[]
    finalCarts=carts.filter(p=>p!=item)
    return finalCarts
}

let orders4:string[]=['Iphone13','Lenovo Region','Keyboard']
let carts4=removeFromCart3(orders4,'Keyboard')
console.log(carts4);

// Best Practice For Generics Function

let removeFromCart6=<T>(carts:T[],item:T):T[]=>{
    return carts.filter(p=>p!=item)
}

let carts6=removeFromCart6([10,11,12,1,3,14],14)
console.log(carts6);

}