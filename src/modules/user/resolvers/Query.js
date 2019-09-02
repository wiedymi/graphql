import { userService } from '@/services'

const user = async (root, { username }, _, userId) => {
  const user = await userService.get({ username })
  console.log(userId)
  return user
}

export const Query = {
  user,
}
