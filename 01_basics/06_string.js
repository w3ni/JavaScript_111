const name = "Abhishek BCA CSF"
const repoCount = 50

// console.log(name+repoCount+"OK")
console.log(`Hello my name is ${name} and my repo is ${repoCount}`)

// New - create string object
const gameName = new String('Abhishek-kumar-verma')
// console.log(gameName[3])
// console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('b'))
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newStr = gameName.substring(0,4)
console.log(newStr);

const anotherStr = gameName.slice(-8,4);
console.log(anotherStr);

const newStrOne = "     Abhishek    "
console.log(newStrOne);
console.log(newStrOne.trim());

const url = "https://hitesh.com/abhishek%20verma"

console.log(url.replace('%20','-'));
console.log(url.includes('abhishek'))

console.log(gameName.split('-'));
