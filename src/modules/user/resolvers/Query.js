import { userValidator } from './validators'

const user = async (root, { username }, { db, validationErrors }) => {
  if (validationErrors) {
    throw new Error(JSON.stringify(validationErrors))
  }

  const user = await db.get({ username })

  return user
}

const users = async (root, { offset, limit }, { db }) => {
  const users = await db.paginate({}, { offset, limit, lean: true })

  return users
}

export const Query = {
  user: userValidator(user),
  users,
}
