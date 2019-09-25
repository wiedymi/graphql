/* eslint-disable require-atomic-updates */
import jwt from 'jsonwebtoken'
import { jwtVerify, config } from '@/lib'
import { userService } from '@/services'

const auth = async (resolve, root, args, { request: context }, info) => {
  const Authorization = context.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const isVerified = jwtVerify(token)

    if (isVerified) {
      const { id } = await jwt.decode(token, config.JWT_SECRET)
      const user = await userService.getById(id)
      if (user) {
        context.user = {
          role: user.role,
        }

        return resolve(root, args, context, info)
      }
    }

    context.user = {
      role: 'GUEST',
    }

    return resolve(root, args, context, info)
  }
  context.user = {
    role: 'GUEST',
  }

  return resolve(root, args, context, info)
}

export { auth }
