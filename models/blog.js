const mongoose = require("../db/db");

//Schema of BLog
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },

    content: {
        type:String,
        Required: true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Blog = mongoose.model("Blog",blogSchema);

module.exports = Blog;