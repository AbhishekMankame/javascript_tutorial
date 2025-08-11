// datatypes summary
// kis tarah se data ko memory mei rakha jaata hai and access kiya jaata hai, uss basis pe data ka 2 categorization hai

// # Primitive datatypes --> Yeh call by value hote hai
// 7 types: String, Number, Boolean, null, undefined, Symbol(kisi bhi value ko unique banane keliye symbol ka use hota hai), BigInt

// JavaScript dynamically typed language hai

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id === anotherId)


// Reference (Non primitive)
// Array, Objects, Functions