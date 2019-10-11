import uuid from 'uuid'

export const id = {
  type: String,
  required: true,
  unique: true,
  default: () => {
    return uuid()
  },
}
