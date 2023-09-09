const { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLID } = require("graphql");


const HomepageType = new GraphQLObjectType({
    name: "homegape",
    fields: () => ({
        id: { type: GraphQLID },
        hero_image: { type: GraphQLString },
        title: {
            type: new GraphQLList(GraphQLString)
        }
    })
})

module.exports = { HomepageType }