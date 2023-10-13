let success = true;
const promiseObject = new Promise(function (onFulfilled, onRejected) {
  if (success) {
    onFulfilled("successfull");
  } else {
    onRejected("Rejected");
  }
});

//console.log("promise", promiseObject);

promiseObject.then((res) => console.log(res));

promiseObject.catch((err) => console.log(err));

// fetch data in javascript

// dummy api

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((random) => console.log(random))
  .catch((err) => console.log(err));
