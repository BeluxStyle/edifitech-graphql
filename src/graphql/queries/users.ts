import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    listUsers {
      id
      name
      image
      hasPassword
      email
      emailVerified
      lastLogin
      createdAt
      role {
        id
        name
      }
      accounts {
        id
        provider
      }
      userSubscriptions {
        id
        endDate
        status
        subscription {
          name
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query GetMe {
    me {
      id
      name
      email
      emailVerified
      lastLogin
      createdAt
      hasPassword
      role {
        id
        name
      }
      accounts {
        provider
        id
      }
      company {
        id
        name
        cif
        phone
        address
        type
        createdAt
        updatedAt
        users {
          id
          name
          lastLogin
        }
        owner{
          id
          name
          lastLogin
        }
      }
      userSubscriptions {
        id
        endDate
        status
        subscription {
          name
        }
      }
      image
    }
  }
`;

export const GET_MY_DEVICES = gql`
query GetMyDevices {
  myDevices {
    id
    expoPushToken
    os
    deviceId
    createdAt
    updatedAt
    lastUsedAt
  }
}
`;