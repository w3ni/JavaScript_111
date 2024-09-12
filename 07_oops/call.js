function setuser(usersname){
    this.usersname = usersname
    console.log("called ..... .. .. .. .");
}

function createUser(usersname,email,pass){
    setuser.call(this,usersname)
    this.email = email
    this.pass = pass
}

const a = new createUser("a","A@com","12345")
console.log(a);

// call for refrenc hold