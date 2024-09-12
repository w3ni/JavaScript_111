function mulb5(num){
    return num*5
}

mulb5.power = 2
console.log(mulb5(5));
console.log(mulb5.power);
console.log((mulb5.prototype));

function createUser(usersname , score){
    this.usersname = usersname
    this.score
}

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const a = new createUser("A",1)
const b = new createUser("B",2)

b.printMe()