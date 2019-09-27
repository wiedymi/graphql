import uuid from 'uuid'
import { Schema } from 'mongoose'
import { createService } from '@/lib'

const UploadSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => {
        return uuid()
      },
    },
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

export const uploadService = createService('Upload', UploadSchema)
