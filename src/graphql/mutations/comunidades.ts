import { gql } from '@apollo/client';

export const CREATE_COMUNIDAD = gql`
mutation CreateComunidad($input: ComunidadInput!) {
  createComunidad(input: $input) {
    id
    name
  }
}
`
export const UPDATE_COMUNIDAD = gql`
mutation UpdateComunidad($id: ID!, $input: ComunidadInput!) {
  updateComunidad(id: $id, input: $input) {
    id
    name
  }
}
`
export const DELETE_COMUNIDAD = gql`
mutation DeleteComunidad($id: ID!) {
  deleteComunidad(id: $id)
}
`

