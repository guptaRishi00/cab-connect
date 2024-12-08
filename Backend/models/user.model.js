const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    minlength: [5, "Email name must be least 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Password name must be least 3 characters long"],
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.method.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;