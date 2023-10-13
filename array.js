// Higher Order Functions

// Function which takes another function as argument

let a = [1, 2, 3, 4, 5];

const length = a.length;

for (let i = 0; i < length; i++) {
  console.log(a[i]);
}

// forEach

a.forEach((element) => console.log(element));

const result = a.forEach(function (num) {
  console.log(num);
  return num;
});

console.log("result", result);
