//  Immediately Invoked Function Expressions

// (function chai(){
    //named IIFE
//     console.log('DB CONNECTED');
// })();


// ( () => {
//     console.log('DB CONN');
// })();

( (name) => {
    console.log(`db connectec ${name}`);
} )('WEB')

// Use IIFE for remove global variable polution 


// -------------------- JS Execute code + Code Stack --------------
// Gloable EC
// Funcation EC
// Eval EC

// Global execution Phase [ this ]
// Memory Execution Phase [ val1 - undefined , val2 - undefined etc..., function defination]
// Excution Phase [ val1 , val2  ] { new execution environment + execution thread } delete after work comp..


// Call Stack :- LIFO : last in first out


