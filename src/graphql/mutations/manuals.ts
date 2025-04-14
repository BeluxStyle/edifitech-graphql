import { gql } from '@apollo/client';


export const IMPORT_MANUALS = gql`
  mutation ImportManuales($data: [ManualInput!]!) {
    importManuales(data: $data) {
      success
      message
    }
  }
`;

export const CREATE_MANUAL = gql`
mutation CreateManual($input: ManualInput!) {
  createManual(input: $input) {
    success
    message
    manual {
      id
      name
    }
  }
}
`
export const UPDATE_MANUAL = gql`
mutation UpdateManual($id: ID!, $input: ManualUpdateInput!) {
  updateManual(id: $id, input: $input) {
    id
    name
  }
}
`
export const DELETE_MANUAL = gql`
mutation DeleteManual($id: ID!) {
  deleteManual(id: $id)
}
`