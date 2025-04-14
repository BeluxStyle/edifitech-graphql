import { gql } from "@apollo/client";

export const GET_ROLES = gql`
  query GetRoles {
    listRoles {
      id
      name
      level
      users {
        id
        name
        image
      }
    }
  }
`;