import { useInstalacionActions } from '../hooks/useInstalaciones';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Instalacion, InstalacionInput } from '../types';

export const useInstalacionHandlers = () => {
    const { deleteInstalacion, updateInstalacion, createInstalacion } = useInstalacionActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar ésta Instalación?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteInstalacion(id);
        toast('Instalación eliminada con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar instalación', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (instalacion: Instalacion) => {
        const input:InstalacionInput = {
            descripcion: instalacion.descripcion,
            tipo: instalacion.tipo,
            categoryId: instalacion.category?.id,
            comunidadId: instalacion.comunidad?.id,
            edificioId: instalacion.edificio?.id
        }
      
      try {
        await updateInstalacion(instalacion.id, input);
        toast('Instalación actualizada', 'success');
        return instalacion; // Retorna el instalaciono actualizado
      } catch (err) {
        toast('Error al actualizar instalación', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newInstalacion: InstalacionInput, {onSuccess, onError }: CreateOptions) => {
      try {
        const input: InstalacionInput = newInstalacion

        const result = await createInstalacion(input);
  
        toast("Instalación creada correctamente","success");
        onSuccess?.();
        return result.data.createInstalacion
      } catch (error: any) {
        console.error("Error al crear instalación:", error);
        toast("Error al crear instalación","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };