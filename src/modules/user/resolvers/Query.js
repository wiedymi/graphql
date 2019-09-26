import { validator } from 'graphql-validation'
import { userValidator } from './validators'

const user = async (root, { username }, { db, validationErrors }) => {
  if (validationErrors) {
    throw new Error(JSON.stringify(validationErrors))
  }

  const user = await db.get({ username })

  return user
}

export const Query = {
  user: validator(userValidator, user),
}
