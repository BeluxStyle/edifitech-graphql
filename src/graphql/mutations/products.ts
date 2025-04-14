import { gql } from '@apollo/client';

export const DELETE_PRODUCT = gql`
mutation DeleteProduct($id: ID!) {
  deleteProducto(id: $id)
}
`

export const CREATE_PRODUCT = gql`
mutation Mutation($input: ProductoInput!) {
  createProducto(input: $input) {
    id
    descripcion
    createdAt
    ean
    price
    ref
    updatedAt
  }
}
`
export const UPDATE_PRODUCT = gql`
mutation UpdateProduct($id: ID!, $input: ProductoInput!) {
  updateProducto(id: $id, input: $input) {
    id
    descripcion
    createdAt
    ean
    price
    ref
    updatedAt
  }
}
`
export const IMPORT_PRODUCTS = gql`
mutation ImportProducts($data: [ProductoInput!]!) {
  importProducts(data: $data) {
    success
    message
  }
}
`;