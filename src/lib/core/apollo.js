import http from 'http'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'
import { ApolloServer as Apollo } from 'apollo-server-express'
import { Logger, staticFiles, initDB } from '@/lib'

const morgan = require('morgan')
const app = express()

const ApolloServer = opts => {
  const { schema, middlewares, ...options } = opts

  const apollo = new Apollo({
    ...options,
    schema: applyMiddleware(schema, ...middlewares),
  })

  const path = '/graphql'

  apollo.applyMiddleware({ app, path })

  const server = http.createServer(app)
  apollo.installSubscriptionHandlers(server)

  apollo.use = (...params) => {
    return app.use(...params)
  }

  apollo.listen = (...params) => {
    initDB()
    return server.listen(...params)
  }

  apollo.path = apollo.graphqlPath
  apollo.subscriptions = apollo.subscriptionsPath

  const { combined, stream } = Logger

  apollo.use('/uploads/:file', staticFiles)
  apollo.use(morgan(combined, { stream }))

  return apollo
}

export { ApolloServer }
