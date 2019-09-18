import express from 'express'
import ConstraintDirective from 'graphql-constraint-directive'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import { ApolloServer } from 'apollo-server-express'
import { initDB } from '@/lib'
import rootModule from '@/modules'
import access from '@/access'
import { auth } from '@/passport'

const executableSchema = makeExecutableSchema({
  typeDefs: rootModule.typeDefs,
  resolvers: rootModule.resolvers,
  schemaDirectives: { constraint: ConstraintDirective },
})

const schema = applyMiddleware(executableSchema, auth, access)

const server = new ApolloServer({
  schema,
  introspection: true,
  context: ({ req }) => req,
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  initDB()
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})
