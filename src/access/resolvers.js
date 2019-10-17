import { isGuest, isAuthenticated } from './permissions'

export const Query = {
  users: isGuest,
}

export const Mutation = {
  createUser: isGuest,
}
