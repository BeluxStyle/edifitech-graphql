import { useQuery, useMutation } from '@apollo/client';
import { GET_CATEGORIES } from '../graphql/queries/categories';
import { DELETE_CATEGORY, UPDATE_CATEGORY, CREATE_CATEGORY } from '../graphql/mutations/categories';
import { CategoryInput } from '../types';

export function useCategories() {
  
  const { data, loading, error, refetch } = useQuery(GET_CATEGORIES, {fetchPolicy: "cache-and-network"
  });

  return {
    categories: data?.listCategories || [],
    totalCount: data?.listCategories.length,
    loading,
    error,
    refetch,
    
  };
}

export function useCategoryActions() {
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {refetchQueries: ['GetCategories', 'GetSubcategories']});
  const [updateCategory] = useMutation(UPDATE_CATEGORY, {refetchQueries: ['GetCategories', 'GetSubcategories']});
  const [createCategory] = useMutation(CREATE_CATEGORY, {refetchQueries: ['GetCategories', 'GetSubcategories']});
  
  return {
    deleteCategory: (id: string) => deleteCategory({ variables: { id } }),
    updateCategory: (id: string, name: string) => updateCategory({ variables: { id, name } }),
    createCategory: (input: CategoryInput) => createCategory({ variables: { input } }),
  };
}


