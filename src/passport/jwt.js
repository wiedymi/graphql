import jwt from 'jsonwebtoken'
import { jwtVerify } from '@/lib'
import config from '@/config'

const auth = async req => {
  const Authorization = req.headers.authorization
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const isVerified = jwtVerify(token)

    if (isVerified) {
      const decodedToken = await jwt.decode(token, config.JWT_SECRET)
      return { decodedToken }
    }

    throw new Error('Not authenticated')
  }

  throw new Error('Not authenticated')
}

export { auth }
