const express = require("express");

const router = express.Router();

// POST /api/start-call
// Student initiates a call with instructor
router.post("/start-call", (req, res) => {
  const { studentId, instructorId } = req.body;

  if (!studentId || !instructorId) {
    return res.status(400).json({
      error: "studentId and instructorId are required",
    });
  }

  const roomName = `call_${studentId}_${instructorId}_${Date.now()}`;

  res.status(200).json({ roomName });
});

module.exports = router;
