const user = async (root, { id }) => {
  return {
    _id: id,
    username: 'jhon',
  }
}

export const Query = {
  user,
}
