import { addDirectiveResolveFunctionsToSchema } from 'graphql-directive'

export const createDirective = resolver => {
  return schema => addDirectiveResolveFunctionsToSchema(schema, resolver)
}
