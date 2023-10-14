// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then((random) => console.log(random))
//   .catch((err) => console.log(err));

// asynchronous call
function fetchData() {
  return fetch("https://dummyjson.com/products/1");
}

async function getData() {
  try {
    const data = await fetchData();
    const response = await data.json();
    console.log("response", response);
  } catch {
    console.log("error in fetching data");
  }
}

getData();
