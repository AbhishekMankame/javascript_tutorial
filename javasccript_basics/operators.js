// operators in javascript

// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

console.log(ageJonas * 2);
console.log(ageJonas / 5, ageJonas * 3);

const firstName2 = 'Abhishek';
const lastName = 'Mankame';
console.log(firstName2 + lastName);
console.log(firstName2 + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // output: 15
x += 10;  // x = x + 10   // output: 25
x *= 4;  // x = x * 4   // output: 100
x++; // x = x + 1   // increament by 1
x--; // x = x - 1 // decrement by 1
x--; // output: 99
x++; // output: 100
console.log(x);

// Comparison operators --> it is used to produce boolean values
console.log(ageJonas > ageSarah); // output: true
console.log(ageSarah >= 18); // output: true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // output: true


// Operator Precedence

let x1, y;
x1 = y = 25 - 10 - 5; // x1 = y = 10, x1 = 10, y = 10
console.log(x1, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// // Calcualting the BMI of Mark and John
// // BMI = mass / height ** 2 = mass / (height * height)

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const MarkHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, MarkHigherBMI);


// Strings and Template Literals
// Strings in Javascript

const firstName3 = 'Abhishek';
const job = 'Software Developer';
const birthYear1 = 2001;
const year1 = 2037;

const abhishek = "I'm " + firstName3 + ', a ' + (year1 - birthYear1) + ' years old ' + job + '!';

console.log(abhishek);

// Template Literals
const jonasNew = `I'm ${firstName3}, a ${year1 - birthYear1} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// Multiline Strings
console.log('String with \n\
multiple \n\
lines'); // It only wors due to bug in the language

// Multilne strings using template literals
console.log(`String with
multiple
lines`);

// Taking Decisions: if / elso statements

// if - else statements
// const age2 = 15;
// const isOldEnough = age2 >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚗 ');
// }

const age2 = 15;
if (age2 >= 18) {
    console.log('Sarah can start driving license 🚗 ');
}
else {
    const yearsLeft = 18 - age2;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// if else statements are called as control structures

const birthYear2 = 2012;
let century;
if (birthYear2 <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

// Coding Challenge #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// Calcualting the BMI of Mark and John
// BMI = mass / height ** 2 = mass / (height * height)

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's BMI");
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
} else {
    console.log("John's BMI is higher than Mark's BMI");
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`);
}

// Type Conversion and Coercion
// Type Conversion when we manually convert from one type to another

// Type cohersion is when javascript automatically converts types behind the scenes for us

const inputYear = '1991';
console.log(inputYear + 18); // output: 199118
console.log(Number(inputYear) + 18); // output: 2009

console.log(Number('Jonas')); // output: NaN --> Not a Number

console.log(typeof (NaN));

console.log(String(23), 23);

// Javascript can only convert to string, number and boolean
// we cannot conver something to undefine and null

// Type cohersion
// Type cohersion basically happens whenever an operator is dealing with two values that have two different types, then javascript behind the scenes converts one of the values to match the other value's type

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // output: 10, here strings are converted to numbers due  minus operator triggers the opposite conversion

console.log('23' + '10' + 3); // output: 23103, here the plus operator triggers the string coer

console.log('23' * '2'); // output: 46
console.log('23' / '2'); // output: 11.5

let n = '1' + 1;
n = n - 1;
console.log(n); // output: 10
console.log(2 + 3 + 4 + '5'); // output: 95
console.log('10' - '4' - '3' - 2 + '5'); // output: 15

// Truthy and Falsy Values
// Falsy values are the values that are not exactly false but will become false when we try to convert them into boolean
// 5 falsy values in javascript are: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('JavaScript'));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean(5));
console.log(Boolean(`Jonas`));

// When does javascript does the tyoe cohercion to booleans --> In 2 scenarios
// 1. When we use logical operators
// 2. During logical context

// Type coercion in if else statements

const money = 100;
if (money) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job!");
}

let abcdefg = 123;
if (abcdefg) {
    console.log('YAY! Height is defined');
}
else {
    console.log('Height is UNDEFINED');
}

// Ewquality Operators: == vs ===
const age3 = '18';
if (age3 === 18) {
    console.log("You just became an adult :D (strict)");
}

if (age3 == 18) {
    console.log("You just became an adult :D (loose)");
}

// === is called as strict equality operator, it does not perform type coercion
// == is called as loose equality operator, it performs type coercion
// Always use strict equality operator

// Prompt fuction in javascript

// const favourite = prompt("What's your favourite number?");
// console.log(favourite); // The output is a string
// console.log(typeof (favourite));

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); // The output is a string
console.log(typeof (favourite));

if (favourite == 23) {  // here the type coercion happens '23' == 23
    console.log('Cool! 23 is an amazing number!');
}

if (favourite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!');
}

else if (favourite === 7) {
    console.log('7 is also a cool number');
}
else if (favourite === 9) {
    console.log('9 is also a cool number');
}
else {
    console.log('The number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');

// Boolean Logic

// Basic Boolean Logic: AND, OR and NOT operators
// NOT operator has more precedence than AND and OR operators

const hasDriverLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriverLicense && hasGoodVision); // AND operator
console.log(hasDriverLicense || hasGoodVision); // OR operator
console.log(!hasDriverLicense); //NOT operator

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive');
// }
// else {
//     console.log('Someone else should drive');
// }

if (hasDriverLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
}
else {
    console.log('Someone else should drive');
}