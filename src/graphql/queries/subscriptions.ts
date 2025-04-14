import { gql } from '@apollo/client';

export const GET_SUBSCRIPTIONS = gql`
  query GetSubscriptions {
  listSubscriptions {
    price
    name
    isTrial
    isLifetime
    id
    duration
    userSubscriptions {
      status
      user {
        id
        name
        image
      }
    }
    companySubscriptions {
      status
      company {
        id
        name
      }
    }
  }
}
`