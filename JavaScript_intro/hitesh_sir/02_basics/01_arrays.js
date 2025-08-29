// array

const myArr = [0, 1, 2, 3, 4, 5]; // Javascripts ke array resizable hote hai, we can add more elements, elements can be of different datatypes
// Array is 0-based indexed in JS
console.log(myArr[0]);

const myHeros = ["shaktiman", "nagaraj"];
const myArr2 = new Array(1,2,3,4);
myArr.unshift(8);
myArr.shift();
//myArr.shift();
// Array methods
myArr.push(6);
myArr.push(7);
myArr.pop();
console.log(myArr);

console.log(myArr.includes(2));
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(2));