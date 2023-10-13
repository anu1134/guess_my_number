// function which is inside another function , then this inner function has access to variables of outer function

// function x() {
//   var a = 7;

//   function y() {
//     console.log(a);
//   }

//   return y;
// }

// var z = x();

// z();

//console.log("output", );

function b() {
  function y() {
    let a = 900;
    console.log(b);

    function abc() {
      console.log(a, b);
    }

    var b = 100;

    abc();
  }

  y();
}

b();
