import { gql } from '@apollo/client';

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFields on Producto {
    id
    name
    descripcion
    createdAt
    ean
    image {
      id
      url
    }
    brand {
      id
      name
    }
    subcategory {
      id
      name
      categoria {
        id
        name
      }
    }
    manuals {
      id
      description
      name
      documento {
        id
        url
      }
    }
    price
    ref
    updatedAt
  }
`;
