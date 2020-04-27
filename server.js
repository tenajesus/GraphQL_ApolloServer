const { ApolloServer } = require('apollo-server');
// Importar ExecutableSchema
const { makeExecutableSchema} = require('graphql-tools');
const { docente } = require('./docentes');

const typeDefs = `
type Docentes{
    id: ID!
    nombre: String!
    antiguedad : Int
    tipo: String!
}

type Query{
    getDocentes(page: Int, limit: Int = 2): [Docentes]
}
`;

// Instanciar el schema usando makeExecutableSchema

const schema = makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers: {}
})

// Iniciar servicio con ApolloServer
const server = new ApolloServer({
    schema: schema
});

server.listen().then(({ url }) => {
    console.log(`Servidor iniciado en ${url}`);
});