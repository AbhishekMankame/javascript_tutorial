const accountId = 144553 // const ka matlab yahi hota hai ki, hum usko change nahi kiya jaa sakta
let accountEmail = "abcd@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // This is not a good method
let accountState;

//accountId = 2 // Not allowed --> It given error
console.log(accountId);

console.log(accountEmail)
accountEmail = "defg@google.com"
console.log(accountEmail)

console.log(accountPassword)
accountPassword = "21212121"
console.log(accountPassword)

console.log(accountCity)
accountCity = "Bengaluru"
console.log(accountCity)

console.log(accountState)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
 Prefer not to use var --> Because of issue in block scope and functional scope
*/