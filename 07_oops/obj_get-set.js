const User = {
    _email: 'a@com',
    _pass: 'abc',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};
1
const coffee = Object.create(User);
console.log(coffee.email);
