// Js and classes

// Collection of properties and methos


const user = {
    username : "Abhi",
    loginCound : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got details");
    }
}

console.log(user.username);
console.log(user.getUserDetails);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("hitesh",12, true)

console.log(userOne);