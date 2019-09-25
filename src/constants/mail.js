import { config } from '@/lib'

export default {
  host: config.MAIL_HOST,
  port: config.MAIL_PORT,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASS,
  },
}
