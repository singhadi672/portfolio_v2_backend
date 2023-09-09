const { GraphQLObjectType, GraphQLString } = require("graphql");


const PortfolioType = new GraphQLObjectType({
    name: 'portfolio',
    description: 'portfolio details',
    fields: () => ({
        project_name: { type: GraphQLString },
        project_description: { type: GraphQLString },
        project_link: { type: GraphQLString },
        source_link: { type: GraphQLString },
        project_image: { type: GraphQLString }
    })
})

module.exports = { PortfolioType }