import nodemailer from 'nodemailer'
import { MAIL } from '@/constants'

const { setting } = MAIL
class Mail {
  constructor(from, to, subject, text, html, attachments) {
    this.send = async () => {
      const transporter = nodemailer.createTransport(setting)

      const info = await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
        attachments,
      })

      return info
    }
  }
}

export const sendEmail = async (...options) => {
  const email = new Mail(...options)

  const result = await email.send()

  return result
}
