import { GraphQLModule } from '@graphql-modules/core'
import userModule from './user'
import authModule from './auth'

const typeDefs = `
directive @constraint(
  # String constraints
  minLength: Int
  maxLength: Int
  startsWith: String
  endsWith: String
  notContains: String
  pattern: String
  format: String

  # Number constraints
  min: Int
  max: Int
  exclusiveMin: Int
  exclusiveMax: Int
  multipleOf: Int
) on FIELD_DEFINITION | ARGUMENT_DEFINITION

`

export default new GraphQLModule({ name: 'app', typeDefs, imports: [userModule, authModule] })
