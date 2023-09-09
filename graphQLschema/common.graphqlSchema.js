const { GraphQLObjectType, GraphQLBoolean, GraphQLID, GraphQLString, GraphQLUnionType } = require("graphql");


const SuccessPostPutType = new GraphQLObjectType({
    name: "success",
    description: "schema for success post/put request",
    fields: () => ({
        success: { type: GraphQLBoolean },
        id: { type: GraphQLID }
    })
})

const ErrorType = new GraphQLObjectType({
    name: "Error",
    description: "schema for error post/put request",
    fields: () => ({
        success: { type: GraphQLBoolean },
        message: { type: GraphQLString }
    })
})

const ResponseType = new GraphQLUnionType({
    types: [SuccessPostPutType, ErrorType],
    name: "response",
    resolveType(value) {
        if (value?.success) {
            return SuccessPostPutType
        }
        return ErrorType
    }
})

module.exports = { ResponseType }