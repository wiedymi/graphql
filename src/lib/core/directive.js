import { addDirectiveResolveFunctionsToSchema } from 'graphql-directive'
import { directives } from '../directives'

const createDirective = (schema, resolver) => {
  return addDirectiveResolveFunctionsToSchema(schema, resolver)
}

export const getDirectives = schema => {
  return directives.map(({ name, resolver }) => ({
    [name]: createDirective(schema, { [name]: resolver }),
  }))
}
