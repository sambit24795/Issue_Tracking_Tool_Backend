const mongoose = require("mongoose");

const issueSchema = mongoose.Schema({
  issueTitle: { type: String, required: true },
  issueStatus: { type: String, required: true },
  issueAssignedTo: { type: String, required: true },
  issueDescription: { type: String, required: true },
  issueDate: { type: String, required: true },
  imagePath: { type: String, required: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  creatorName: { type: String, required: true }
});

module.exports = mongoose.model("Issue", issueSchema);
