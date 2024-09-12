//ES six

class User {
    constructor(username , email , pass){
        this.username = username;
        this.email = email
        this.pass = pass
    }

    encryptpass(){
        return `${this.pass}abc`
    }

    changename (){
        return `${this.username.toUpperCase()}`
    }
}

const a = new User("A","A@gmail","1234")

console.log(a.encryptpass());
