const blog = require("../models/blog");

//All Blog show Here logic
exports.getBlogs = async(req, res) => {
  try{
    const blog = await Blog.find();
    res.json(blogs);
  }catch (err) {
    res.status(500).json({error: "Failed to fetch blogs"});
  }
};

//Add Blog
exports.addBlog = async(req, res) => {
  try{
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
    }catch(err) {
  res.status(400).json({err: "Failed to Add Blogs"});
  }
};

//Delete Blog
exports.deleteBlog = async (req, res) =>{
try{
  const blog = await Blog.findByAndDelete(req.param.id);
 
  if(!blogs){
      return res.status(404).json({error:"Blog not Found"});
    }
    res.json({message: "Blog Deleted successfully"});
  } catch(err) {
    res.status(500).json({error:"Failed to delete blog"});
  }
};

// Add Blog
exports.addBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);

    console.log("📥 Incoming Blog Data:", req.body); // frontend se jo data aaya
    await newBlog.save();

    console.log("✅ Blog Saved in DB:", newBlog); // DB mein jo save hua
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("❌ Error Adding Blog:", err.message);
    res.status(400).json({ error: "Failed to Add Blog" });
  }
};
