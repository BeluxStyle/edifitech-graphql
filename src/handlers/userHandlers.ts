import { useUserActions } from '../hooks/useUsers';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, RegisterDeviceInput, User, UserInput } from '../types';

export const useUserHandlers = () => {
    const { deleteUser, updateUser, createUser, changePassword, checkPassword, registerDevice, unregisterDevice } = useUserActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Usuario?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteUser(id);
        toast('Usuario eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar usuario', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (user: User) => {
      
      try {
        await updateUser(user.id, user.name, user.image ?? '', user.email, user.role?.id);
        toast('Usuario actualizado', 'success');
        return user; // Retorna el usero actualizado
      } catch (err) {
        toast('Error al actualizar usuario', 'error');
        console.error(err);
      }
    };

    const handleChangePassword = async (user: User, password: string) => {
      
      try {
        await changePassword(user.id, password);
        toast('Contraseña cambiada', 'success');
        return user; // Retorna el usero actualizado
      } catch (err) {
        toast('Error al cambiar contraseña', 'error');
        console.error(err);
      }
    };

    const handlePassword = async (user: User, password: string, currentPassword: string, {onSuccess, onError }: CreateOptions) => {

      const checkPass = await checkPassword(user.id, password)

    if (!checkPass.data.checkPassword) {
        toast('Contraseña actual incorrecta', "error");
        return;
    }
      
      try {
        await changePassword(user.id, password);
        toast('Contraseña cambiada', 'success');
        onSuccess?.();
        return user; // Retorna el usero actualizado
      } catch (err) {
        toast('Error al cambiar contraseña', 'error');
        onError?.();
      }
    };

  
    const handleCreate = async ( newUser: UserInput, {onSuccess, onError }: CreateOptions) => {
      try {
        

        const result = await createUser(newUser.name, newUser.email, newUser.password);
  
        toast("Usuario creado correctamente","success");
        onSuccess?.();
        return result.data.createUser
      } catch (error: any) {
        console.error("Error al crear usuario:", error);
        toast("Error al crear usuario","error");
        onError?.();
      }
    }

    const handleRegisterDevice = async (input: RegisterDeviceInput) => {
      try {
        const res = await registerDevice(input);
        toast('Dispositivo registrado correctamente', 'success');
        return res;
      } catch (error) {
        toast('Error registrando dispositivo', 'error');
        throw error;
      }
    };
    
    const handleUnregisterDevice = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Dispositivo?"); // función reusable
      if (!confirm) return;
      try {
        const res = await unregisterDevice(id);
        toast('Dispositivo eliminado correctamente', 'success');
        return res;
      } catch (error) {
        toast('Error eliminando dispositivo', "error");
        throw error;
      }
    };


  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
      handleChangePassword,
      handlePassword,
      handleRegisterDevice,
      handleUnregisterDevice
    };
  };