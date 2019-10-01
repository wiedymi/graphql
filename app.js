import { ApolloServer, config, getDirectives } from '@/lib'
import { auth } from '@/passport'
import modules from '@/modules'
import access from '@/access'

const middlewares = [auth, access]
const { schema } = modules
const directives = getDirectives(schema)

const application = ApolloServer({
  schema,
  directives,
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
