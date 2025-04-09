import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { DELETE_PRODUCT } from '../graphql/mutations/deleteProduct';
import { toast } from '../utils/toast';

export async function handleDeleteProduct(
  client: ApolloClient<NormalizedCacheObject>,
  id: string
) {
  try {
    await client.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id },
    });
    toast('Producto eliminado con éxito');
  } catch (err) {
    console.error(err);
    toast('Error al eliminar producto');
  }
}
