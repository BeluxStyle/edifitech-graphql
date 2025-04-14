import { gql } from '@apollo/client';
import { PRODUCT_FRAGMENT } from '../fragments/product.fragment';

export const GET_PRODUCTS = gql`
  query GetProducts($searchTerm: String, $page: Int!, $pageSize: Int!, $categoryId: ID, $brandId: ID) {
    listProductos(searchTerm: $searchTerm, page: $page, pageSize: $pageSize, categoryId: $categoryId, brandId: $brandId) {
      productos {
      ...ProductFields
    }
    totalCount
    }
  }
  ${PRODUCT_FRAGMENT}
`;