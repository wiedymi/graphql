const createUser = async (root, { id }) => {
  return {
    id,
    username: 'jhon',
  }
}

export const Mutation = {
  createUser,
}
