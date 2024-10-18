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

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }

      res.send(user);
    })
    .catch((e) => {
      res.status(500).send();
    });

  console.log(req.params);
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

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((task) => {
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }

      res.send(task);
    })
    .catch((e) => {
      res.status(500).send();
    });

  console.log(req.params);
});

//Goal : Setup the task creation endpoint

//1: create seprate file for the task model
//2: create the task creation endpoint (handle sucess and error)
//3: test the endpoint from postMan
//completed

//Goal:2
//1: create a endpoint to fetch all task
//2: create a endpoint to fetch task by id
//3: setup the postman
//completed

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
