import ApolloClient, { addTypenameToDocument, createNetworkInterface } from 'apollo-client';
import { PolymerApolloMixin } from 'polymer-apollo';

// Create the apollo client
export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  }),
});
