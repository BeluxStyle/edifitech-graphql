import { useQuery, useMutation } from '@apollo/client';
import { GET_CONTACTOS } from '../graphql/queries/contactos';
import { DELETE_CONTACTO, UPDATE_CONTACTO, CREATE_CONTACTO } from '../graphql/mutations/contactos';
import { ContactoInput } from '../types';

export function useContactos() {
  
  const { data, loading, error, refetch } = useQuery(GET_CONTACTOS, {fetchPolicy: "cache-and-network"
  });

  return {
    contactos: data?.listContactos || [],
    totalCount: data?.listContactos.length,
    loading,
    error,
    refetch,
    
  };
}

export function useContactoActions() {
  const [deleteContacto] = useMutation(DELETE_CONTACTO, {refetchQueries: ['GetContactos', 'GetEdificio', 'GetComunidad']});
  const [updateContacto] = useMutation(UPDATE_CONTACTO, {refetchQueries: ['GetContactos', 'GetEdificio', 'GetComunidad']});
  const [createContacto] = useMutation(CREATE_CONTACTO, {refetchQueries: ['GetContactos', 'GetEdificio', 'GetComunidad']});
  
  return {
    deleteContacto: (id: string) => deleteContacto({ variables: { id } }),
    updateContacto: (id: string, input: ContactoInput) => updateContacto({ variables: { id, input } }),
    createContacto: (input: ContactoInput) => createContacto({ variables: { input } }),
  };
}


