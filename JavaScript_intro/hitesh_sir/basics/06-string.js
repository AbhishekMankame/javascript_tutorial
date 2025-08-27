const name = "hitesh"
const repoCount = 50

console.log(name + repoCount)

// It is better to use backticks (``) --> It helps in string interpolation --> helps for placeholders

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // String interpolation

const gameName = new String('hitesh-hc')
// String methods
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // yaha par original value change nahi hota
console.log(gameName);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4); // here 0th character is included and 4th character is not included
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   hitesh     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Starting and End space ko remove kar deta hai