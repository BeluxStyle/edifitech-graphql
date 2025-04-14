import { useMutation } from '@apollo/client';
import { ADD_ELEMENTOS, DELETE_ELEMENTO, UPDATE_ELEMENTO } from '../graphql/mutations/elementos';
import { ElementoInput } from '../types';

export function useElementos() {
  
}

export function useElementoActions() {
  const [deleteElemento] = useMutation(DELETE_ELEMENTO, {refetchQueries: ['GetElementos','GetComunidad','GetEdificio']});
  const [updateElemento] = useMutation(UPDATE_ELEMENTO, {refetchQueries: ['GetElementos','GetComunidad','GetEdificio']});
  const [addElementos] = useMutation(ADD_ELEMENTOS, {refetchQueries: ['GetElementos','GetComunidad','GetEdificio']});
  
  return {
    deleteElemento: (id: string) => deleteElemento({ variables: { id } }),
    updateElemento: (id: string, input: ElementoInput) => updateElemento({ variables: { id, input } }),
    addElementos: (instalacionId: string, elementos: ElementoInput[]) => addElementos({ variables: { instalacionId, elementos } }),
  };
}


