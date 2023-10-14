var user = {
  firstName: "Anshika",
  lastName: "Agarwal",
  snack: "chipppppp",
  printName: function (firstName, lastName) {
    //console.log("anshika......");
    //console.log(`${this.firstName} ${this.lastName}`); //Anshika Agarwal
    var fullName = `${firstName} ${lastName}`;
    return fullName;
  },
  getName: () => {
    console.log(this); // global object
    console.log(this.firstName + " " + this.lastName); // undefined undefined
    console.log(`${this.firstName} ${this.lastName}`); // template literals
  },
};
// user.printName();

// function abc() {
//   console.log(this);
// }
// abc();

// Any this keyword declared function inside JS Object , points to that particular object

// this keyword in function ---- > global object
// function inside object ----> object

// call , apply and bind

var logName = function (snack, hobby) {
  console.log(this.printName("akash", "sharma") + " is cool");
  console.log("snack", this.snack);
  console.log("hobby", hobby);
};

// var name1 = logName.bind(user);

// name1("chips", "cooking");

// Function borrowing in JS

logName.call(user, "chips", "cooking");
logName.apply(user, ["chips", "cooking"]);
