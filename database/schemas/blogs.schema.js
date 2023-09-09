const { default: mongoose } = require("mongoose");


const BlogsSchema = new mongoose.Schema({
    blog_name: String,
    blog_description: String,
    blog_link: String
})

const Blog = mongoose.model("Blog", BlogsSchema)

module.exports = { Blog }