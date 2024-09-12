
// ---------- Filter --------------------

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter( (num) => {
//     return num > 4 
// })
// console.log(newNum);


// const newNum = []
// myNum.forEach( (num) => {
//     if (num>4) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);


// ---------------------------------------------

const books = [
    {title: 'Book One' , genre: 'Fiction', publish: 1981},
    {title: 'Book Two', genre: 'Comedy', publish: 2002},
    {title: 'Book Three', genre: 'Science', publish: 2001},
]

let userBook = books.filter( (bk) => bk.title === "Book One" )
userBook = books.filter( (bk) => {return bk.publish >= 2000 && bk.genre === "Science"} )
console.log(userBook);