import { useQuery, useMutation } from '@apollo/client';
import { GET_MANUALS } from '../graphql/queries/manuals';
import { DELETE_MANUAL, UPDATE_MANUAL, CREATE_MANUAL, IMPORT_MANUALS } from '../graphql/mutations/manuals';
import { ManualInput, ManualUpdateInput } from '../types';

export function useManuals(searchTerm: string, paginationModel: { page: number, pageSize: number }) {
  
  let page = paginationModel.page
  let pageSize = paginationModel.pageSize
  const { data, loading, error, refetch } = useQuery(GET_MANUALS, {
    variables: { searchTerm, page: page + 1, pageSize }, fetchPolicy: "cache-and-network"
  });

  return {
    manuals: data?.listManuals.manuals || [],
    totalCount: data?.listManuals.totalCount,
    loading,
    error,
    refetch,
    
  };
}

export function useManualActions() {
  const [deleteManual] = useMutation(DELETE_MANUAL, {refetchQueries: ['GetManuals']});
  const [updateManual] = useMutation(UPDATE_MANUAL, {refetchQueries: ['GetManuals']});
  const [createManual] = useMutation(CREATE_MANUAL, {refetchQueries: ['GetManuals']});
  const [importManuals] = useMutation(IMPORT_MANUALS, {refetchQueries: ['GetManuals']});
  
  return {
    deleteManual: (id: string) => deleteManual({ variables: { id } }),
    updateManual: (id: string, input: ManualUpdateInput) => updateManual({ variables: { id, input } }),
    createManual: (input: ManualInput) => createManual({ variables: { input } }),
    importManuals: (data: any) => importManuals({ variables: { data } })
  };
}


