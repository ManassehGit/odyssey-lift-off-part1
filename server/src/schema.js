const {gql} = require('apollo-server');

const typeDefs = gql`
"A track is a group of modules that teaches about a specific topic"
type Track {
  id: ID!
  "The tracks title"
  title: String!
  "Main author for the track"
  author: Author!
  "Track main illustration"
  thumbnail: String
  "Approximate length to complete"
  length: Int
  "Number of modules in the track"
  modulesCount: Int
}

"Author of a complete Track or a Module"
type Author {
  id: ID!
  "Author's name"
  name: String!
  "Profile picture of the author"
  photo: String
}

type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

`;

module.exports = typeDefs;