/*
    Generics for primitive type
    - Dynamically Type Allocation
*/

type cart1=string[]
type cart2=number[]

let orders1:cart1=['A','B']
let orders2:cart2=[1,2,3]

// Union Way
type cart3=string[]|number[] // We have to declare every tpe here
let orders3:cart3=[4,5,6]
let orders4:cart3=['G','E']
// let orders5:cart3=[true,false,true] // need to union boolean like string[]|number[]|boolean[]

// Generic way
type cart4<T>=T[] // We declare type once and used it for all types as type allocated dynamically
let order4:cart4<number>=[7,8,9]
let order5:cart4<string>=['D','E','F']
let order6:cart4<boolean>=[true,false,true]

// We can declare array in another way
type cart5<T>=Array<T>


