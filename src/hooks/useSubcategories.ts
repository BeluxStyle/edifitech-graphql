import { useQuery, useMutation } from '@apollo/client';
import { GET_SUBCATEGORIES } from '../graphql/queries/subcategories';
import { DELETE_SUBCATEGORY, UPDATE_SUBCATEGORY, CREATE_SUBCATEGORY } from '../graphql/mutations/subcategories';
import { SubcategoryInput } from '../types';

export function useSubcategories() {
  
  const { data, loading, error, refetch } = useQuery(GET_SUBCATEGORIES, {fetchPolicy: "cache-and-network"
  });

  return {
    subcategories: data?.listSubcategories || [],
    totalCount: data?.listSubcategories.length,
    loading,
    error,
    refetch,
    
  };
}

export function useSubcategoryActions() {
  const [deleteSubcategory] = useMutation(DELETE_SUBCATEGORY, {refetchQueries: ['GetSubcategories', 'GetCategories', 'listCategories']});
  const [updateSubcategory] = useMutation(UPDATE_SUBCATEGORY, {refetchQueries: ['GetSubcategories', 'GetCategories', 'listCategories']});
  const [createSubcategory] = useMutation(CREATE_SUBCATEGORY, {refetchQueries: ['GetSubcategories', 'GetCategories', 'listCategories']});
  
  return {
    deleteSubcategory: (id: string) => deleteSubcategory({ variables: { id } }),
    updateSubcategory: (id: string, name: string) => updateSubcategory({ variables: { id, name } }),
    createSubcategory: (input: SubcategoryInput) => createSubcategory({ variables: { input } }),
  };
}


