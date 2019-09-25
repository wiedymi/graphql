import cors from 'cors'
import { GraphQLServer } from 'graphql-yoga'
import { initDB } from '@/lib'
import { auth } from '@/passport'
import config from '@/config'
import { CORS as corsOptions } from '@/constants'
import rootModule from '@/modules'
import access from '@/access'

const { schema } = rootModule

const server = new GraphQLServer({
  schema,
  middlewares: [auth, access],
  context: context => context,
})

const port = config.PORT || 4000
const options = {
  port,
}

server.use(cors(corsOptions))

server.start(options, () => {
  initDB()
  console.log(`Server is running on http://localhost:${port}`)
})
