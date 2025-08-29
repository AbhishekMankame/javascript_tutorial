// Dates in JavaScript
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2023-01-21");
console.log(myCreatedDate2);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("11-21-2023"); //MM-DD-YY format
console.log(myCreatedDate3);
console.log(myCreatedDate3.toLocaleString());