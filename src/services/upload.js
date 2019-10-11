import { Schema } from 'mongoose'
import { createService } from '@/lib'
import { id } from './id'

const uploadSchema = new Schema(
  {
    id,
    userId: {
      type: String,
    },
    size: {
      tiny: String,
      small: String,
      large: String,
    },
    extension: {
      type: String,
    },
  },
  { collection: 'uploads' },
)

export const uploadService = createService('Upload', uploadSchema)
