require("dotenv").config();
const mongoose = require("mongoose");
// const User = require("../model/user");
const User = require("./user");
console.log(process.env.NAME);

async function main() {
  // Connect to MongoDB
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
  let id = process.env.NAME ?? null;
  const user = new User({
    name: "hello",
    id,
  });
  await user.save();
}
// console.log("successfully updated");

if (require.main === module) {
  main();
}
