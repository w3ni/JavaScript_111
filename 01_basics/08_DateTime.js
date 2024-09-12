console.log("Date And Time");

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0 , 24)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now());

// convert milisec. to second - 
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

x = `The date is ${newDate.getDate()} and the time is ${newDate.getTime()}`
console.log((x));

newDate.toLocaleString('default', {
    weekday : 'long',

})

console.log(newDate);

 
