import { singleUpload, multiUpload } from '@/lib'

const upload = async (root, { file }) => {
  return singleUpload(file, { prefix: 'avatars/' })
}

const uploadMany = async (root, { files }) => {
  return multiUpload(files)
}

export const Mutation = {
  upload,
  uploadMany,
}
