import { GraphQLModule } from '@graphql-modules/core'
import userModule from './user'

export default new GraphQLModule({
  imports: [userModule],
})
