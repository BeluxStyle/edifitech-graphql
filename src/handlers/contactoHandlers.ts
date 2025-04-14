import { useContactoActions } from '../hooks/useContactos';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Contacto, ContactoInput } from '../types';

export const useContactoHandlers = () => {
    const { deleteContacto, updateContacto, createContacto } = useContactoActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar ésta Contacto?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteContacto(id);
        toast('Contacto eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar contacto', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (contacto: Contacto) => {
        const input:ContactoInput = {
            name: contacto.name,
            phone: contacto.phone,
            type: contacto.type,
            location: contacto.location,
            comunidadId: contacto.comunidad?.id,
            edificioId: contacto.edificio?.id,

        }
      try {
        await updateContacto(contacto.id, input);
        toast('Contacto actualizado', 'success');
        return contacto; // Retorna el contactoo actualizado
      } catch (err) {
        toast('Error al actualizar contacto', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newContacto: ContactoInput, {onSuccess, onError }: CreateOptions) => {
      try {
        const input: ContactoInput = newContacto

        const result = await createContacto(input);
  
        toast("Contacto creada correctamente","success");
        onSuccess?.();
        return result.data.createContacto
      } catch (error: any) {
        console.error("Error al crear contacto:", error);
        toast("Error al crear contacto","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };