// backend/controllers/studentController.js
const CourseProgress = require("../models/CourseProgress"); // corrected casing
const mongoose = require("mongoose");

exports.getEnrolledInstructors = async (req, res) => {
  try {
    const studentId = req.user.id;

    // 1) Query by userId, not "user"
    const progresses = await CourseProgress.find({ userId: studentId })
      .populate({
        // 2) Populate courseID, then nested instructor
        path: "courseID",
        model: "Course",
        populate: {
          path: "instructor",
          model: "User",
          select: "name email role",
        },
      })
      .lean();

    // 3) Extract populated instructors (under courseID)
    const instructors = progresses
      .map((p) => p.courseID?.instructor)
      .filter(Boolean);

    // 4) De-duplicate by _id
    const unique = Array.from(
      new Map(instructors.map((i) => [i._id.toString(), i])).values()
    );

    return res.status(200).json({
      success: true,
      count: unique.length,
      data: unique,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};
