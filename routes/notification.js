const express = require("express");
const notificationController = require("../controllers/notification");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", notificationController.createNotification);

router.get("", checkAuth, notificationController.getNotifications);

router.delete("/:notificationId", notificationController.deleteNotifications);

module.exports = router;
