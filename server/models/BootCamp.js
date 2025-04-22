const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  maxStudents: Number,
  maxFaculty: Number,
  startDate: Date,
  endDate: Date,
  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: [Number], // [longitude, latitude]
    address: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  joinedFaculties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  pendingFacultyRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  status: {
    type: String,
    enum: ["Upcoming", "Ongoing", "Completed"],
    default: "Upcoming"
  }
}, { timestamps: true });

bootcampSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Bootcamp", bootcampSchema);
