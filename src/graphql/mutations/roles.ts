import { gql } from "@apollo/client";

export const UPDATE_ROLE = gql`
  mutation UpdateRole($id: ID!, $name: String!, $level: Int) {
    updateRole(id: $id, name: $name, level: $level) {
      id
      name
      level
      users {
        name
      }
    }
  }
`;

// Mutación para eliminar rol
export const DELETE_ROLE = gql`
  mutation DeleteRole($id: ID!) {
    deleteRole(id: $id)
  }
`;

export const CREATE_ROLE = gql`
  mutation CreateRole($name: String!, $level: Int) {
  createRole(name: $name, level: $level) {
    id
    level
    name
    users {
      id
    }
  }
}
`