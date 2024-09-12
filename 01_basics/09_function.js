function sayMyName(){
    console.log('Abhishek')
}

sayMyName()

// function addTwoNum(a,b){
//     console.log(a+b);
// }

// addTwoNum(2,4)

function add(a,b){
    // let result = a +b
    console.log("HEllo");
    // return result
    return a+b
}

const x = add(1,3)
// console.log(x);


function login_user_msg(username){
    return `${username} just logged in`
}

// console.log(login_user_msg("Abhishek"))
// when nothing pass anything then undefined


function calcartprice(...num1){
    return num1
}

// console.log(calcartprice(100,200,300,400));

const user = {
    username : "Abhi",
    age : 22
}

function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);
}
// handleObj(user)

handleObj({
    username : "Abhi",
    age : 22
})


const newArr = [12,124,124,123]

function returnvalue(getArr){
    return getArr[0]
}

console.log(returnvalue(newArr));