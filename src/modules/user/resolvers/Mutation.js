const createUser = async (root, { email, username, password }, { db }) => {
  const createdUser = await db.create({
    email,
    username,
    password,
  })

  return createdUser
}

export const Mutation = {
  createUser,
}
