const user = {
    username : "ABhi",
    age : 22,

    welcomemsg : function() {
        // console.log(`${this.username}, welcom to web`);
        // console.log(this);
    }
}

// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()

// console.log(this);

function tea(){
    console.log(this);
}

// tea()

// const chai = function () {
//     let username = "Abhi"
//     console.log(this.username);
// }
// chai()


//  = () => {}


// const chai = () => {
//         console.log(this.username);
// }
//  chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,5));

// const addtwo = (a,b) => a + b
// console.log(addtwo(2,5));

// const addtwo = (a,b) => {
//     return (a + b);
// } 
// console.log(addtwo(3,5))
 
// write return only with {} when use

// const obj = (a,b) => ({name:"abhi"}) // wrap object inside ({})f