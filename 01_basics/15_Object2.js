// Singleton object :
// const tinderUser = new object{}

// Non-singleton object :
const tinderUser = {}

tinderUser.id = "123xyz"
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        userfullname : {
            first : "Abhishek",
            last : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.first);

// ? use for optional chaining

const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",2:"b",3:"b"}
// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign({}, obj1,obj2)
const obj4 = {...obj1,...obj2}
// console.log(obj4);

const users = [
    {
        
    },
    {
        id : 1,
        email : "Abhishe@gmail.com"
    },
]

// users[1].email

/*
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))

*/

const course = {
    coursename : "javascript",
    price : "9999",
    courseInstructor : "Abhishek"
}

// de-structured 
const {courseInstructor : instructor} = course

console.log(course.courseInstructor);
console.log(instructor);

