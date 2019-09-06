import { userService } from '@/services'

const user = async (root, { username }) => {
  const user = await userService.get({ username })

  return user
}

export const Query = {
  user,
}
