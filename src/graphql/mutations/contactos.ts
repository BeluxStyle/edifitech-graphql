import { gql } from '@apollo/client';

export const CREATE_CONTACTO = gql`
mutation CreateContacto($input: ContactoInput!) {
  createContacto(input: $input) {
    id
    name
  }
}`

export const UPDATE_CONTACTO = gql`
mutation UpdateContacto($id: ID!, $input: ContactoInput!) {
  updateContacto(id: $id, input: $input) {
    id
  }
}
`

export const DELETE_CONTACTO = gql`
mutation DeleteContacto($id: ID!) {
  deleteContacto(id: $id)
}`