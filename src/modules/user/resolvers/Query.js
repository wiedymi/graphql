const user = async (root, { username }, { db }) => {
  const user = await db.get({ username })

  return user
}

export const Query = {
  user,
}
