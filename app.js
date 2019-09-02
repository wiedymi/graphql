import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { initDB } from '@/lib'
import rootModule from '@/modules'
import { auth } from '@/passport'
const { schema } = rootModule

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return auth(req)
  },
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  initDB()
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})
