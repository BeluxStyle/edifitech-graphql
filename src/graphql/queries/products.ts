import { gql } from '@apollo/client';
import { PRODUCT_FRAGMENT } from '../fragments/product.fragment';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      ...ProductFields
    }
  }
  ${PRODUCT_FRAGMENT}
`;
