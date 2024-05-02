import 'dotenv/config'
import fs from 'fs'
import nodemailer from 'nodemailer'

type EmailConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
}

function getEnvironmentVariable(key: string): string {
  const value = process.env[key]
  if (value === undefined) {
    throw new Error(`${key} is not defined in the environment.`)
  }
  return value
}

function setupEmailConfig(): EmailConfig {
  return {
    host: getEnvironmentVariable('SMTP_SERVER'),
    port: parseInt(getEnvironmentVariable('SMTP_PORT'), 10),
    secure: getEnvironmentVariable('SMTP_ENCRYPT') === 'true',
    user: getEnvironmentVariable('SMTP_USER'),
    pass: getEnvironmentVariable('SMTP_PASSWORD'),
  }
}

function createTransporter(config: EmailConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })
}

async function sendEmail(transporter: nodemailer.Transporter, content: string) {
  try {
    const info = await transporter.sendMail({
      from: getEnvironmentVariable('TEST_MAIL_SENDER'),
      to: getEnvironmentVariable('TEST_MAIL_RECEIVER'),
      subject: 'mjml. Template Test',
      html: content,
    })

    console.log('Message sent: %s', info.messageId)
  } catch (error) {
    console.error('Failed to send email:', error)
  }
}

async function main() {
  const emailConfig = setupEmailConfig()
  const transporter = createTransporter(emailConfig)
  const htmlContent = fs.readFileSync('dist/index.html', 'utf8')
  await sendEmail(transporter, htmlContent)
}

main().catch((error) => {
  console.error('An error occurred:', error)
})
