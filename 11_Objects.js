// singleton
// litrels = not single ton
// constructor = always singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Abhishek",
    "full name" : "Abhishek Kumar",
    [mySym] : "MyKeys",
    age : 22,
    course : "BCA",
    location : "India",
    email : "Abhishek@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Abhishek@microsoft.com"
// console.log(jsUser.email);

// Object.freeze(jsUser) //after this changes not propogate
jsUser.email = "abhishek@yahoo"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello GM!");
}

jsUser.greeting2 = function(){
    console.log(`Hello ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());