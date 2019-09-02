import { jwtVerify } from '@/lib'

const auth = req => {
  const Authorization = req.headers.authorization
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const decodedToken = jwtVerify(token)

    if (decodedToken) {
      return { decodedToken }
    }

    throw new Error('Not authenticated')
  }

  throw new Error('Not authenticated')
}

export { auth }
