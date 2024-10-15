const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const newTask = new Task({
  description: "This is my first task",
  completed: false,
});

newTask
  .save()
  .then(() => {
    console.log(newTask); // Log the newly created task
  })
  .catch((error) => {
    console.log("Error!", error);
  });
