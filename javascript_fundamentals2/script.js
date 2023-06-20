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

// Functions
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

// function fruitProcessor(apples, oranges) {
//     console.log(typeof apples, typeof oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

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

const age1 = calcAge1(1991); // 1991 is an agruement
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {  // anonymous function
    return 2037 - birthYear;
}

// Anonymous function is basically an expression, which produces a value, and we can store that value in a variable

const age2 = calcAge2(1991);
console.log(age1, age2);

// One of the differences between function declaration and function expression is that we can call function declaration before it is declared in the code, but we cannot do the same with function expression

// Arrow function
// Arrow function is a special form of function expression, and is always anonymous

const calcAge3 = birthYear => 2037 - birthYear; // arrow function
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// one of the main differences between arrow function and function expression is that arrow function does not get a 'this' keyword

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
// Reviewing functions
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already reitred 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


// Coding challenge 5: CHALLENGE #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// caluclate the average score for each team
// test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// Function checkWinner
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas}) `);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log('No one wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Arrays
// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// Two of the most important data structures in JavaScript are arrays and objects

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); // Created an array using array function
console.log(years);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length); // length property
console.log(friends[friends.length - 1]) // last element of the array

// In JavaScript, we can mutate arrays even though they are const
// In JavaScript only primitive values are immutable, but arrays and objects are mutable
friends[2] = 'Jay';
console.log(friends);

// Note: We can replace the elements of array, but we cannot replace the entire array --> we will get assignment to constant variable error

// different data types can be stored in an array
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

//console.log(calcAge(years));
const age4 = calcAge(years[0]);
const age5 = calcAge(years[1]);
const age6 = calcAge(years[years.length - 1]);
console.log(age4, age5, age6);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Basci array operations (methods)

// Add elements
const newLength = friends.push('Jay'); // push method adds elements to the end of the array, also returns the length of the new array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // unshift method adds elements to the beginning of the array, also returns the length of the new array
console.log(friends);

// Remove elements
const popped = friends.pop(); // pop method removes the last element of the array, also returns the removed element
console.log(friends);
console.log(popped);

friends.shift(); // shift method removes the first element of the array, also returns the removed element
console.log(friends);
console.log(friends.indexOf('Steven')); // indexOf method returns the index of the element in the array
console.log(friends.indexOf('Bob')); // returns -1 if the element is not in the array

console.log(friends.includes('Steven')); // includes method returns true if the element is in the array, otherwise returns false

console.log(friends.includes('Bob')); // includes function works with strict equality
// we can write incoudes method to write conditional statements

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

// Coding Exercise 6: CHALLENGE #2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip => bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = bills + tips; --> this one will return a concatenated string 
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
console.log(bills, tips, totals);

// Introduction to objects
// Objects are another fundamental data structure in JavaScript
// In objects, we can define key value pairs
// In objects we use curly braces

// const jonas1 = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// }; // object literal syntax
// // In object the order of the elements does not matter

// // In arrays, we use the index of the element to retrieve the value, whereas in objects we use the name of the property

// console.log(jonas1);

// // Dot vs. Bracket notation
// console.log(jonas1.lastName); // dot notation
// console.log(jonas1['lastName']); // bracket notation

// const nameKey = 'Name';
// console.log(jonas1['first' + nameKey]);
// console.log(jonas1['last' + nameKey]);

// // In bracket notation, we can put any expression that we want
// // In dot notation we need to use the exact or final property name and not a computed property name

// // so when to use the dot notation and when to use the bracket notation?
// // we can use the dot notation when we know the property name in advance
// // we can use the bracket notation when we don't know the property name in advance

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// console.log(interestedIn);

// if (jonas1[interestedIn]) {
//     console.log(jonas1[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// jonas1.location = 'Portugal';   // adding new properties to the object
// jonas1['twitter'] = '@jonasschmedtman'; // adding new properties to the object
// console.log(jonas1);

// // Challenge
// // "Jonas has 3 friends, and his best friend is calle d Micheal"
// console.log(`${jonas1.firstName} has ${jonas1.friends.length} friends, and his best friend is called ${jonas1.friends[0]}`);

// const jonas1 = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function (birthYear) {
//         return 2037 - birthYear;
//     }
// };

// console.log(jonas1.calcAge(1991));
// console.log(jonas1['calcAge'](1991));

// Alternate and efficient way by using 'this' keyword

const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas1.calcAge());
console.log(jonas1.age);
console.log(jonas1.age);
console.log(jonas1.getSummary());

// console.log(jonas1['calcAge'](1991));

// Challenge
// 'jonas is a 46-year old teacher, and he has a driver's license'

// Coding Exercise 7: CHALLENGE #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

// Loops