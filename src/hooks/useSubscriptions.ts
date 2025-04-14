import { useQuery, useMutation } from '@apollo/client';
import { GET_SUBSCRIPTIONS } from '../graphql/queries/subscriptions';
import { DELETE_SUBSCRIPTION, UPDATE_SUBSCRIPTION, CREATE_SUBSCRIPTION } from '../graphql/mutations/subscriptions';
import { SubscriptionInput } from '../types';

export function useSubscriptions() {
  
  const { data, loading, error, refetch } = useQuery(GET_SUBSCRIPTIONS, {fetchPolicy: "cache-and-network"
  });

  return {
    subscriptions: data?.listSubscriptions || [],
    totalCount: data?.listSubscriptions.length,
    loading,
    error,
    refetch,
    
  };
}

export function useSubscriptionActions() {
  const [deleteSubscription] = useMutation(DELETE_SUBSCRIPTION, {refetchQueries: ['GetSubscriptions']});
  const [updateSubscription] = useMutation(UPDATE_SUBSCRIPTION, {refetchQueries: ['GetSubscriptions']});
  const [createSubscription] = useMutation(CREATE_SUBSCRIPTION, {refetchQueries: ['GetSubscriptions']});
  
  return {
    deleteSubscription: (id: string) => deleteSubscription({ variables: { id } }),
    updateSubscription: (id: string, name: string, price: number, duration: number, isTrial: boolean, isLifetime: boolean) => updateSubscription({ variables: { id, name, price, duration, isTrial, isLifetime } }),
    createSubscription: (name: string, price: number, duration: number, isTrial: boolean, isLifetime: boolean) => createSubscription({ variables: { name, price, duration, isTrial, isLifetime } }),
  };
}


