const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Get all blogs
router.get("/", blogController.getBlogs);

router.post("/", blogController.addBlog); //add new Blog

router.delete("/:id", blogController.deleteBlog); // Deleting Blog

module.exports = router;
