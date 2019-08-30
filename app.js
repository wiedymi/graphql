import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { initDB } from '@/core'
import rootModule from '@/modules'

const { schema, context } = rootModule

const server = new ApolloServer({
  schema,
  context,
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  initDB()
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})
