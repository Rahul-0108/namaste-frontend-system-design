const { startStandaloneServer } = require("@apollo/server/standalone");
const { ApolloServer } = require("@apollo/server");

const authors = [{id: 1, name: "J.K. Rowling"}, {id: 2, name: "J.R.R. Tolkien"}];

const typeDefs = `#graphql
type Author {
    id: Int!
    name: String!
}

type Query {
authors: [Author]
}

type Mutation {
addAuthor(id:Int!, name: String!): Author!
}
`;

const resolvers = {
    Query : {
        authors: (parent, args, context, Info) => authors
    },
    Mutation : {
        addAuthor: (parent, args, context, Info) => {
            const author = {id: args.id, name: args.name};
            authors.push(author);
            return author;
        }
    }
}

const server = async () => {
const {url} = await startStandaloneServer(new ApolloServer({
    typeDefs, resolvers}), {listen: {port: 4000}});

console.log(`Server ready at ${url}`);
};
server();
