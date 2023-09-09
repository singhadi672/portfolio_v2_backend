const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString } = require("graphql");
const { IntroType } = require("./intro.graphqlSchema");
const { Intro } = require("../database/schemas/intro.schema");
const { HomepageType } = require("./homepage.graphqlSchema");
const { Homepage } = require("../database/schemas/homepage.schema");
const { ContactType } = require("./contacts.graphqlSchema");
const { Contact } = require("../database/schemas/contact.schema");
const { PortfolioType } = require('./portfolio.graphqlSchema');
const { Portfolio } = require("../database/schemas/portfolio.schema");
const { BlogsType } = require("./blogs.graphqlSchema");
const { Blog } = require("../database/schemas/blogs.schema");
const { ExperienceType } = require("./experience.graphqlSchema");
const { Experience } = require("../database/schemas/experience.schema");
const { SuccessPostPutType, ResponseType } = require("./common.graphqlSchema");


const RootQuery = new GraphQLObjectType({
    name: 'Rootquery',
    description: 'this is the root queries that includes all sub queries',
    fields: {
        intros: {
            type: new GraphQLList(IntroType),
            description: 'get all the intros',
            resolve: async () => {
                const data = await Intro.find()
                console.log(data)
                return data
            }
        },
        homepage: {
            type: HomepageType,
            description: 'get homepage details',
            resolve: async () => {
                const data = await Homepage.find()
                return data[0]
            }
        },
        portfolio: {
            type: new GraphQLList(PortfolioType),
            description: "get all portfolio Details",
            resolve: async () => {
                try {
                    const data = await Portfolio.find()
                    return data
                } catch (error) {
                    console.log(error)
                }
            }
        },
        blogs: {
            type: new GraphQLList(BlogsType),
            description: 'get all blog details',
            resolve: async () => {
                try {
                    const data = await Blog.find()
                    return data
                } catch (error) {
                    console.log(error)
                }
            }
        },
        experience: {
            type: new GraphQLList(ExperienceType),
            description: 'get all experience details',
            resolve: async () => {
                try {
                    const data = await Experience.find()
                    return data
                } catch (error) {
                    console.log(error)
                }
            }
        },
        contact: {
            type: ContactType,
            description: "Get contact details",
            resolve: async () => {
                const data = await Contact.find()
                return data[0]
            }
        }
    }
})

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    description: "this is a mutations of all operations",
    fields: {
        addPortfolio: {
            type: PortfolioType,
            args: {
                project_name: { type: GraphQLString },
                project_description: { type: GraphQLString },
                project_link: { type: GraphQLString },
                source_link: { type: GraphQLString },
                project_image: { type: GraphQLString }
            },
            resolve: async (parent, args) => {
                try {

                    const portfolios = new Portfolio({
                        project_name: args?.project_name,
                        project_description: args?.project_description,
                        project_link: args?.project_link,
                        source_link: args?.source_link,
                        project_image: args?.project_image

                    })

                    const data = await portfolios.save()

                    return {
                        project_name: args?.project_name,
                        project_description: args?.project_description,
                        project_link: args?.project_link,
                        source_link: args?.source_link,
                        project_image: args?.project_image
                    }

                } catch (error) {
                    console.log(error)
                }
            }

        },
        addBlogs: {
            type: BlogsType,
            args: {
                blog_name: { type: GraphQLString },
                blog_description: { type: GraphQLString },
                blog_link: { type: GraphQLString }
            },
            resolve: async (parent, args) => {

                try {

                    const blogs = new Blog({
                        blog_name: args?.blog_name,
                        blog_description: args?.blog_description,
                        blog_link: args?.blog_link

                    })

                    const data = await blogs.save()

                    return {
                        blog_name: args?.blog_name
                    }
                } catch (error) {

                    console.log(error)
                    return { success: false, message: error }
                }
            }
        },
        addExperience: {
            type: ExperienceType,
            args: {
                technology_name: { type: GraphQLString },
                technology_image: { type: GraphQLString },
                technology_description: { type: GraphQLString }
            },
            resolve: async (parent, args) => {
                const experience = new Experience({
                    technology_name: args?.technology_name,
                    technology_image: args?.technology_image,
                    technology_description: args?.technology_description
                })

                const data = await experience.save()

                return {
                    technology_name: args?.technology_name,
                    technology_image: args?.technology_image,
                    technology_description: args?.technology_description
                }
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})
