const mongoose = require('mongoose')
const env = require('dotenv')

env.config();

const password = process.env.DB_CONNECTION_PASSWORD
const DbName = process.env.DB_CONNECTION_DB_NAME


const connectionStr = `mongodb+srv://MongoDbUser:${password}@neog-cluster.d8w2z.mongodb.net/${DbName}?retryWrites=true&w=majority`
const dbConnection = async () => {
    try {

        const response = await mongoose.connect(connectionStr)

        console.log("connection successful")

    } catch (error) {
        console.log('database error -->', error)
    }
}

module.exports = { dbConnection }