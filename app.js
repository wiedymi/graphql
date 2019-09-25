import { GraphQLServer } from 'graphql-yoga'
import { initDB } from '@/lib'
import rootModule from '@/modules'
import access from '@/access'
import { auth } from '@/passport'

const { schema } = rootModule

const server = new GraphQLServer({
  schema,
  middlewares: [auth, access],
  context: context => context,
})

const port = process.env.PORT || 4000
const options = {
  port,
}

server.start(options, () => {
  initDB()
  console.log(`Server is running on http://localhost:${port}`)
})
