// map --- transforms the contents of an array

// print the square of each element of array

// always returns a new array

let a = [1, 2, 3, 4, 5];

let squaredArray = a.map((element) => element * element); // [1, 4, 9, 16, 25]

const resultArray = a.map(function (num) {
  return num * num;
});

function square(num) {
  return num * num;
}

const numArray = a.map(square);

console.log("squared array", squaredArray);

console.log("result array", resultArray);
console.log("result array", numArray);

console.log("original array", a);
