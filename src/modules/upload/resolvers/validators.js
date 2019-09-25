import { validate } from 'graphql-validation'

export const uploadValidator = [
  validate('file')
    .not()
    .isEmpty({ msg: 'File is required' }),
]
