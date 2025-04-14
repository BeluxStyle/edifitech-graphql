import { useManualActions } from '../hooks/useManuals';
import { useImageActions } from '../hooks/useImages'
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, ImageInput, Manual, ManualInput, ManualUpdateInput } from 'types';

export const useManualHandlers = () => {
  const { deleteManual, updateManual, createManual, importManuals } = useManualActions();
  const { createImage } = useImageActions();

  const handleDelete = async (id: string) => {
    const confirm = await confirmDelete("Estás seguro de eliminar éste Manual?"); // función reusable
    if (!confirm) return;

    try {
      await deleteManual(id);
      toast('Manual eliminado con éxito', 'warning');
    } catch (err) {
      toast('Error al eliminar manual', 'error');
      console.error(err);
    }
  };

  const handleUpdate = async (manual: any) => {

    const input: ManualUpdateInput = {
      name: manual.name,
      description: manual.description,
      productos: manual.productos
    };

    try {
      await updateManual(manual.id, input);
      toast('Manual actualizado', 'success');
      return manual; // Retorna el manual actualizado
    } catch (err) {
      toast('Error al actualizar', 'error');
      console.error(err);
    }
  };

  const handleCreate = async ( newManual: any, {onSuccess, onError }: CreateOptions) => {
    try {

      const input: ManualInput = {
        name: newManual.name,
        description: newManual.description,
        url: newManual.url,
        referencias: newManual.referencias
      };

      await createManual(input);

      toast("Manual creado correctamente","success");
      onSuccess?.();
    } catch (error: any) {
      console.error("Error al crear manual:", error);
      toast("Error al crear manual","error");
      onError?.();
    }
  }

  const handleImport = async (data: ManualInput[], {onSuccess, onError }: CreateOptions) => {
    try {
      await importManuals(data);
      toast(`${data.length} Manuales importados correctamente` ,"success");
      onSuccess?.();
    } catch (error) {
      console.error("Error al importar manuales:", error);
      toast("Error al importar manuales","error");
      onError?.();
    }
  }

  return {
    handleDelete,
    handleUpdate,
    handleCreate,
    handleImport,
  };
};
