import { userService } from '@/services'

const login = async (root, { username, password }) => {
  const user = await userService.get({ username })

  return user
}

export const Query = {
  login,
}
