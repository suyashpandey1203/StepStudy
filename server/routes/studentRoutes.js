// backend/routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const { getEnrolledInstructors } = require("../controllers/studentController");
const {auth} = require("../middlewares/auth");

// GET /api/student/instructors
router.get("/instructors", auth, getEnrolledInstructors);

module.exports = router;
