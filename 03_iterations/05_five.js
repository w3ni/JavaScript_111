// forEach
// callBack function = no name , iterator 

const code = ["js", "ruby", "bash"]

// code.forEach(function name (item) {
//     console.log(item);
// })

// code.forEach( (item) => {
//     console.log(item);
// })

// function printme (item){
//     console.log(item);
// }

// code.forEach(printme)

// code.forEach( (item, index , arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        langName  : "Javascript",
        langFile : "js"
    },

    {
        langName  : "Python",
        langFile : "py"
    },

    {
        langName  : "Bash",
        langFile : "sh"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})

const coding = ["sh" , "js" , "py"]

// for Each not return any value

// const values = coding.forEach ( (item) => {
//     console.log(item);
    
// })
// console.log(values);