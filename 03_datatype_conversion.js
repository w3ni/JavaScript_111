let score = "33"
let a = null
let b = undefined
let c = "Abhishek"

console.log(typeof score);
console.log(typeof (score));

let valueInNum = Number(score);
console.log(typeof valueInNum);

console.log(valueInNum);
console.log("a",typeof a, "b", typeof b, "c", typeof c)

//  "33" = 33
//  "33abc" = NaN
//  True = 1  , false = 2

let isLoggedIn = 1
// if empty then false 
// if string then true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNum = 33
let strNum = String(someNum)
console.log(typeof someNum, strNum)