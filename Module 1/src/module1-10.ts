/*
    Union Intersection
*/

// union |
type gender='Male'|'Female'

type FrontEnd={
    scope:"React"|"Designer"
}
type BackEnd={
    scope:"Backend"|"API"
}

// Intersaction
type FullStack=FrontEnd & BackEnd

const dev1:FrontEnd={
    scope:"Designer"
}
const dev2:BackEnd={
    scope:"API"
}



