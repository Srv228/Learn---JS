const accountId = 144553
let accountEmail = 'deysourav756@gmail.com'
var accountPassword = "12345"
accountCity = "Raghunathpur"
let accountState; //undefined
 

// accountId = 2 //not allowed

accountEmail = 'deysourav2018@gmail.com'
accountPassword = '212121'
accountCity = 'Purulia'


console.log(accountId);


/*

Prefer not to use var -> because of issue in block scope and functional scope

*/


// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])