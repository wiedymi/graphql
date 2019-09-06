import config from '@/config'

const { MONGO_DB_URL, MONGO_DB_USER, MONGO_DB_PASSWORD } = config

export const URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_URL}`

export const OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}
