let a = 10;
//abc;
b();

console.log(a); 

console.log(abc);

// Function expression
var abc = function x() {
    console.log(a);  
}

console.log(abc);

abc();

function b() {
    var a = 40;
    console.log(a);
}

/**
 * 10 20 30
 * 
 */

console.log(getName); // undefined

var getName = function () {
    console.log("Anshika Agarwal") // Anshika Agarwal
}

getName();