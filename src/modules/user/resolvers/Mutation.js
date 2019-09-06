import { userService } from '@/services'

const createUser = async (root, { email, username, password }) => {
  const createdUser = await userService.create({
    email,
    username,
    password,
  })

  return createdUser
}

export const Mutation = {
  createUser,
}
