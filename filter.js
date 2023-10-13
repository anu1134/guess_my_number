// filter ---> HOF which takes out some contents of an array based on some condition

// filter ---> returns a new array

let a = [1, 2, 3, 4, 5];

// even numbers
// odd numbers
// positive number
// negative number

const evenArray = a.filter(function (num) {
  return num % 2 == 0;
});

console.log("even", even);

console.log("even numbers", evenArray);

console.log("original array", a);

const oddArray = a.filter((num) => num % 2 != 0);

console.log("odd numbers", oddArray);
