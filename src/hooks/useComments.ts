import { useMutation } from '@apollo/client';

import { ADD_REACTION, DELETE_COMMENT, POST_COMMENT} from '../graphql/mutations/comments';
import { CommentInput, ReactionInput } from '../types';


export function useComments() {
  
  
}

export function useCommentActions() {
  const [deleteComment] = useMutation(DELETE_COMMENT, {refetchQueries: ['GetComments','GetComunidad','GetEdificio']});
  const [postComment] = useMutation(POST_COMMENT, {refetchQueries: ['GetComments','GetComunidad','GetEdificio']});
  const [addReaction] = useMutation(ADD_REACTION, {refetchQueries: ['GetComments','GetComunidad','GetEdificio']});
  
  return {
    deleteComment: (id: string) => deleteComment({ variables: { id } }),
    postComment: (input: CommentInput) => postComment({ variables: { input } }),
    addReaction: (input: ReactionInput) => addReaction({variables: {input}}),
  };
}


