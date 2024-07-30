require("dotenv").config();
const mongoose = require("mongoose");
// const User = require("../model/user");
const User = require("./user");

async function main() {
  // Connect to MongoDB
  mongoose
    .connect("mongodb+srv://ali:ali@cluster0.3n5cvj9.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });

    const user = new User({
      name: "hello",
    });
    await user.save();

}
// console.log("successfully updated");

if (require.main === module) {
  main();
}
