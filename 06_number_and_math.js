const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNum = 32.235
// console.log(otherNum.toPrecision(3));

const hundreds = 100000000000000
// console.log(hundreds.toLocaleString('en-IN'));

// ------------------------- Math --------------------------

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(2.3));
// console.log(Math.sqrt(2));
console.log(Math.min(3,4,6,2,1));
console.log(Math.max(6,4,2,5,9));
console.log(Math.random()); // value always between 0 to 1
console.log(Math.random()*10 + 1); // But when we use bodmass etc then it's create problem
console.log((Math.random()*10)+1);  
console.log(Math.floor(Math.random()*10)+1); //round off the value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);

