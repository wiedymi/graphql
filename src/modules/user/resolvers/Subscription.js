const users = {
  resolve: (payload, args, context, info) => {
    return payload.users
  },
  subscribe: (_, __, { pubsub, USERS }) => pubsub.asyncIterator(USERS),
}

export const Subscription = {
  users,
}
