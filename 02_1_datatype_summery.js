// Primitive
// 7 types : String, Number , Boolean , Null , Undefined , Symbol , BigInt



// Reference (Non Primitive)

// Array , Objects , Functions


// const score = 200
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = num11
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigNum = 1234444n
// at the last n use for bigint number 

// ARRAY
const heros = ["shaktiman", "naagraj", "doga"]

// OBJ
let myobj = {
    name:"Abhishek",
    age:22
}

// Function
const myfunct = function(){
    console.log("Hello Good Morning")
}

console.log("AnotherId :", anotherId);
console.log("Id", typeof id);
console.log("BigNum :", typeof BigNum);
console.log("myobj :",typeof myobj);
console.log("myfunct :",typeof myfunct);
console.log("heros",typeof heros);
