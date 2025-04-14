import { gql } from '@apollo/client';

export const CREATE_EDIFICIO = gql`
mutation CreateEdificio($input: EdificioInput!) {
  createEdificio(input: $input) {
    id
    name
  }
}
`
export const UPDATE_EDIFICIO = gql`
mutation UpdateEdificio($id: ID!, $input: EdificioInput!) {
  updateEdificio(id: $id, input: $input) {
    id
    name
  }
}
`
export const DELETE_EDIFICIO = gql`
mutation DeleteEdificio($id: ID!) {
  deleteEdificio(id: $id)
}
`