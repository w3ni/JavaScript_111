//  Object.getOwnPropertyDescriptor(Math, "PI")

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// const mynewobj = Object.create(null)

const coffee = {
    name : "Coffee",
    price : 50,
    isAvailabe : true,

    orderCoffee : function(){
        console.log("Coffee nahi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, 'name', {
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (const [key,value] of Object.entries(coffee)) {
    if(typeof value !== 'function'){
        console.log(`${key} ${value}`);

    }
    
}