import { userService } from '@/services'

const login = async (root, { username, password }) => {
  const user = await userService.get({ username })

  return user
}

const oAuthGoogle = async (root, { user }) => {
  const isExist = await userService.get({ $find: { 'oAuth.google.id': user.id } })

  if (isExist) {
    return user
  }

  const newUser = await userService.create({
    username: user.username,
    email: user.email,
    oAuth: {
      google: {
        id: user.id,
      },
    },
  })

  if (!newUser) {
    throw new Error('Can not create a new user')
  }

  return newUser
}

export const Query = {
  login,
}
