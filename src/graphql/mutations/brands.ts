import { gql } from '@apollo/client';

export const CREATE_BRAND = gql`
mutation CreateBrand($input: BrandInput!) {
  createBrand(input: $input) {
    id
    name
  }
}
`
export const UPDATE_BRAND = gql`
mutation UpdateBrand($id: ID!, $name: String!) {
  updateBrand(id: $id, name: $name) {
    id
    name
  }
}
`
export const DELETE_BRAND = gql`
mutation DeleteBrand($id: ID!) {
  deleteBrand(id: $id)
}
`