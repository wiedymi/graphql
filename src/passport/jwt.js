import jwt from 'jsonwebtoken'
import { jwtVerify } from '@/lib'
import config from '@/config'

const auth = async (resolve, root, args, context, info) => {
  const Authorization = context.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const isVerified = jwtVerify(token)

    if (isVerified) {
      const decodedToken = await jwt.decode(token, config.JWT_SECRET)

      context.user = {
        role: 'ADMIN',
      }

      return resolve(root, args, context, info)
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
