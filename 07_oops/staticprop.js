class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

    static createid(){
        return `12555`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const abhi = new User('Abhishek')
console.log(abhi);

const phone = new Teacher("samsung", "sam@@@")
console.log(phone.createid());