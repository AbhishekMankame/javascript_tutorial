// Memory and threads in JS
// Here we have two memories --> Stack and Heap
/*Primitive datatypes mei - stack memory use hoti hai and non primitive datatypes mei heap memory use hoti hai
Stack --> Primitive
Heap --> Non primitive

Stack mei data copy milta hai,
Heap mei original value ka reference milta hai
*/

let myYoutubename = "hiteshchoudarydotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"
console.log(myYoutubename)
console.log(anotherName);

let userOne = {

    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)