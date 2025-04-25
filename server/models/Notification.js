const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String, // "request" or "response"
    enum: ["request", "response"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  resumeUrl: String, // for faculty upload
  dateSuggested: Date, // if bootcamp owner replies
  seen: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Notification", notificationSchema);
