import { gql } from '@apollo/client';

export const CREATE_COMPANY = gql`
mutation CreateCompany($input: CompanyInput!) {
  createCompany(input: $input) {
    id
    name
  }
}
`
export const UPDATE_COMPANY = gql`
mutation UpdateCompany($id: ID!, $input: CompanyInput!) {
  updateCompany(id: $id, input: $input) {
    id
    name
  }
}
`
export const DELETE_COMPANY = gql`
mutation DeleteCompany($id: ID!) {
  deleteCompany(id: $id)
}
`
export const REMOVE_USER_FROM_COMPANY = gql`
  mutation RemoveUserFromCompany($userId: ID!, $companyId: ID!) {
  removeUserFromCompany(userId: $userId, companyId: $companyId) {
  id
  users {
      id
      name
    }
  }
}
`
export const ADD_USER_TO_COMPANY = gql`
mutation AddUserToCompany($userId: ID!, $companyId: ID!) {
  addUserToCompany(userId: $userId, companyId: $companyId) {
    id
    name
  }
}`

export const ADD_COMMUNITY_TO_COMPANY = gql`
mutation AddCommunityToCompany($companyId: ID!, $comunidadId: ID!) {
  addCommunityToCompany(companyId: $companyId, comunidadId: $comunidadId) {
    id
    name
  }
}`

export const REMOVE_COMMUNITY_FROM_COMPANY = gql`
mutation RemoveCommunityFromCompany($companyId: ID!, $comunidadId: ID!) {
  removeCommunityFromCompany(companyId: $companyId, comunidadId: $comunidadId) {
    id
    name
  }
}`
;