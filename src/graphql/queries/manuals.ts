import { gql } from "@apollo/client";

export const GET_MANUALS = gql`
query GetManuals($searchTerm: String, $page: Int!, $pageSize: Int!) {
  listManuals(searchTerm: $searchTerm, page: $page, pageSize: $pageSize) {
    manuals {
    id
    description
    name
    documento {
      id
      url
    }
    productos {
      id
      ref
      name
      descripcion
    }
    }
    totalCount
  }
}
`