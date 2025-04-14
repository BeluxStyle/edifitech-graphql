import { gql } from '@apollo/client';


export const CREATE_CATEGORY = gql`
mutation CreateCategory($input: CategoryInput!) {
  createCategory(input: $input) {
    id
    name
  }
}
`
export const UPDATE_CATEGORY = gql`
mutation UpdateCategory($id: ID!, $name: String!) {
  updateCategory(id: $id, name: $name) {
    id
    name
  }
}
`
export const DELETE_CATEGORY = gql`
mutation DeleteCategory($id: ID!) {
  deleteCategory(id: $id)
}
`