var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  comment: { type: String },
  email: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
  issueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
});

module.exports = mongoose.model("Comment", commentSchema);
