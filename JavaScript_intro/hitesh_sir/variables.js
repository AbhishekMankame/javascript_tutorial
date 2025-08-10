const accountId = 144553 // const ka matlab yahi hota hai ki, hum usko change nahi kiya jaa sakta
let accountEmail = "abcd@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

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

console.table([accountId, accountEmail, accountPassword, accountCity])