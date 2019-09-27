import { rule } from 'graphql-shield'

export const createRole = (roles, equels, options, callback) => {
  if (!options) {
    options = { cache: 'contextual' }
  }

  if (!callback) {
    callback = async (parent, args, ctx, info, role = roles, equel = equels) => {
      if (equel) {
        return false
      }

      return ctx.user.role === role
    }
  } else {
    callback = (parent, args, ctx, info, role = roles, equel = equels) =>
      callback(parent, args, ctx, info, role, equel)
  }

  return rule(options)(callback)
}
