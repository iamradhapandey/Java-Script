const accountId = 144567
let accountEmail = "radhapandeyssm@gmail.com"
var accountPassword = "12345"
accountCity = "bhopal"

//accountId = 2// if any value is intialise in const then it will not change.
/*  if any value is intialise in let, and var then it will be change. */

accountEmail = "pandeyradha@gmail.com"
accountPassword = "3456"
accountCity = "sasaram"// In js create variable without using keywords, but it is not correct method to use it.
let accountState;// if we find and varaible not intialise value in it,then js know that it is undefined.

console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
/*
perfer not tonuse var in js ,beacause of issue in block scope and functional scope
*/