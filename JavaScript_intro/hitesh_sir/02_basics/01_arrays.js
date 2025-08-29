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

const newArr =  myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);

// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);

// Splice use karne ke baad, joh portion range mei tha, woh original array mei se nikal hi gaya hai