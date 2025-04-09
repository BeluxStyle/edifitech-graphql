import { gql } from '@apollo/client';

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($input: ProductInput!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
