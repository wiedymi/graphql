import { rule } from 'graphql-shield'
import { ROLES } from '@/constants'

const { GUEST, ADMIN } = ROLES

const createRole = (role, equel) => {
  return rule({ cache: 'contextual' })(async (parent, args, ctx) => {
    if (equel) {
      return false
    }

    return ctx.user.role === role
  })
}

export const isAuthenticated = createRole(GUEST, GUEST)

export const isAdmin = createRole(ADMIN)
export const isGuest = createRole(GUEST)
