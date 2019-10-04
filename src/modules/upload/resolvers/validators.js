import { createValidator, validate } from '@/lib'

export const uploadValidator = createValidator([
  validate('file')
    .not()
    .isEmpty({ msg: 'File is required' }),
])
