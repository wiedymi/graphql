import express from 'express'
import { applyMiddleware } from 'graphql-middleware'
import { ApolloServer } from 'apollo-server-express'
import { initDB } from '@/lib'
import rootModule from '@/modules'
import access from '@/access'
import { auth } from '@/passport'

const schema = applyMiddleware(rootModule.schema, auth, access)

const server = new ApolloServer({
  schema,
  typeDefs: rootModule.typeDefs,
  resolvers: rootModule.resolvers,
  introspection: true,
  context: ({ req }) => req,
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  initDB()
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})
