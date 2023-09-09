const { default: mongoose } = require("mongoose");


const ExprienceSchema = new mongoose.Schema({
    technology_name: String,
    technology_image: String,
    technology_description: String
})

const Experience = mongoose.model("Experience", ExprienceSchema)

module.exports = { Experience }