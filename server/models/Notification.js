const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "instructor"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: [
      "faculty_invite",        // for instructor
      "faculty_selected",      // for instructor
      "faculty_rejected",      // for instructor
      "student_enrolled",      // for student
      "payment_success",       // for student
      "bootcamp_update",       // both
      "reminder",              // both
    ],
    default: "bootcamp_update",
  },
  link: {
    type: String, // optional frontend redirect
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Notification", notificationSchema);
