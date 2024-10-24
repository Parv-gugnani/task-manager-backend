const jwt = require("jsonwebtoken");
const User = require;

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {}
};
