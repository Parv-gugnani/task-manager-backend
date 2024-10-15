const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true, //so that someone dont haev extra space
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be postive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password can't contain 'password'");
      }
      if (value.toLowerCase().includes(this.name.toLowerCase())) {
        throw new Error("You cannot use your name");
      }
    },
  },
});

module.exports = User;
