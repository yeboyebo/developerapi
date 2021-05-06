import dotenv from 'dotenv'

dotenv.config()

export default {
  baseUrl: '/api',
  port: process.env.PORT ?? 8005,
  quimeraSrc: `${process.env.QUIMERA_DIR}/src`
}
