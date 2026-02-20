const accountId = 4334
let accountEmail = "aarush04global@gmail.com"
var accountPassword = "12345"
accountCity = "UP"
let accountState;

// accountId = 2 // not allowed


accountEmail = "aarushglobal04@gmail.com"
accountPassword = "31243"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])