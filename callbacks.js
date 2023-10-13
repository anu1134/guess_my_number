// function doStep1(num) {
//   setTimeout(() => {
//     return num + 1;
//   }, 1000);
// }

// function doStep2(num) {
//   return num + 2;
// }

// function doStep3(num) {
//   return num + 3;
// }

// function doOperation() {
//   let result = 0;

//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);

//   console.log("result", result);
// }

doOperation();

// callbacks

// doom of pyramid // callback hell

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log("result3", result3);
      });
    });
  });
}

function doStep1(num, callback) {
  const result = num + 1;
  callback(result);
}

function doStep2(num, callback) {
  const result = num + 2;
  callback(result);
}

function doStep3(num, callback) {
  const result = num + 3;
  callback(result);
}
