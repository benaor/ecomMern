const graphql = require("graphql");
const product = require("../models/product");

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat } = graphql;

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    category: {type: GraphQLString},
    filter: {type: GraphQLString},
    price: {type: GraphQLFloat},
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello GraphQL";
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parents, args){
        return product.find({})
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      args: {category: { type: GraphQLString }},
      resolve(parents, args){
        return product.find({ category: args.category })
      }
    },
  }
})

var schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
