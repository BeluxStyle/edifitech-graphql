import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries/products';

export function useProducts() {
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS);

  return {
    products: data?.products || [],
    loading,
    error,
    refetch,
  };
}
