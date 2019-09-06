import { rule } from 'graphql-shield'
import { ROLES } from '@/constants'

const { GUEST, ADMIN } = ROLES

export const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.user.role !== GUEST
})

export const isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.user.role === ADMIN
})

export const isGuest = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.user.role === GUEST
})
