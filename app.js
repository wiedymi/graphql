import { GraphQLServer } from 'graphql-yoga'
import { initDB, Logger, staticFiles } from '@/lib'
import { auth } from '@/passport'
import config from '@/config'
import { CORS as corsOptions } from '@/constants'
import rootModule from '@/modules'
import access from '@/access'

const morgan = require('morgan')

const { schema } = rootModule

const application = new GraphQLServer({
  schema,
  middlewares: [auth, access],
  context: context => context,
})

const port = config.PORT || 4000
const { combined, stream } = Logger
const options = {
  cors: corsOptions,
  port,
}

application.use(morgan(combined, { stream }))
application.use('/uploads/:file', staticFiles)

application.start(options, () => {
  initDB()
  process.setMaxListeners(0)
  console.log(`Server is running on http://localhost:${port}`)
})

process.on('SIGINT', () => process.exit())
