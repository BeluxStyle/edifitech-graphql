import { useQuery, useMutation } from '@apollo/client';
import { GET_DOCUMENTS } from '../graphql/queries/documents';
import { DELETE_DOCUMENT, UPDATE_DOCUMENT, CREATE_DOCUMENT } from '../graphql/mutations/documents';
import { DocumentInput } from '../types';

export function useDocuments() {
  
  const { data, loading, error, refetch } = useQuery(GET_DOCUMENTS, {fetchPolicy: "cache-and-network"
  });

  return {
    documents: data?.listDocuments || [],
    totalCount: data?.listDocuments.length,
    loading,
    error,
    refetch,
    
  };
}

export function useDocumentActions() {
  const [deleteDocument] = useMutation(DELETE_DOCUMENT, {refetchQueries: ['GetDocuments']});
  const [updateDocument] = useMutation(UPDATE_DOCUMENT, {refetchQueries: ['GetDocuments']});
  const [createDocument] = useMutation(CREATE_DOCUMENT, {refetchQueries: ['GetDocuments']});
  
  return {
    deleteDocument: (id: string) => deleteDocument({ variables: { id } }),
    updateDocument: (id: string, input: DocumentInput) => updateDocument({ variables: { id, input } }),
    createDocument: (input: DocumentInput) => createDocument({ variables: { input } }),
  };
}


