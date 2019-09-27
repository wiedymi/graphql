/* eslint-disable no-unused-vars */
import { ROLES } from '@/constants'
import { createRole } from '@/lib'

const { GUEST, ADMIN } = ROLES

export const isAuthenticated = createRole(GUEST, GUEST)

export const isAdmin = createRole(ADMIN)
export const isGuest = createRole(GUEST)
