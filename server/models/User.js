const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  accountType: {
    type: String,
    enum: ["Student", "Instructor", "Admin"],
    required: true,
  },

  active: {
    type: Boolean,
    default: true,
  },

  approved: {
    type: Boolean,
    default: true,
  },

  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },

  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

  image: {
    type: String,
    required: true,
  },

  courseProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
  ],

  token: {
    type: String,
  },

  resetPasswordExpires: {
    type: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  // 🔽🔽🔽 Bootcamp-related additions 🔽🔽🔽

  bootcampResume: {
    type: String, // resume file URL (Cloudinary etc.)
  },

  bootcampStatus: {
    type: String,
    enum: ["None", "Applied", "Accepted", "Rejected"],
    default: "None",
  },

  bootcampNotifications: [
    {
      message: String,
      type: String,
      isRead: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
