const CourseProgress = require("../models/CourseProgress");
const mongoose = require("mongoose");

exports.getEnrolledInstructors = async (req, res) => {
  try {
    const studentId = req.user.id;

    // 1) find all progress records for this user, populate course → instructor
    const progresses = await CourseProgress.find({ user: studentId })
      .populate({
        path: "course",
        populate: {
          path: "instructor",
          select: "name email role", // pick whatever fields you need
        },
      })
      .lean();

    // 2) extract instructors, de-duplicate by _id
    const instructors = progresses
      .map((p) => p.course?.instructor)
      .filter(Boolean);

    const unique = Array.from(
      new Map(instructors.map((i) => [i._id.toString(), i])).values()
    );

    // 3) return
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
