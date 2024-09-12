class User{
    constructor(email, pass){
        this.email = email;
        this.pass = pass
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get pass(){
        // return this._pass.toUpperCase()
        return `${this._pass}abhishek`
    }

    set pass(value){
        this._pass = value.toUpperCase()
    }

}

const abhi = new User("@abhishek", "abc")
// console.log(abhi.pass);
console.log(abhi.email);