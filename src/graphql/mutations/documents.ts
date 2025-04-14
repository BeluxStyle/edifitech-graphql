import { gql } from '@apollo/client';

export const CREATE_DOCUMENT = gql`
mutation CreateDocument($input: DocumentInput!) {
  createDocument(input: $input) {
    id
    url
  }
}
`
export const UPDATE_DOCUMENT = gql`
mutation UpdateDocument($id: ID!, $input: DocumentInput!) {
  updateDocument(id: $id, input: $input) {
    id
    url
  }
}
`
export const DELETE_DOCUMENT = gql`
mutation DeleteDocument($id: ID!) {
  deleteDocument(id: $id)
}
`