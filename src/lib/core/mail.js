import nodemailer from 'nodemailer'
import { MAIL } from '@/constants'
import { Logger } from '@/lib'

const { setting } = MAIL
class Mail {
  constructor(from, to, subject, text, html, attachments) {
    this.send = async () => {
      try {
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
      } catch (err) {
        Logger.debug(`Mail Service: ${err}`)
      }
    }
  }
}

export const sendEmail = async (...options) => {
  const email = new Mail(...options)

  const result = await email.send()

  return result
}
