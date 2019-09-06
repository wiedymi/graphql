import { isGuest, isAuthenticated } from './permissions'

export const Query = {
  user: isAuthenticated,
}

export const Mutation = {
  createUser: isGuest,
}
