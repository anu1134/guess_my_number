console.log("learning javascript");

// Browser api
setTimeout(() => {
  console.log("js is asynchronous");
}, 10);

setTimeout(() => {
  console.log("js is asynchronous!!!!");
}, 10);

console.log("javascript is synchronous");

setTimeout(() => {
  console.log("statement 2");
}, 0);

setTimeout(() => {
  console.log("statement 3");
}, 20);

console.log("javascript is awesome");

longRunningCode();

function longRunningCode() {
  const start = Date.now();
  while (Date.now() - start < 3000) {}
}

// 3 seconds to execute

// millions of lines of code

// console.log(window);
console.log(global); // js global objecy

// setTimeout // setInterval // fetch // console ----> web APis
