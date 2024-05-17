// resizable , not associative array , array are zero index , array copy operations create shallow copies

const myArray1 = [0,1,2,3,4,5,6]
const myArray2 = ['A','B','C','D'] 

const myArray3 = new Array(1,2,3,4)
console.log(myArray3[0]);

// Array Methods ----

// myArray1.push(7) // insert at last 
// myArray1.pop() // remove last value
// myArray1.unshift(9) // insert value at first 
// myArray1.shift() // remove first 
// console.log(myArray1.includes(8));
// console.log(myArray1.indexOf(3));

const newArr = myArray1.join()
// console.log(newArr)

// Slice , splice

// console.log( "A", newArr);

const mynewarr1 = myArray1.slice(1,3)

// console.log("B", myArray1);

const mynewarr2 = myArray1.splice(1,3) //manupulate orignal array
// console.log("c",mynewarr2)
// console.log(myArray1);

