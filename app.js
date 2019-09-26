import { ApolloServer, config } from '@/lib'
import { auth } from '@/passport'
import { CORS as cors } from '@/constants'
import rootModule from '@/modules'
import access from '@/access'

const middlewares = [auth, access]
const { schema } = rootModule

const application = ApolloServer({
  cors,
  schema,
  middlewares,
  introspection: true,
  context: ({ req }) => req,
  trace: true,
  debug: true,
  engine: {
    apiKey: config.ENGINE_API_KEY,
    schemaTag: 'development',
  },
})

const port = config.PORT || 4000
application.listen({ port }, '0.0.0.0')

console.log(`🚀  Server ready at http://localhost:${port}/`)

process.setMaxListeners(0)
process.on('SIGINT', () => process.exit())
