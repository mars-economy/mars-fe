import Vue from 'vue'
import { createHttpLink } from 'apollo-link-http'
import ApolloClient from 'apollo-client'
import VueApollo from 'vue-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://95.217.102.116:8000/subgraphs/name/mars-economy/mars-prediction-markets'
})

const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
