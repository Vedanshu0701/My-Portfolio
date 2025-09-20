const express = require("express");
const router = express.Router();
const path = require("path");

// Import the controller here 👇
const pageController = require("../controllers/pageController");

// console.log("DEBUG: Looking for controller at =>", path.join(__dirname, "../controllers/pageController.js"));

//routes
router.get("/", pageController.home);
router.get("/about", pageController.about);
router.get("/contact", pageController.contact);

module.exports = router;