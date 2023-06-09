let js = 'amazing';
//if (js === 'amazing') alert('Javascript is awesome');

console.log(40 + 8 + 23 - 10);
console.log('Abhishek');

let firstName = 'Abhishek';
console.log(firstName);
console.log(firstName);
console.log(firstName);
let PI = 3.1415 // this is a constant
console.log(PI);



//let a& b = 'AB'; --> This one gives syntax error
// only $ and _ are the special symnols which are allowed in JavaScript
// variables name should not start with uppercase letters as  it is used speccific use cases like OOPS

// It's better to have descriptive variable name

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log('My first job was: ' + myFirstJob);
console.log('My current job is: ' + myCurrentJob);


// Primitive data types in Javascript
// There are mainly 7 primitive data types

// 1. Number: Floating point numbers, used for decimals and integers
let age = 23; //number data type
console.log(age);

// 2. String: Sequence of characters, used for text
let firstNamed = 'Abhishek'; // can use either single or double quotes
console.log(firstNamed)

// 3. Boolean: Logical type that can only be true or falst, used for taking decisions
let fullAge = true;
console.log(fullAge);
console.log(!fullAge);

// 4. Undefined: Value taken by a variable that is not yet defined ('empty value')
let children;
console.log(children);

// 5. Null: Also means'empty value'

//6. Symbol(ES2015): Value that is unique and cannot be changed [Not useful for now]

// 7. BigInt (ES2020): Larger integers than the Number type can hold

//Note: JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

//// value has types, NOT variable!!!!

// single line comment

/*
Multi
        line
                comment
*/

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

// using typeof operator
console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof firstNamed);
console.log(typeof children);
console.log(typeof 5425345362362346086098086008976870060867868067893424325243523235235252352345325432525235235231234142354255252532554364365374747647467);
JavaScriptIsFun = 'YES!'
console.log(typeof JavaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); //here it is a kind off a bug which displays the type of null as object --> this is regarded as bug or error (this bug is never

// let and const introduced in ES6 (they are modern javascript) whereas var keyword is the old way of declaring the variable.
