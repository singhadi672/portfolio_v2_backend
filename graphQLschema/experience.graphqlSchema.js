const { GraphQLObjectType, GraphQLString } = require("graphql");


const ExperienceType = new GraphQLObjectType({
    name: 'Experiences',
    description: "experiences schemas",
    fields: () => ({
        technology_name: { type: GraphQLString },
        technology_image: { type: GraphQLString },
        technology_description: { type: GraphQLString }
    })
})

module.exports = { ExperienceType }