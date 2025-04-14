import { useQuery, useMutation } from '@apollo/client';
import { GET_COMUNIDADES, GET_COMUNIDAD } from '../graphql/queries/comunidades';
import { DELETE_COMUNIDAD, UPDATE_COMUNIDAD, CREATE_COMUNIDAD } from '../graphql/mutations/comunidades';
import { ComunidadInput } from '../types';

export function useComunidades() {
  
  const { data, loading, error, refetch } = useQuery(GET_COMUNIDADES, {fetchPolicy: "cache-and-network"
  });

  return {
    comunidades: data?.listComunidades || [],
    totalCount: data?.listComunidades.length,
    loading,
    error,
    refetch,
    
  };
}

export function useComunidad(id:string) {
    const { data, loading, error, refetch } = useQuery(GET_COMUNIDAD, { variables: { id }  ,  fetchPolicy: "cache-and-network" });

    return {
        comunidad: data?.getComunidad || null,
        loading,
        error,
        refetch,
        
      };
}

export function useComunidadActions() {
  const [deleteComunidad] = useMutation(DELETE_COMUNIDAD, {refetchQueries: ['GetEdificios','GetComunidades']});
  const [updateComunidad] = useMutation(UPDATE_COMUNIDAD, {refetchQueries: ['GetEdificios','GetComunidades']});
  const [createComunidad] = useMutation(CREATE_COMUNIDAD, {refetchQueries: ['GetEdificios','GetComunidades']});
  
  return {
    deleteComunidad: (id: string) => deleteComunidad({ variables: { id } }),
    updateComunidad: (id: string, input: ComunidadInput) => updateComunidad({ variables: { id, input } }),
    createComunidad: (input: ComunidadInput) => createComunidad({ variables: { input } }),
  };
}


