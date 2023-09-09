const express = require('express')
const cors = require('cors')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const env = require('dotenv')
const { dbConnection } = require('./database/connection/connection.db')
const mongoose = require('mongoose')
const { Intro } = require('./database/schemas/intro.schema')

const schema = require('./graphQLschema/index')
const { Homepage } = require('./database/schemas/homepage.schema')
const { Contact } = require('./database/schemas/contact.schema')

env.config();

const app = express()
const PORT = 5000

dbConnection()

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'welocme to portfolio api'
    })
})

// app.post('/gg', async (req, res) => {
//     try {

//         const data = new Contact({
//             contact_description: "Connect with me to explore exciting opportunities, share innovative ideas, and collaborate on tech-driven projects. I'm eager to engage with fellow enthusiasts, entrepreneurs, and visionaries in the dynamic world of technology. Let's forge connections, exchange insights, and collectively shape a brighter digital future. Feel free to reach out, and together, we'll navigate the limitless possibilities of our interconnected world",
//             contact_number: '+91 8130590798',
//             contact_email: "singhadi672@gmail.com",
//             contact_link: [{ link_name: 'linkedin', link_data: 'https://www.linkedin.com/in/aditya-singh-6a6b35177/' }],
//         })

//         await data.save()

//         res.status(201).json({ success: true })

//     } catch (error) {
//         console.log(error)
//     }
// })

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(process.env.PORT || PORT, () => console.log(`app service running on port ${process.env.PORT || PORT}`))