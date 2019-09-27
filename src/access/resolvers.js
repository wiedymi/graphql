import { isGuest, isAuthenticated } from './permissions'

export const Query = {
  user: isGuest,
}

export const Mutation = {
  createUser: isGuest,
}
