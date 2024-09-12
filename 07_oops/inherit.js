class User{
    constructor(usrename){
        this.usrename = usrename
    }

    logMe(){
        console.log(`USERNAME is ${this.usrename}`);
    }
}


class Teacher extends User{
    constructor(usrename,email,pass){
        super(usrename)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`course added by ${this.usrename}`);
    }
}

const a = new Teacher("a","a@abc","123")
console.log(a);
a.addCourse()