const { GraphQLObjectType, GraphQLString } = require("graphql");


const BlogsType = new GraphQLObjectType({
    name: "Blogs",
    description: "blogs schema",
    fields: () => ({
        blog_name: { type: GraphQLString },
        blog_link: { type: GraphQLString },
        blog_description: { type: GraphQLString },
    })
})

module.exports = { BlogsType }