// returns first element of array which matches condition

const a = [1, 2, 3, 4, 5, -1, 9, -7];

// find any negative number

const result = a.find((num) => num < 0);

const filter = a.filter((num) => num < 0);

const index = a.findIndex((num) => num < 0);

console.log("result", result);

console.log("idex", index);

console.log("filter", filter);
