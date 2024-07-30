const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Sets the default value to the current date and time
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
