// let myName = "Abhishek"

// console.log(myName.truelength);

let hero = ["thor","vampire"]

let power = {
    thor : "Hammer",
    vampire : "Blood",

    getSpiderPower : function(){
        console.log(`Vampire power ${this.vampire}`)
    }
}

Object.prototype.abhi = function() {
    console.log(`abhi is present in all obj`);
}

Array.prototype.HeyAbhi = function(){
    console.log(`Abhishek say hello`);
}

power.abhi()

//inheritance

const User = {
    name : "Abhi",
    email : "abhi@business"
}

const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssign : 'JS',
    fullTime : true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// Mordan Syntax

Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUserName = "A K V"

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()