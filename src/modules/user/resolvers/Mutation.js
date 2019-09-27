const createUser = async (root, { email, username, password }, { db, pubsub, subscriptions }) => {
  const { REGISTERED_USER } = subscriptions

  const createdUser = await db.create({
    email,
    username,
    password,
  })

  pubsub.publish(REGISTERED_USER, {
    users: createdUser,
  })

  return createdUser
}

export const Mutation = {
  createUser,
}
