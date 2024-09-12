//if

// const isUserLoggedIn = true
const temprature = 40

if (temprature < 50) {
    console.log("Less than 50");
} else {
    console.log("grater than 50");
}
console.log("Execute");

//  < , > , <= , >= , == , != , === , !===  

const score = 100
if (score > 100) {
    const power = "fly"
    console.log(`Use power : ${power}`);
}
// console.log(`use power ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test 2");

if(balance < 500){
    console.log("less than");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900){
    console.log("Less then 900");
} else {
    console.log("Less than 1200");
}

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2===2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}