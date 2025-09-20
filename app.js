const express = require('express');
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

//Uncomment the next line ONLY if you actually created routes/blogRoutes.js
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3000;

//middleware
app.use(express.static("public"));
app.use(express.json()); // For parsing JSON (like contact form POST)

//Routes
app.use("/",pageRoutes);
app.use("/blogs",blogRoutes);

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
