import { GraphQLModule } from '@graphql-modules/core'
import userModule from './user'
import authModule from './auth'
import uploadModule from './upload'

export default new GraphQLModule({
  name: 'app',
  imports: [userModule, authModule, uploadModule],
})
