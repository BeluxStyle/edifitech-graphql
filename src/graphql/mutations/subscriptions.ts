import { gql } from '@apollo/client';

export const DELETE_SUBSCRIPTION = gql`
mutation DeleteSubscription($id: ID!) {
    deleteSubscription(id: $id)
  }
`

export const CREATE_SUBSCRIPTION = gql`
mutation CreateUserSubscription($name: String!, $price: Int!, $duration: Int!, $isTrial: Boolean!, $isLifetime: Boolean!) {
  createSubscription(name: $name, price: $price, duration: $duration, isTrial: $isTrial, isLifetime: $isLifetime) {
    duration
    id
    isLifetime
    isTrial
    name
    price
  }
}
`

export const UPDATE_SUBSCRIPTION = gql`
mutation UpdateSubscription($id: ID!, $name: String, $price: Int, $duration: Int, $isTrial: Boolean, $isLifetime: Boolean) {
  updateSubscription(id: $id, name: $name, price: $price, duration: $duration, isTrial: $isTrial, isLifetime: $isLifetime) {
    duration
    id
    isLifetime
    isTrial
    name
    price
  }
}
`