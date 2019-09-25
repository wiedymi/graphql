import { GraphQLModule } from '@graphql-modules/core'
import userModule from './user'
import authModule from './auth'

export default new GraphQLModule({
  name: 'app',
  imports: [userModule, authModule],
})
