import express from 'express'
const { applyMiddleware } = require('graphql-middleware')
import { ApolloServer } from 'apollo-server-express'
import { initDB } from '@/lib'
import rootModule from '@/modules'
import access from '@/access'
import { auth } from '@/passport'

const schema = applyMiddleware(rootModule.schema, auth, access)

const server = new ApolloServer({
  schema,
  context: ({ req }) => req,
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  initDB()
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})
