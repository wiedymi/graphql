import { isGuest, isAuthenticated } from './permissions'

export const Query = {
  users: isAuthenticated,
}

export const Mutation = {
  createUser: isGuest,
}
