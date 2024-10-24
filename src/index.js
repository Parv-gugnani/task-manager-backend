const express = require("express");
const User = require("./models/user");
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("../src/routers/userRouter");
const taskRouter = require("../src/routers/taskRouter");
const jwt = require("jsonwebtoken");
const Task = require("./models/task");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

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
