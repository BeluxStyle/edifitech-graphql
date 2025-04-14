import { useDocumentActions } from '../hooks/useDocuments';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Document, DocumentInput } from '../types';

export const useDocumentHandlers = () => {
    const { deleteDocument, updateDocument, createDocument } = useDocumentActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Documento?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteDocument(id);
        toast('Documento eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar documento', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (document: Document) => {
        const input:DocumentInput = {
            url: document.url
        }
      try {
        await updateDocument(document.id, input);
        toast('Documento actualizado', 'success');
        return document; // Retorna el documento actualizado
      } catch (err) {
        toast('Error al actualizar documento', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newDocument: DocumentInput, {onSuccess, onError }: CreateOptions) => {
      try {
        const input: DocumentInput = newDocument

        const result = await createDocument(input);
  
        toast("Documento creado correctamente","success");
        onSuccess?.();
        return result.data.createDocument
      } catch (error: any) {
        console.error("Error al crear documento:", error);
        toast("Error al crear documento","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };