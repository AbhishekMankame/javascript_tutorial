// // strict mode is a special mode which makes us to write secure JavaScript code
// //'use strict';   // this statement should be the very first statement in the script, if there is any code before this statement, it will not work in strict mode
// // strict mode is used to avoid accidental errors in the code

// // 1. Declare a variable called 'hasDriversLicense' using the 'let' keyword, and set it to false
// let hasDriversLicense = false;

// // 2. Declare a variable called 'passTest' using the 'const' keyword, and set it to true
// const passTest = true;

// // 3. Create an if statement with the condition 'passTest' that sets the value of 'hasDriversLicense' to true
// if (passTest) hasDriversLicense = true;

// // 4. Create an if statement with the condition 'hasDriversLicense' that logs 'I can drive :D' to the console
// if (hasDriversLicense) console.log('I can drive :D');

// // alt + closing bracket will be used to toggle the comment in the copilot

// // 5. Change the value of 'passTest' to false

// // linear search in javascript
// function linearSearch(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) return i;
//     }
//     return -1;
// }


'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// strict mode reserves some keywords for future JavaScript versions such as interface, private, protected, package, static, etc.

// Finctions
// The building blocks of real world JavaScript applications is functions
// Function is a piece of code that we can reuse over and over again

// Function declaration
function logger() {         // The code inside the curly braces is called function body
    console.log('My name is Abhishek');
}

logger(); // calling / running / invoking the function
logger();
logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     console.log(typeof apples, typeof oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

function fruitProcessor(apples, oranges) {
    console.log(typeof apples, typeof oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const logg = logger();
console.log(logg);

// Function declaration vs function expression

// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

function calcAge1(birthYear) {  // birthYear is a parameter
    return 2037 - birthYear;
}

const age1 = calcAge1('1991'); // 1991 is an agruement
console.log(age1);