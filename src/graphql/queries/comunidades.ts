import { gql } from '@apollo/client';

export const GET_COMUNIDADES = gql`
query GetComunidades {
  listComunidades {
    id
    name
    direccion
    cp
    adminCompany {
      id
      name
    }
    edificios {
      id
      name
      label
      adminCompany {
        id
        name
      }
    }
  }
}
`

export const GET_COMUNIDAD = gql`
query GetComunidad($id: ID!) {
  getComunidad(id: $id) {
    direccion
    createdAt
    cp
    name
    contactos {
      id
      name
      phone
      location
      type
      comunidad {
        name
      }
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
    edificios {
      id
      name
      label
      comments {
        id
      }
      instalaciones {
        id
        tipo
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
          }
        }
      }
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
        }
      }
    }
    id
    name
  }
}
`