const express = require("express");
const shortid = require("shortid");
const userController = require("../controllers/user");

const router = express.Router();

router.post("/signup", userController.createUser);

router.post("/login", userController.userLogin);

router.get("", userController.getUsers);

router.get("/:email", userController.getUserbyMail);

module.exports = router;
