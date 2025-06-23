const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});
const TaskSchema2 = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Part", TaskSchema2);
