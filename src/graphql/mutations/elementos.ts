import { gql } from '@apollo/client';

export const ADD_ELEMENTOS = gql`
  mutation AddElementos($instalacionId: ID!, $elementos: [ElementoInput!]!) {
  addElementos(instalacionId: $instalacionId, elementos: $elementos) {
    id
    cantidad
    producto {
      id
      name
    }
  }
}`

export const DELETE_ELEMENTO = gql`
  mutation DeleteElemento($id: ID!) {
    deleteElemento(id: $id)
  }`

export const UPDATE_ELEMENTO = gql`
  mutation UpdateElemento($id: ID!, $input: ElementoInput!) {
  updateElemento(id: $id, input: $input) {
    id
    cantidad
  }
}`