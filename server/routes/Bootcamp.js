const express = require("express");
const router = express.Router();
const {
  createBootcamp,
  uploadResume,
  applyToBootcamp,
  handleFacultySelection,
  getNearbyBootcampsForStudent,
  enrollStudentInBootcamp,
} = require("../controllers/Bootcamp");

const { auth, isInstructor, isStudent } = require("../middlewares/auth");

// Instructor Routes
router.post("/create", auth, isInstructor, createBootcamp);
router.post("/upload-resume", auth, isInstructor, uploadResume);
router.post("/apply", auth, isInstructor, applyToBootcamp);
router.post("/select-faculty", auth, isInstructor, handleFacultySelection);

// Student Routes
router.get("/nearby", auth, isStudent, getNearbyBootcampsForStudent);
router.post("/enroll", auth, isStudent, enrollStudentInBootcamp);

module.exports = router;
