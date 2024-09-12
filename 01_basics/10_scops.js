let a = 900

if (true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log(a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// block scop and window scops are diffrent

function one(){
    const username = "Abhishek"

    function two(){
        const web = "mobile"
        console.log(username);
    }
    // console.log(web);

    two()
}

// one()

if (true){
    const username = "Abhishek"
    if (username === 'Abhishek'){
        const web = "Mobi"
        // console.log(username + web);
    }
    // console.log(web);
}
// console.log(username);

// ------------------------------ Interesting ---------------------

// console.log(addone(4));

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}

addTwo(5)


