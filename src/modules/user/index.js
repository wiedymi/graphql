import { GraphQLModule } from '@graphql-modules/core'
import { PubSub } from 'apollo-server-express'
import { userService } from '@/services'
import { SUBCSRIPTIONS } from '@/constants'
import * as typeDefs from './schema.graphql'
import * as resolvers from './resolvers'

const pubsub = new PubSub()
const { user: subscriptions } = SUBCSRIPTIONS

export default new GraphQLModule({
  typeDefs,
  resolvers: { ...resolvers },
  context: {
    pubsub,
    subscriptions,
    db: userService,
  },
})
