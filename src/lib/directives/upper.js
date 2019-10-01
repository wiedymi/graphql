import { createDirective } from '@/lib'

const resolver = {
  upper: async resolve => {
    const value = await resolve()
    return value.toString().toUpperCase()
  },
}

export const UpperDirective = schema => createDirective(schema, resolver)
