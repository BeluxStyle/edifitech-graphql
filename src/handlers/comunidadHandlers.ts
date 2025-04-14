import { useComunidadActions } from '../hooks/useComunidades';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Comunidad, ComunidadInput } from '../types';

export const useComunidadHandlers = () => {
    const { deleteComunidad, updateComunidad, createComunidad } = useComunidadActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Comunidad?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteComunidad(id);
        toast('Comunidad eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar comunidad', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (comunidad: Comunidad) => {
        const input:ComunidadInput = {
            name: comunidad.name,
            direccion: comunidad.direccion,
            cp: comunidad.cp
        }
      
      try {
        await updateComunidad(comunidad.id, input);
        toast('Comunidad actualizado', 'success');
        return comunidad; // Retorna el comunidado actualizado
      } catch (err) {
        toast('Error al actualizar comunidad', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newComunidad: ComunidadInput, {onSuccess, onError }: CreateOptions) => {
      try {
        

        const result = await createComunidad(newComunidad);
  
        toast("Comunidad creado correctamente","success");
        onSuccess?.();
        return result.data.createComunidad
      } catch (error: any) {
        console.error("Error al crear comunidad:", error);
        toast("Error al crear comunidad","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };