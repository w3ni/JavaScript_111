const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// console.log(myTotal);

// const myTotal = myNum.reduce( (acc,curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price : 2000
    },
    {
        itemName : "python",
        price : 20000
    },
    {
        itemName : "data science",
        price : 3000
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);