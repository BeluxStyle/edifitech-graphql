import { gql } from '@apollo/client';

export const GET_EDIFICIOS = gql`
query GetEdificios {
  listEdificios {
    id
    name
    label
    direccion
    cp
    comunidad {
      id
      name
    }
    instalaciones {
      id
      tipo
    }
    adminCompany {
      id
      name
    }
  }
}
`

export const GET_EDIFICIO = gql`
query GetEdificio($id: ID!) {
  getEdificio(id: $id) {
    id
    name
    label
    direccion
    cp
    createdAt
    contactos {
      id
      name
      phone
      location
      type
      edificio {
        name
        comunidad {
          name
        }
      }
    }
    comunidad {
      id
      name
      direccion
      cp
    }
    comments {
      id
      replies {
        id
        comment
        createdAt
        author {
          id
          name
          image
        }
      }
      author {
        id
        name
        image
      }
      reactions {
        id
        type
      }
      comment
      createdAt
    }
    adminCompany {
      id
      name
    }
    instalaciones {
      id
      tipo
      categoryId
      category {
          id
          name
        }
      
      elementos {
        id
        cantidad
        producto {
          name
          ref
          image {
            url
          }
          descripcion
          manuals {
            id
            name
            documento {
              url
            }
          }
          subcategory {
             id
             name
              categoria {
                id
               name
             }
          }
          brand {
            id
            name
           }
        }
      }
    }
  }
}
`