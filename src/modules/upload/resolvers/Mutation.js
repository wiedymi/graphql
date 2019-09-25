import { validator } from 'graphql-validation'
import { singleUpload, multiUpload } from '@/lib'
import { uploadValidator } from './validators'

const upload = async (root, { file }, { validationErrors }) => {
  if (validationErrors) {
    throw new Error(validationErrors)
  }

  return singleUpload(file, { prefix: 'avatars/' })
}

const uploadMany = async (root, { files }, context) => {
  if (context.validationErrors) {
    console.log(context.validationErrors)

    return
  }

  return multiUpload(files)
}

export const Mutation = {
  upload: validator(uploadValidator, upload),
  uploadMany: validator([], uploadMany),
}
