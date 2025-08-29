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

const bigNumber = 3456456464564356434n // yaha par 'n' lagane se woh automatically big int bann gaya hai
console.log(typeof bigNumber)


// Reference (Non primitive) --> Inka referenced type hota hai
// Array, Objects, Functions

const heros = ["shaktiman", "nagaraj", "doga"];

let myObj = {
    name: "Abhishek",
    age: 24
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(typeof anotherId)

// +++++++++++++++++++++++ Memories ++++++++++++++++

// Stack, Heap memory
// Primitive data types mei stack use hoti hai
// Non primitive types mei Heap use hoti hai
// Stack memory is like pass by value -> variables joh bhi pass kiya hai uska copy milta hai
// Heap is like pass by reference

let myYoutubename = "abcdef"

let anotherName = myYoutubename
anotherName = "Chaiaurcode"
console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userOne)
console.log(userTwo)

userTwo.email = "hitesh@google.com"

console.log(userOne)
console.log(userTwo)
console.log(userOne.email)
console.log(userTwo.email)