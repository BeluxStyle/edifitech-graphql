import { gql } from '@apollo/client';

export const CREATE_SUBCATEGORY = gql`
mutation CreateSubcategory($input: SubcategoryInput!) {
  createSubcategory(input: $input) {
    id
    name
  }
}
`
export const UPDATE_SUBCATEGORY = gql`
mutation UpdateSubcategory($id: ID!, $name: String!) {
  updateSubcategory(id: $id, name: $name) {
    id
    name
  }
}
`
export const DELETE_SUBCATEGORY = gql`
mutation DeleteSubcategory($id: ID!) {
  deleteSubcategory(id: $id)
}
`