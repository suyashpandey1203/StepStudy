const express = require("express");
const router = express.Router();
const {
  sendBootcampRequest,
  respondToBootcampRequest,
  getNotifications,
} = require("../controllers/BootcampNotification");
const { auth } = require("../middlewares/auth");

router.post("/request", auth, sendBootcampRequest);
router.post("/respond", auth, respondToBootcampRequest);
router.get("/my", auth, getNotifications);

module.exports = router;
