import { singleUpload, multiUpload } from '@/lib'

const createUser = async (root, { email, username, password }, { db }) => {
  const createdUser = await db.create({
    email,
    username,
    password,
  })

  return createdUser
}

const upload = async (root, { file }, { db }) => {
  return singleUpload(file, { prefix: 'avatars/' })
}

const uploadMany = async (root, { files }, { db }) => {
  return multiUpload(files)
}

export const Mutation = {
  createUser,
  upload,
  uploadMany,
}
