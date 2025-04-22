const express = require('express');
const router = express.Router();
const {auth} = require('../middlewares/auth');
const {
    sendNotification,
    getUserNotifications,
    markAsRead,
  } = require("../controllers/Notification");
  
  router.post("/send", auth, sendNotification);
  router.get("/my", auth, getUserNotifications);
  router.patch("/read/:id", auth, markAsRead);
  
  module.exports = router;