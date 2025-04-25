const Notification = require("../models/Notification");
const User = require("../models/User");

exports.sendBootcampRequest = async (req, res) => {
  try {
    const { bootcampOwnerId, message, resumeUrl } = req.body;

    const notification = await Notification.create({
      sender: req.user.id,
      receiver: bootcampOwnerId,
      type: "request",
      message,
      resumeUrl,
    });

    res.status(200).json({
      success: true,
      message: "Request sent successfully",
      notification,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Bootcamp owner sends response
exports.respondToBootcampRequest = async (req, res) => {
  try {
    const { receiverId, message, dateSuggested } = req.body;

    const notification = await Notification.create({
      sender: req.user.id,
      receiver: receiverId,
      type: "response",
      message,
      dateSuggested,
    });

    res.status(200).json({
      success: true,
      message: "Response sent successfully",
      notification,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get notifications for logged-in user
exports.getNotifications = async (req, res) => {
  try {
    // if user opne notification, it will see all send to it

    
    const notifications = await Notification.find({ receiver: req.user.id })
      .sort({ createdAt: -1 })
      .populate("sender", "firstName lastName email");

    res.status(200).json({
      success: true,
      notifications,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
const Notification = require("../models/Notification");

exports.getNotificationsByReceiverId = async (req, res) => {
  try {
    const { userId } = req.params;

    const notifications = await Notification.find({ receiver: userId })
      .sort({ createdAt: -1 })
      .populate("sender", "firstName lastName email");

    res.status(200).json({
      success: true,
      notifications,
    });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
