import { gql } from '@apollo/client';

export const GET_CONTACTOS = gql`
query GetContactos {
  listContactos {
    id
    location
    name
    phone
    type
    edificio {
      id
      name
      label
    }
    comunidad {
      id
      name
    }
  }
}
`