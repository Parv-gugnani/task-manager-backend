require("../src/db/mongoose");
const User = require("../src/models/user");
// 670e3276fa75bbf3c71a2398

User.findByIdAndUpdate("670e3276fa75bbf3c71a2398", { age: 1 })
  .then((user) => {
    console.log(user);

    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

//there 1 user with age 1

//goal 1
// mess with promise chaining
//1: create promise-chaining.js
//2: load moongse and requrd
//3: remove a given task by id
//4: get and print the total number of incomplete task
//test
