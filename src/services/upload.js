import uuid from 'uuid'
import { Schema, model } from 'mongoose'
import { Service } from '@/lib'

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

const uploadModel = model('Upload', UploadSchema)

export const uploadService = new Service(uploadModel)
