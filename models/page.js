const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  page: Object,
  completed: Boolean,
});
const PageSchema = new mongoose.Schema({
  page: Object,
  completed: Boolean,
});

module.exports = mongoose.model("Page", PageSchema);
