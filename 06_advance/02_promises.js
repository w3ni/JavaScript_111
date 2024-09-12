const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    //DB calls, cryptography , network
    setTimeout(function () {
        console.log('async task done');
        resolve(); // Resolve the promise after the async task is done
    }, 1000);
});

// resolve, rejection
promiseOne.then(function () {
    console.log('Promise consumed');
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Abhishek", email: "example.xyz" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Abhishek", pass: "123@123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

const username = promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));


    const promiseFive = new Promise(function(resolve,reject){
        setTimeout(function () {
            let error = true;
            if (!error) {
                resolve({ username: "Python", pass: "123@123" });
            } else {
                reject("ERROR: Python Something went wrong");
            }
        }, 1000);
    })

    async function consumefive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    // consumefive()

    async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E:", error);
            
        }
    }

    // getAllUsers()

    
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json()
    }).then ((data) => {
        console.log(data);
    }).catch((error) => console.log(error))