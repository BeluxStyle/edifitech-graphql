import { gql } from '@apollo/client';



export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $image: String, $email: String, $roleId: ID) {
    updateUser(id: $id, name: $name, image: $image email: $email, roleId: $roleId) {
      id
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      lastLogin
      role {
        name
      }
    }
  }
`;

// Mutación para eliminar usuario
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($password: String!, $id: ID!) {
  changePassword(password: $password, id: $id) {
    id
  }
}
`

export const CHECK_PASSWORD = gql`
  mutation CheckPassword($password: String!, $id: ID!) {
  checkPassword(password: $password, id: $id)
}
`

export const REGISTER_DEVICE = gql`
mutation RegisterDevice($input: RegisterDeviceInput!) {
  registerDevice(input: $input) {
    id
    os
    expoPushToken
    deviceId
  }
}
`;

export const UNREGISTER_DEVICE = gql`
mutation UnregisterDevice($deviceId: String!) {
  unregisterDevice(deviceId: $deviceId)
}
`;

