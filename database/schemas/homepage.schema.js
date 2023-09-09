const { default: mongoose } = require("mongoose");


const HomepageSchema = new mongoose.Schema({
    hero_image: String,
    title: [String]
})

const Homepage = mongoose.model('Homepage', HomepageSchema)

module.exports = { Homepage }