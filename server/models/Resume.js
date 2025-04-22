const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, // each instructor has only one resume
  },
  url: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], // Extracted skill tags (e.g., ['Node.js', 'MongoDB'])
    default: [],
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Resume", resumeSchema);
