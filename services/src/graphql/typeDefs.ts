import { gql } from "apollo-server";

const typeDefs = gql`
  type Chef {
    id: ID!
    name: String!
    Resturants: [Resturant!]!
  }

  type Resturant {
    id: ID!
    name: String!
    chef: Chef
  }

  type Query {
    chefs: [Chef!]!
  }
`;

export default typeDefs;
