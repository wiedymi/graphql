import express from 'express'
import { Logger, staticFiles, initDB } from '@/lib'
import { ApolloServer as Apollo } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'

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

  apollo.use = (...params) => {
    return app.use(...params)
  }

  apollo.listen = (...params) => {
    initDB()
    return app.listen(...params)
  }

  apollo.path = apollo.graphqlPath

  const { combined, stream } = Logger

  apollo.use('/uploads/:file', staticFiles)
  apollo.use(morgan(combined, { stream }))

  return apollo
}

export { ApolloServer }
