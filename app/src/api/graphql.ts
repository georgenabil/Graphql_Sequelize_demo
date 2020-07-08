import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

export const cache = new InMemoryCache();

const Client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: process.env.SERVICES_URI + "/graphql" }),
});

export default Client;
