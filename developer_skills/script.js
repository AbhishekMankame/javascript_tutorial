// Remember, we're gonna use strict mode in all scripts now!S
'use strict';
// Prettier: It is an opinionated code formatter, which means that it makes assumptions about how good code should look like, and so if we install it and use it, it will automatically format our code according to these assumptions.

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
console.log('This is loaded through the help of live server');

// Learning how to code

// How to think like a developer: Become a problem solver
// Fixing the problem solving basic issue
// Stay calm and slow down, don't just jump at a person without a plan
// Take a very logical and rational approach to solving problems (programming is just logic)

// John's 4 steps to solve any coding problem
// 1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem
// 2. Divide and conquer: Break a big problem into smaller sub-problems
// 3. Don't be afraid to do as much research as you have to
// 4. For bigger problems, write pesudo-code before writing the actual code

// Using Google, StackOverflow and MDN
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temperature amplitude? Answer: Difference between highest and lowest temperature
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2. Breaking up into sub-problem
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([3, 5, 6]);
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperature

// 1) Understanding the problem
// - With 2 arrays, should we implement

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

// merge array example
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([3, 5, 6]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 6], [9, 0, 5]);
console.log(amplitudeNew);

// Software bug: Defect or problem in a computer program. Basically any unexpectednor unintended behaviour of a computer program is a software bug
// Bugs are completely normal in software development
// fact: A real bug whuch causing an error in Harvard's computer in the 1940s was the inspiration for using the word bug for a software error

// Debugging: The process of finding bugs or errors and fixing them

// The debugging process
// 1. Identity
// 2. Find
// 3. Fix
// 4. Prevent (in the future)

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius:')),
  };
  console.log(measurement);

  // B) Find the bug
  console.table(measurement); // This is used to display the object in a table format
  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//debugger;

// A) Identify the bug
console.log(measureKelvin());

/////////////////////////
// Coding Challenge #1
/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printforecast' which takes in an array 'arr' and logs a string like the above to the console. Use the problem-solving framework: Understand the problem and break it up into sub-problems! 

TEST DATA 1: [17, 27, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? Answer: Index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - String needs to contain day (index + 1)
// - Add ...  between elements and start and end of string
// - log string to console

const data1 = [17, 27, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data1);
