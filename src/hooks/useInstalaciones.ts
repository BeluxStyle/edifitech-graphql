import { useQuery, useMutation } from '@apollo/client';
import { GET_INSTALACIONES } from '../graphql/queries/instalaciones';
import { DELETE_INSTALACION, UPDATE_INSTALACION, CREATE_INSTALACION } from '../graphql/mutations/instalaciones';
import { InstalacionInput } from '../types';

export function useInstalaciones() {
  
  const { data, loading, error, refetch } = useQuery(GET_INSTALACIONES, {fetchPolicy: "cache-and-network"
  });

  return {
    instalaciones: data?.listInstalaciones || [],
    totalCount: data?.listInstalaciones.length,
    loading,
    error,
    refetch,
    
  };
}

export function useInstalacionActions() {
  const [deleteInstalacion] = useMutation(DELETE_INSTALACION, {refetchQueries: ['GetInstalaciones','GetComunidad','GetEdificio']});
  const [updateInstalacion] = useMutation(UPDATE_INSTALACION, {refetchQueries: ['GetInstalaciones','GetComunidad','GetEdificio']});
  const [createInstalacion] = useMutation(CREATE_INSTALACION, {refetchQueries: ['GetInstalaciones','GetComunidad','GetEdificio']});
  
  return {
    deleteInstalacion: (id: string) => deleteInstalacion({ variables: { id } }),
    updateInstalacion: (id: string, input: InstalacionInput) => updateInstalacion({ variables: { id, input } }),
    createInstalacion: (input: InstalacionInput) => createInstalacion({ variables: { input } }),
  };
}


