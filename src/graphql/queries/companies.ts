import { gql } from '@apollo/client';

export const GET_COMPANIES = gql`
query GetCompanies {
  listCompanies {
    id
    name
    cif
    phone
    address
    type
    createdAt
    updatedAt
    users {
      id
      name
    }
    comunidades {
      id
      name
    }
    companySubscriptions {
      id
      status
      endDate
      subscription {
        name
      }
    }
  }
}
`