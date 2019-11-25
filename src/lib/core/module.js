import { GraphQLModule } from '@graphql-modules/core'
import { pubsub } from '@/lib'

export const createModule = obj => {
  const resolvers = { ...obj.resolvers }
  const context = {
    pubsub,
    ...obj.context,
  }
  return new GraphQLModule({
    ...obj,
    resolvers,
    context,
  })
}
