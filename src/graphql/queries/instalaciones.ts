import { gql } from "@apollo/client";

export const GET_INSTALACIONES = gql`
query GetInstalaciones {
  listInstalaciones {
    id
    tipo
    descripcion
    comunidad {
      id
      name
      direccion
      cp
    }
    edificio {
      id
      name
      direccion
      cp
      comunidad {
        id
        name
        direccion
        cp
      }
    }
    installerCompany {
      id
      name
    }
    elementos {
      id
      estado
      producto {
        id
        ref
      }
    }
  }
}
`