import { gql } from '@apollo/client';


export const GET_SUBCATEGORIES = gql`
query GetSubcategories {
  listSubcategories {
    id
    name
    categoria {
      id
      name
    }
  }
}
`