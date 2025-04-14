import { useBrandActions } from '../hooks/useBrands';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Brand, BrandInput } from '../types';

export const useBrandHandlers = () => {
    const { deleteBrand, updateBrand, createBrand } = useBrandActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar ésta Marca?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteBrand(id);
        toast('Marca eliminada con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar marca', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (brand: Brand) => {
      
      try {
        await updateBrand(brand.id, brand.name);
        toast('Marca actualizada', 'success');
        return brand; // Retorna marca actualizada
      } catch (err) {
        toast('Error al actualizar marca', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newBrand: BrandInput, {onSuccess, onError }: CreateOptions) => {
      try {
        const input: BrandInput = newBrand

        const result = await createBrand(input);
  
        toast("Marca creada correctamente","success");
        onSuccess?.();
        return result.data.createBrand
      } catch (error: any) {
        console.error("Error al crear marca:", error);
        toast("Error al crear marca","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };