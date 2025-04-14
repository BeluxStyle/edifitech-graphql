import { gql } from '@apollo/client';

export const ADD_REACTION = gql`
  mutation AddReaction($input: ReactionInput!) {
    addReaction(input: $input) {
      id
      type
    }
  }
`;

export const POST_COMMENT = gql`
  mutation AddComment($input: CommentInput!) {
  addComment(input: $input) {
    id
    comment
  }
}
`
export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: ID!) {
  deleteComment(id: $id)
}
`