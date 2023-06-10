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

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// Calcualting the BMI of Mark and John
// BMI = mass / height ** 2 = mass / (height * height)

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const MarkHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, MarkHigherBMI);


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