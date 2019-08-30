import { GraphQLModule } from '@graphql-modules/core'
import * as typeDefs from './schema.graphql'
import * as resolvers from './resolvers'

export default new GraphQLModule({
  typeDefs,
  resolvers,
})
