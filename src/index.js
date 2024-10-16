const express = require("express");
const User = require("./models/user");
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 3000;

const Task = require("./models/task");

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
      res.send(e);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
      res.send(e);
    });
});

//Goal : Setup the task creation endpoint

//1: create seprate file for the task model
//2: create the task creation endpoint (handle sucess and error)
//3: test the endpoint from postMan

//completed

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
