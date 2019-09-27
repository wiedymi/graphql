const createUser = async (root, { email, username, password }, { db, pubsub, USERS }) => {
  const createdUser = await db.create({
    email,
    username,
    password,
  })
  pubsub.publish(USERS, {
    users: createdUser,
  })
  return createdUser
}

export const Mutation = {
  createUser,
}
