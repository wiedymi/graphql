import { singleUpload, multiUpload } from '@/lib'
import { uploadValidator } from './validators'

const upload = async (root, { file }, { validationErrors }) => {
  if (validationErrors) {
    throw new Error(validationErrors)
  }

  const callback = async file => {
    return file
  }

  const uploads = await singleUpload(file, { prefix: 'avatars/' }, callback)

  return uploads
}

const uploadMany = async (root, { files }, { validationErrors }) => {
  if (validationErrors) {
    console.log(validationErrors)

    return
  }

  return multiUpload(files)
}

export const Mutation = {
  upload: uploadValidator(upload),
  uploadMany: uploadValidator(uploadMany),
}
