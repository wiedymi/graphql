import mongoose from 'mongoose'
import { RateLimiterMongo } from 'rate-limiter-flexible'
import { DATABASE, setRateLimiter } from '@/constants'

const { OPTIONS, URL } = DATABASE
const mongoConn = mongoose.createConnection(URL, OPTIONS)

const rateLimiterMongo = new RateLimiterMongo(setRateLimiter(mongoConn))

const rateLimiterMiddleware = () => (req, res, next) => {
  rateLimiterMongo
    .consume(req.ip)
    .then(() => {
      next()
    })
    .catch(() => {
      res.status(429).send('Too Many Requests')
    })
}

export { rateLimiterMiddleware }
