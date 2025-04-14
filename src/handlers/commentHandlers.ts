import { useCommentActions } from '../hooks/useComments';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, CommentInput, User, Comunidad, Edificio, ReactionInput} from '../types';

export const useCommentHandlers = () => {
    const { deleteComment, postComment, addReaction } = useCommentActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste comentario?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteComment(id);
        toast('Comentario eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar comentario', 'error');
      }
    };
  
    const handlePost = async ( postcomment: CommentInput, {onSuccess, onError }: CreateOptions) => {
      try {
        
        const result = await postComment(postcomment);
  
        toast("Comentario publicado correctamente","success");
        onSuccess?.();
        return result.data.postComment
      } catch (error: any) {
        toast("Error al publicar comentario","error");
        onError?.();
      }
    }

    const handleReply = async ( newComment: CommentInput, {onSuccess, onError }: CreateOptions) => {
        try {
          
  
          const result = await postComment(newComment);
    
          toast("Comentario respondido correctamente","success");
          onSuccess?.();
          return result.data.replyComment
        } catch (error: any) {
          toast("Error al responder comentario","error");
          onError?.();
        }
      }

      const handleReaction = async ( newReaction: ReactionInput, {onSuccess, onError }: CreateOptions) => {
        try {
          
  
          const result = await addReaction(newReaction);
    
          toast("Reaccionado correctamente","success");
          onSuccess?.();
          return result.data.replyComment
        } catch (error: any) {
          toast("Error al reaccionar comentario","error");
          onError?.();
        }
      }
  
    
  
    return {
      handleDelete,
      handlePost,
      handleReply,
      handleReaction,
    };
  };