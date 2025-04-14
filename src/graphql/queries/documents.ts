import { gql } from "@apollo/client";

export const GET_DOCUMENTS = gql`
query GetDocuments{
  listDocuments {
    id
    url
    manuals {
      id
      name
    }
  }
}
`