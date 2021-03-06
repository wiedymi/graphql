import { config } from '@/lib'

const emails = {
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
}

export const MAIL = {
  emails,
  setting: {
    host: config.MAIL_HOST,
    port: config.MAIL_PORT,
    auth: {
      user: config.MAIL_USER,
      pass: config.MAIL_PASS,
    },
  },
}
