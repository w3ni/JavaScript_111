let score = "33"
let a = null
let b = undefined
let c = "Abhishek"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNum = Number(score);
// console.log(typeof valueInNum);

// console.log(valueInNum);
// console.log("a",typeof a, "b", typeof b, "c", typeof c)

//  "33" = 33
//  "33abc" = NaN
//  True = 1  , false = 2

let isLoggedIn = 1
// if empty then false 
// if string then true
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let someNum = 33
let strNum = String(someNum)
// console.log(typeof someNum, strNum)

// ------------------------------------------------

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%2);

let str1 = "Abhishek";
let str2 = "Kumar"
// console.log(str1 + str2)

// ToPrimitive ->
// console.log("1" + 2); 
// console.log("1" + "1");
// console.log("1" + 2 + 2);
// console.log(1+2+"2");

// console.log(true)
// console.log(+true)
// console.log(true+2);

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// prefix , postfix
// gameCounter++;
++gameCounter;
console.log(gameCounter)