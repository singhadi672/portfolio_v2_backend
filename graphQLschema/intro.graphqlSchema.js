const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");


const IntroType = new GraphQLObjectType({
    name: 'Intro',
    fields: () => ({
        id: { type: GraphQLID },
        userName: { type: GraphQLString },
        description: { type: GraphQLString },
        imgLink: { type: GraphQLString },
        resume: { type: GraphQLString }
    })
})

module.exports = { IntroType }