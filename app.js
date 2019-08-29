import { GraphQLServer } from 'graphql-yoga'
import Query from '@/resolvers/Query'
import Mutation from '@/resolvers/Mutation'
import Subscription from '@/resolvers/Subscription'

const resolvers = {
  Query,
  Mutation,
  Subscription,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
