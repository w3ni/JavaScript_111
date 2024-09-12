// for in
// use to iterate obj

const myObj = {
    js : "javascript",
    py : "python",
    sh : "bash"
}

for (const key in myObj) {
    console.log(`${key} shortcut for : ${myObj[key]}`);
}

const prog = ["js", "rb", "py"]
for (const key in prog) {
    console.log(prog[key]);
}