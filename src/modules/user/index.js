import { GraphQLModule } from '@graphql-modules/core'
import { PubSub } from 'apollo-server-express'
import { userService } from '@/services'
import * as typeDefs from './schema.graphql'
import * as resolvers from './resolvers'

const pubsub = new PubSub()
const USERS = 'USERS'

export default new GraphQLModule({
  typeDefs,
  resolvers: { ...resolvers },
  context: {
    pubsub,
    USERS,
    db: userService,
  },
})
