import { rule } from 'graphql-shield'
import { ROLES } from '@/constants'

const { GUEST, ADMIN } = ROLES

const createRole = ROLE => {
  return rule({ cache: 'contextual' })(async (parent, args, ctx) => {
    return ctx.user.role === ROLE
  })
}

const createRoleNot = ROLE => {
  return rule({ cache: 'contextual' })(async (parent, args, ctx) => {
    return ctx.user.role !== ROLE
  })
}

export const isAuthenticated = createRoleNot(GUEST)

export const isAdmin = createRole(ADMIN)
export const isGuest = createRole(GUEST)
