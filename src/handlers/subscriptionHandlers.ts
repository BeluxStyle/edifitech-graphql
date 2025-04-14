import { useSubscriptionActions } from '../hooks/useSubscriptions';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Subscription, SubscriptionInput } from '../types';

export const useSubscriptionHandlers = () => {
    const { deleteSubscription, updateSubscription, createSubscription } = useSubscriptionActions();
  
    const handleDelete = async (id: string) => {
      const confirm = await confirmDelete("Estas seguro de eliminar éste Subscripción?"); // función reusable
      if (!confirm) return;
  
      try {
        await deleteSubscription(id);
        toast('Subscripción eliminado con éxito', 'warning');
      } catch (err) {
        toast('Error al eliminar subscripción', 'error');
        console.error(err);
      }
    };
  
    const handleUpdate = async (subscription: Subscription) => {
      
      try {
        await updateSubscription(subscription.id, subscription.name, subscription.price, subscription.duration, subscription.isTrial, subscription.isLifetime);
        toast('Subscripción actualizado', 'success');
        return subscription; // Retorna el subscriptiono actualizado
      } catch (err) {
        toast('Error al actualizar subscripción', 'error');
        console.error(err);
      }
    };
  
    const handleCreate = async ( newSubscription: SubscriptionInput, {onSuccess, onError }: CreateOptions) => {
      try {
        

        const result = await createSubscription(newSubscription.name, newSubscription.price, newSubscription.duration, newSubscription.isTrial, newSubscription.isLifetime);
  
        toast("Subscripción creado correctamente","success");
        onSuccess?.();
        return result.data.createSubscription
      } catch (error: any) {
        console.error("Error al crear subscripción:", error);
        toast("Error al crear subscripción","error");
        onError?.();
      }
    }
  
    
  
    return {
      handleDelete,
      handleUpdate,
      handleCreate,
    };
  };