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
    const { originalNotificationId, action, dateSuggested } = req.body;

    // Find the original notification (the request)
    const originalNotification = await Notification.findById(originalNotificationId);
    if (!originalNotification) {
      return res.status(404).json({ success: false, message: "Original notification not found" });
    }

    const receiverId = originalNotification.sender; // The person who requested to join

    // Build message based on action
    let message = "";
    if (action === "Accept") {
      message = `Congratulations! Meeting scheduled on ${new Date(dateSuggested).toLocaleString()}.`;
    } else if (action === "Reject") {
      message = "Sorry, your request to join was declined.";
    } else {
      return res.status(400).json({ success: false, message: "Invalid action" });
    }

    // Create new notification for the sender
    await Notification.create({
      sender: req.user.id, // owner
      receiver: receiverId,
      type: "response",
      message,
      dateSuggested: action === "Accept" ? dateSuggested : null,
    });

    // ✅ Delete the original request notification
    await Notification.findByIdAndDelete(originalNotificationId);

    res.status(200).json({
      success: true,
      message: `Response '${action}' processed successfully.`,
    });
  } catch (err) {
    console.error(err);
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
      //Notificationotifications,
      notifications,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
//const Notification = require("../models/Notification");

exports.getNotificationsByReceiverId = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("userId", userId);

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
