
// false values :: 0 , false , -0 , BigInt 0n, "" , null , undefined , NaN
// true values :: "0" , [] , 'false' , " " , {} , function(){}

// console - false == 0 , false == '' , 0 == '' : true


const userEmail = "abhishek@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have email");
}

if (userEmail.length === 0 ){
    console.log("Array is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log('obj is empty');
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary Operator
// Condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("more than 80");