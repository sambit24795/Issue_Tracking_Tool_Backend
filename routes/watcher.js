const express = require("express");
const checkAuth = require("../middleware/check-auth");
const watcherController = require("../controllers/watcher");

const router = express.Router();

router.post("", checkAuth, watcherController.createWatcher);

router.get("/:issueId", checkAuth, watcherController.getWatcher);

module.exports = router;
