const name = "hitesh"
const repoCount = 50

console.log(name + repoCount)

// It is better to use backticks (``) --> It helps in string interpolation --> helps for placeholders

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // String interpolation

const gameName = new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // yaha par original value change nahi hota
console.log(gameName);
console.log(gameName.toLowerCase());