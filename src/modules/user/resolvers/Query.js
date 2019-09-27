import { userValidator } from './validators'

const user = async (root, { username }, { db, validationErrors }) => {
  if (validationErrors) {
    throw new Error(JSON.stringify(validationErrors))
  }

  const user = await db.get({ username })

  return user
}

const users = async (root, args, { db }) => {
  const users = await db.getMany({})

  return users
}

export const Query = {
  user: userValidator(user),
  users,
}
