import { useEdificioActions } from '../hooks/useEdificios';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Edificio, EdificioInput } from '../types';

export const useEdificioHandlers = () => {
    const { deleteEdificio, updateEdificio, createEdificio } = useEdificioActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Edificio?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteEdificio(id);
        toast('Edificio eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar edificio', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (edificio: Edificio) => {
        const input:EdificioInput = {
            name: edificio.name,
            cp: edificio.cp,
            direccion: edificio.direccion,
            comunidadId: edificio.comunidad?.id
        }
      
      try {
        await updateEdificio(edificio.id, input);
        toast('Edificio actualizado', 'success');
        return edificio; // Retorna el edificioo actualizado
      } catch (err) {
        toast('Error al actualizar edificio', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newEdificio: EdificioInput, {onSuccess, onError }: CreateOptions) => {
      try {
        

        const result = await createEdificio(newEdificio);
  
        toast("Edificio creado correctamente","success");
        onSuccess?.();
        return result.data.createEdificio
      } catch (error: any) {
        console.error("Error al crear edificio:", error);
        toast("Error al crear edificio","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };