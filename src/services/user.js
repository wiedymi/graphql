import bcrypt from 'bcrypt'
import { Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
import { createService, config } from '@/lib'
import { ROLES } from '@/constants'
import { id } from './id'

const { REGISTERED } = ROLES

const userSchema = new Schema(
  {
    id,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: REGISTERED,
    },
  },
  { collection: 'users' },
)

userSchema.plugin(mongoosePaginate)

const userPreCallback = function(next) {
  const user = this

  return bcrypt.hash(user.password, +config.BCRYPT_SALT, function(err, hash) {
    if (err) {
      return next(err)
    }

    user.password = hash

    next()
  })
}

userSchema.pre('save', userPreCallback)
userSchema.pre('update', userPreCallback)

export const userService = createService('User', userSchema)
