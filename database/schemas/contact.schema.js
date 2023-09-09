const mongoose = require("mongoose");


const ContactSchema = new mongoose.Schema({
    contact_description: String,
    contact_number: String,
    contact_email: String,
    contact_link: [{ link_name: String, link_data: String }],
})

const Contact = mongoose.model("Contact", ContactSchema)

module.exports = { Contact }