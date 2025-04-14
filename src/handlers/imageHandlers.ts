import { useImageActions } from '../hooks/useImages';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Image, ImageInput } from '../types';

export const useImageHandlers = () => {
    const { deleteImage, updateImage, createImage } = useImageActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar ésta Imágen?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteImage(id);
        toast('Imágen eliminada con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar imágen', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (image: Image) => {
      
      try {
        await updateImage(image.id, image.url);
        toast('Imágen actualizada', 'success');
        return image; // Retorna el imageo actualizado
      } catch (err) {
        toast('Error al actualizar imágen', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newImage: ImageInput, {onSuccess, onError }: CreateOptions) => {
      try {
        const input: ImageInput = newImage

        const result = await createImage(input);
  
        toast("Imágen creada correctamente","success");
        onSuccess?.();
        return result.data.createImage
      } catch (error: any) {
        console.error("Error al crear imágen:", error);
        toast("Error al crear imágen","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };