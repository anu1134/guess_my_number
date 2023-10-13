//reduce --> iterate through contents of an array and return single sum

// sum of all elements of an array

let a = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < a.length; i++) {
  sum = sum + a[i];
}

console.log("sum", sum);

// [ 1 , 2,3 ,4 5]

const sumResult = a.reduce(function (curr, sum) {
  return curr + sum;
});

/**
 * 1 + 0 = 1
 * 2 + 1 = 3
 * 3 + 3 = 6
 * 4 + 6 = 10
 * 5 + 10 = 15
 */

console.log("sum", sumResult);

// multiply all numbers

const mulResult = a.reduce((curr, mul) => curr * mul);

console.log("multiplied result", mulResult);
