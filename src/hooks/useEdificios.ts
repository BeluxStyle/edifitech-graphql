import { useQuery, useMutation } from '@apollo/client';
import { GET_EDIFICIO, GET_EDIFICIOS } from '../graphql/queries/edificios';
import { DELETE_EDIFICIO, UPDATE_EDIFICIO, CREATE_EDIFICIO } from '../graphql/mutations/edificios';
import { ComunidadInput, EdificioInput } from '../types';

export function useEdificios() {
  
  const { data, loading, error, refetch } = useQuery(GET_EDIFICIOS, {fetchPolicy: "cache-and-network"
  });

  return {
    edificios: data?.listEdificios || [],
    totalCount: data?.listEdificios.length,
    loading,
    error,
    refetch,
    
  };
}

export function useEdificio(id:string) {
    const { data, loading, error, refetch } = useQuery(GET_EDIFICIO, { variables: { id }  ,  fetchPolicy: "cache-and-network" });

    return {
        edificio: data?.getEdificio || null,
        loading,
        error,
        refetch,
        
      };
}

export function useEdificioActions() {
  const [deleteEdificio] = useMutation(DELETE_EDIFICIO, {refetchQueries: ['GetEdificios','GetComunidades', 'GetComunidad']});
  const [updateEdificio] = useMutation(UPDATE_EDIFICIO, {refetchQueries: ['GetEdificios','GetComunidades', 'GetComunidad']});
  const [createEdificio] = useMutation(CREATE_EDIFICIO, {refetchQueries: ['GetEdificios','GetComunidades', 'GetComunidad']});
  
  return {
    deleteEdificio: (id: string) => deleteEdificio({ variables: { id } }),
    updateEdificio: (id: string, input: EdificioInput) => updateEdificio({ variables: { id, input } }),
    createEdificio: (input: EdificioInput) => createEdificio({ variables: { input } }),
  };
}


