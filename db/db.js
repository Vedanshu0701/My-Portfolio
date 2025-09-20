const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vedanshu:vedanshu12345@node.znzbqkm.mongodb.net/portfolioDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB Connected Successfully."))
  .catch(err => console.error(" MongoDB Connection Failed:", err));

module.exports = mongoose;
