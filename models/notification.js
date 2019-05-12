const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  issueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Issues",
    required: true
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  notification: { type: String, required: true }
});

module.exports = mongoose.model("Notification", notificationSchema);
