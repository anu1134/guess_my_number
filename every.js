// every -- checks whether every element of array is satisfying the condition
// some -- even if one element of array is satisfying condition ---> true

// return boolean

const transactions = [1000, 2000, -100, -677, 8999];

const everyResult = transactions.every((trans) => trans > 0);

const someResult = transactions.some((trans) => trans > 0);

console.log("everyResult", everyResult);
console.log("someResult", someResult);
