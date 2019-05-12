const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const watcherSchema = mongoose.Schema({
  issueId: {
    type: String,
    required: true,
    unique: false
  },
  userId: {
    type: String,
    required: true,
    unique: false
  },
  email : { type: String, required: true }
});

watcherSchema.index({ issueId: 1, userId: 1 }, { unique: true });
watcherSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Watcher", watcherSchema);
