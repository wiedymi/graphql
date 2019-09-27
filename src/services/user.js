import uuid from 'uuid'
import bcrypt from 'bcrypt'
import { Schema } from 'mongoose'
import { createService, config } from '@/lib'
import { ROLES } from '@/constants'

const { REGISTERED } = ROLES

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => {
        return uuid()
      },
    },
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

UserSchema.pre('save', userPreCallback)
UserSchema.pre('update', userPreCallback)

export const userService = createService('User', UserSchema)
