import { validate } from 'graphql-validation'

export const userValidator = [
  validate('username').isLength({ msg: 'username is invalid', options: { min: 3, max: 20 } }),
]
