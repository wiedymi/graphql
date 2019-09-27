import nodemailer from 'nodemailer'
import { MAIL } from '@/constants'

export class Mail {
  constructor(from, to, subject, text, html, attachments) {
    this.send = async () => {
      const transporter = nodemailer.createTransport(MAIL)

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
