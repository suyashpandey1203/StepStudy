const Bootcamp = require("../models/BootCamp");
const Resume = require("../models/Resume");
const Notification = require("../models/Notification");

// create bootcamp controller

// 1. Create Bootcamp
exports.createBootcamp = async (req, res) => {
  // console.log("Creating Bootcamp with data:", req.body);

  try {
    const {
      title,
      description,
      technologies,
      maxStudents,
      maxFaculty,
      startDate,
      endDate,
      location,
    } = req.body;

    const bootcamp = await Bootcamp.create({
      title,
      description,
      technologies,
      maxStudents,
      maxFaculty,
      startDate,
      endDate,
      location,
      createdBy: req.user.id,
    });

    res
      .status(201)
      .json({ success: true, message: "Bootcamp created", data: bootcamp });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 2. Upload Resume
exports.uploadResume = async (req, res) => {
  try {
    const { url, skills } = req.body;
    const resume = await Resume.findOneAndUpdate(
      { user: req.user.id },
      { url, skills },
      { new: true, upsert: true }
    );
    res
      .status(200)
      .json({ success: true, message: "Resume uploaded", data: resume });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 3. Apply to Join Bootcamp
exports.applyToBootcamp = async (req, res) => {
  try {
    const { bootcampId } = req.body;
    const bootcamp = await Bootcamp.findById(bootcampId);
    if (!bootcamp)
      return res
        .status(404)
        .json({ success: false, message: "Bootcamp not found" });

    if (bootcamp.pendingFacultyRequests.includes(req.user.id))
      return res
        .status(400)
        .json({ success: false, message: "Already applied" });

    bootcamp.pendingFacultyRequests.push(req.user.id);
    await bootcamp.save();

    res.status(200).json({ success: true, message: "Application submitted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 4. Handle Faculty Selection
exports.handleFacultySelection = async (req, res) => {
  try {
    const { bootcampId, instructorId, status } = req.body;
    const bootcamp = await Bootcamp.findById(bootcampId);
    if (!bootcamp)
      return res
        .status(404)
        .json({ success: false, message: "Bootcamp not found" });
    if (bootcamp.createdBy.toString() !== req.user.id)
      return res.status(403).json({ success: false, message: "Unauthorized" });

    // Notification logic
    const notifType =
      status === "accepted" ? "faculty_selected" : "faculty_rejected";
    const message =
      status === "accepted"
        ? "You have been selected to join the bootcamp."
        : "You were not selected for the bootcamp.";
    await Notification.create({
      recipient: instructorId,
      role: "instructor",
      message,
      type: notifType,
    });

    // Update bootcamp record
    bootcamp.pendingFacultyRequests = bootcamp.pendingFacultyRequests.filter(
      (id) => id.toString() !== instructorId
    );
    if (status === "accepted") bootcamp.joinedFaculties.push(instructorId);
    await bootcamp.save();

    res
      .status(200)
      .json({ success: true, message: "Faculty selection updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 5. Nearby Bootcamps for Student
exports.getNearbyBootcampsForStudent = async (req, res) => {
  try {
    const { longitude, latitude, maxDistance = 10000 } = req.query;
    const bootcamps = await Bootcamp.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseInt(maxDistance),
        },
      },
    });
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 6. Enroll Student in Bootcamp
exports.enrollStudentInBootcamp = async (req, res) => {
  try {
    const { bootcampId } = req.body;
    const bootcamp = await Bootcamp.findById(bootcampId);
    if (!bootcamp)
      return res
        .status(404)
        .json({ success: false, message: "Bootcamp not found" });

    if (bootcamp.enrolledStudents.includes(req.user.id))
      return res
        .status(400)
        .json({ success: false, message: "Already enrolled" });

    bootcamp.enrolledStudents.push(req.user.id);
    await bootcamp.save();

    await Notification.create({
      recipient: req.user.id,
      role: "student",
      message: "You have been successfully enrolled!",
      type: "student_enrolled",
    });

    res.status(200).json({ success: true, message: "Enrollment successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
