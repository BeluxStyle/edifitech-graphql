import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
query GetCategories {
  listCategories {
    id
    name
    instalaciones {
      id
    }
    subcategorias {
      id
      name
      productos {
        id
      }
    }
  }
}
`