import { userService } from '@/services'

const user = async (root, { username }, _, context) => {
  const user = await userService.get({ username })

  return user
}

export const Query = {
  user,
}
