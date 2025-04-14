import { useCategoryActions } from '../hooks/useCategories';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Category, CategoryInput } from '../types';

export const useCategoryHandlers = () => {
    const { deleteCategory, updateCategory, createCategory } = useCategoryActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar ésta Categoría?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteCategory(id);
        toast('Categoría eliminada con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar categoría', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (category: Category) => {
      
      try {
        await updateCategory(category.id, category.name);
        toast('Categoría actualizada', 'success');
        return category; // Retorna categoría actualizada
      } catch (err) {
        toast('Error al actualizar categoría', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newCategory: CategoryInput, {onSuccess, onError }: CreateOptions) => {
      try {
        const input: CategoryInput = newCategory

        const result = await createCategory(input);
  
        toast("Categoría creada correctamente","success");
        onSuccess?.();
        return result.data.createCategory
      } catch (error: any) {
        console.error("Error al crear categoría:", error);
        toast("Error al crear categoría","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };