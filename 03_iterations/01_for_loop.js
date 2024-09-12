// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==6) {
        // console.log("6 is number");
    }
    // console.log(element);
}

// for (let i = 1; i <= 10 ; i++) {
//     console.log(`outer loop value ${i}`);
//     for(let j = 1; j <= 10; j++){
//         // console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

let myarr = ["flash", "batman", "krish", "shaktiman", "superman"]
console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index==5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of 1 is ${index}`);
// }

for (let index = 0; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of 1 is ${index}`);
}

let score = 1

do {
    console.log(`score is ${score}`);
    score ++
} while (score <= 10);
