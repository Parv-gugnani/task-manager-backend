require("../src/db/mongoose");
const Task = require("../src/models/task");

// 67123f5ebbfd91f61f5f106b

Task.findByIdAndDelete("67123f5ebbfd91f61f5f106b")
  .then((task) => {
    console.log(task);

    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
