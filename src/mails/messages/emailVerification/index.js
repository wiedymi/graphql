import { template, sendEmail } from '@/lib'

export const emailVerification = async opt => {
  const { email } = opt
  const message = await template('emailVerification', {
    email,
  })

  const mail = await sendEmail(
    '"Some site" <no-replay@site.com>',
    email,
    'Email Verification',
    message,
    message,
  )

  return mail
}
