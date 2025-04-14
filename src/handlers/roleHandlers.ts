import { useRoleActions } from '../hooks/useRoles';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Role, RoleInput } from '../types';

export const useRoleHandlers = () => {
    const { deleteRole, updateRole, createRole } = useRoleActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Rol?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteRole(id);
        toast('Rol eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar rol', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (role: Role) => {
      
      try {
        await updateRole(role.id, role.name, role.level);
        toast('Rol actualizado', 'success');
        return role; // Retorna el roleo actualizado
      } catch (err) {
        toast('Error al actualizar rol', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newRole: RoleInput, {onSuccess, onError }: CreateOptions) => {
      try {
        

        const result = await createRole(newRole.name, newRole.level);
  
        toast("Rol creado correctamente","success");
        onSuccess?.();
        return result.data.createRole
      } catch (error: any) {
        console.error("Error al crear rol:", error);
        toast("Error al crear rol","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };