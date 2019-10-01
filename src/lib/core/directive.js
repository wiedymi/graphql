import { addDirectiveResolveFunctionsToSchema } from 'graphql-directive'

export const createDirective = (schema, resolver) => {
  return addDirectiveResolveFunctionsToSchema(schema, resolver)
}
