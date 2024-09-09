const accountId = 14435
let accountEmail = "mahak@gmail.com"
var accountPassword = "12345678"
accountCity = "Sangrur"
let accountState;   

// accountId = 2562  not allowed
accountEmail = "mahakpreet@gmail.com"
accountPassword = "87654321"
accountCity = "Rajpura"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])
