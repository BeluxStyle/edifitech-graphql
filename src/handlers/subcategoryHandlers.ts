import { useSubcategoryActions } from '../hooks/useSubcategories';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Subcategory, SubcategoryInput } from '../types';

export const useSubcategoryHandlers = () => {
    const { deleteSubcategory, updateSubcategory, createSubcategory } = useSubcategoryActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar ésta Subcategoría?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteSubcategory(id);
        toast('Subcategoría eliminada con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar subcategoría', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (subcategory: Subcategory) => {
      
      try {
        await updateSubcategory(subcategory.id, subcategory.name);
        toast('Subcategoría actualizada', 'success');
        return subcategory; // Retorna subcategoría actualizada
      } catch (err) {
        toast('Error al actualizar subcategoría', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newSubcategory: SubcategoryInput, {onSuccess, onError }: CreateOptions) => {
      try {
        const input: SubcategoryInput = newSubcategory

        const result = await createSubcategory(input);
  
        toast("Subcategoría creada correctamente","success");
        onSuccess?.();
        return result.data.createSubcategory
      } catch (error: any) {
        console.error("Error al crear subcategoría:", error);
        toast("Error al crear subcategoría","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };