const express = require("express");
const User = require("./models/user");
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});