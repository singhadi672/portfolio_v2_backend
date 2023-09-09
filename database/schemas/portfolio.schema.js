const { default: mongoose } = require("mongoose");


const PortfolioSchema = new mongoose.Schema({
    project_name: String,
    project_description: String,
    project_link: String,
    source_link: String,
    project_image: String

})

const Portfolio = mongoose.model("Portfolio", PortfolioSchema)

module.exports = { Portfolio }