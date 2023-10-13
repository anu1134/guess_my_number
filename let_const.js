// //console.log(a);
// let a = 10;

// a = 20;
// let & const variables can be used only after initialization

// let , const ----> reference error
// const ---> syntax error , typeerror

//console.log(a); // reference
// console.log(b); //undefined
// let a = 10;
// console.log(a); // 10
// var b = 15; 
// console.log(window.a); // undefined
// console.log(window.b); //15

// Temporal dead zone

// Any variables declared using let and const , cannot be accessed before initialization
// these variables are in temporal dead zone

let a = 10;
a = 30;

xyz();

function xyz() { // local scope
    let a = 20;
    console.log(a);
}

console.log(window.a);
console.log(a);
