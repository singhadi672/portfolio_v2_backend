const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");


const ContactType = new GraphQLObjectType({
    name: "Contact",
    description: "contact details",
    fields: () => ({
        contact_description: { type: GraphQLString },
        contact_number: { type: GraphQLString },
        contact_email: { type: GraphQLString },
        contact_link: {
            type: new GraphQLList(new GraphQLObjectType({
                name: "links",
                description: "contains list of links used in contacts",
                fields: () => ({
                    link_name: { type: GraphQLString },
                    link_data: { type: GraphQLString },
                })
            }))
        }
    })
})

module.exports = { ContactType }