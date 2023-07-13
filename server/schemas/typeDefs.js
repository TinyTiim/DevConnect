// add apollo server query logic
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    username: String
    name: String
    bio: String
    avatar: [String]!
  }

  type Auth {
    token: ID!
    profile: profile
  }

  tpye Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, passwrod: String!): Auth
    login(email: String, password: String!): Profile
    removeProfile: Profile
  }
`;

module.exports = typeDefs;
