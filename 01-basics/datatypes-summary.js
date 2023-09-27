// Primitive

//  7 types : String , Number , Boolean , null , undefined , Symbol , BigInt , 


const score = 100
const scoreValue = 100.28

const isLoggedIn = true 

const outSideTemp = null

let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId); //false


// const bigNumber = 3433443434434343333333333333n







// Reference Type (non primitive)


// Array , Object , Function



const heroes = ["shaktiman"  ,"naagraj" , "doga"]

let myObj = {
    name : "Sourav" ,
    age : 27 
}



const myFunction = function() {
     console.log("Hello World");
}