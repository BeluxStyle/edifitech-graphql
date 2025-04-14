import { gql } from "@apollo/client";

export const CREATE_INSTALACION = gql`
mutation CreateInstalacion($input: InstalacionInput!) {
  createInstalacion(input: $input) {
    id
    tipo
    descripcion
  }
}
`
export const UPDATE_INSTALACION = gql`
mutation UpdateInstalacion($id: ID!, $input: InstalacionInput!) {
  updateInstalacion(id: $id, input: $input) {
    id
    tipo
  }
}
`
export const DELETE_INSTALACION = gql`
mutation DeleteInstalacion($id: ID!) {
  deleteInstalacion(id: $id)
}
`