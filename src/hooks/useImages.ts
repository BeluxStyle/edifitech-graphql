import { useQuery, useMutation } from '@apollo/client';
import { GET_IMAGES } from '../graphql/queries/images';
import { DELETE_IMAGE, UPDATE_IMAGE, CREATE_IMAGE } from '../graphql/mutations/images';
import { ImageInput } from '../types';

export function useImages() {
  
  const { data, loading, error, refetch } = useQuery(GET_IMAGES, {fetchPolicy: "cache-and-network"
  });

  return {
    images: data?.listImages || [],
    totalCount: data?.listImages.length,
    loading,
    error,
    refetch,
    
  };
}

export function useImageActions() {
  const [deleteImage] = useMutation(DELETE_IMAGE, {refetchQueries: ['GetImages']});
  const [updateImage] = useMutation(UPDATE_IMAGE, {refetchQueries: ['GetImages']});
  const [createImage] = useMutation(CREATE_IMAGE, {refetchQueries: ['GetImages']});
  
  return {
    deleteImage: (id: string) => deleteImage({ variables: { id } }),
    updateImage: (id: string, url: string) => updateImage({ variables: { id, url } }),
    createImage: (input: ImageInput) => createImage({ variables: { input } }),
  };
}


