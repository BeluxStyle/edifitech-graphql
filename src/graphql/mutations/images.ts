import { gql } from '@apollo/client';


export const CREATE_IMAGE = gql`
mutation Mutation($input: ImageInput!) {
  createImage(input: $input) {
    id
    url
  }
}
`
export const UPDATE_IMAGE = gql`
mutation Mutation($id: ID!, $url: String!) {
  updateImage(id: $id, url: $url) {
    id
    url
  }
}
`
export const DELETE_IMAGE = gql`
mutation Mutation($id: ID!) {
  deleteImage(id: $id)
}
`