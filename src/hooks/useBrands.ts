import { useQuery, useMutation } from '@apollo/client';
import { GET_BRANDS } from '../graphql/queries/brands';
import { DELETE_BRAND, UPDATE_BRAND, CREATE_BRAND } from '../graphql/mutations/brands';
import { BrandInput } from '../types';

export function useBrands() {
  
  const { data, loading, error, refetch } = useQuery(GET_BRANDS, {fetchPolicy: "cache-and-network"
  });

  return {
    brands: data?.listBrands || [],
    totalCount: data?.listBrands.length,
    loading,
    error,
    refetch,
    
  };
}

export function useBrandActions() {
  const [deleteBrand] = useMutation(DELETE_BRAND, {refetchQueries: ['GetBrands']});
  const [updateBrand] = useMutation(UPDATE_BRAND, {refetchQueries: ['GetBrands']});
  const [createBrand] = useMutation(CREATE_BRAND, {refetchQueries: ['GetBrands']});
  
  return {
    deleteBrand: (id: string) => deleteBrand({ variables: { id } }),
    updateBrand: (id: string, name: string) => updateBrand({ variables: { id, name } }),
    createBrand: (input: BrandInput) => createBrand({ variables: { input } }),
  };
}


