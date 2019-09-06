import { GraphQLModule } from '@graphql-modules/core'
import * as typeDefs from './schema.graphql'
import * as resolvers from './resolvers'
import userModule from '../user'

export default new GraphQLModule({
  imports: [userModule],
  typeDefs,
  resolvers: { ...resolvers },
})
