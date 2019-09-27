import { ApolloServer, config } from '@/lib'
import { CORS as cors } from '@/constants'
import { auth } from '@/passport'
import modules from '@/modules'
import access from '@/access'

const middlewares = [auth, access]
const { schema } = modules

const application = ApolloServer({
  cors,
  schema,
  middlewares,
  engine: {
    apiKey: config.ENGINE_API_KEY,
    schemaTag: 'production',
  },
})

const port = config.PORT || 4000
application.listen({ port }, '0.0.0.0')

console.log(`🚀  GraphQL: http://localhost:${port + application.path}`)
console.log(`🚀  Subscriptions: ws://localhost:${port + application.subscriptions}`)

process.setMaxListeners(0)
process.on('SIGINT', () => process.exit())
