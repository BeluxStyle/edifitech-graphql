import { useElementoActions } from '../hooks/useElementos';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Elemento, ElementoInput } from '../types';

export const useElementoHandlers = () => {
    const { deleteElemento, updateElemento, addElementos } = useElementoActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Elemento?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteElemento(id);
        toast('Elemento eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar elemento', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (elementoId: string, nuevaCantidad: number) => {
        const input:ElementoInput = {
            cantidad: nuevaCantidad,
        }
      
      try {
        const result = await updateElemento(elementoId, input);
        toast('Elemento actualizado', 'success');
        return result; // Retorna el elementoo actualizado
      } catch (err) {
        toast('Error al actualizar elemento', 'error');
        console.error(err);
      }
    };
  
    const handleAdd = async ( id: string,  elementos: ElementoInput[], {onSuccess, onError }: CreateOptions) => {
      try {

        const result = await addElementos(id,elementos);
  
        toast("Elementos añadidos correctamente","success");
        onSuccess?.();
        return result.data.createElemento
      } catch (error: any) {
        toast("Error al añadir elemento","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleAdd,
    };
  };