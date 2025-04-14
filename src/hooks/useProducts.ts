import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries/products';
import { DELETE_PRODUCT, UPDATE_PRODUCT, CREATE_PRODUCT, IMPORT_PRODUCTS } from '../graphql/mutations/products';
import { ProductInput } from '../types';

export function useProducts(searchTerm: string, paginationModel: { page: number, pageSize: number }, filters?: {categoryId: string, brandId: string}) {
  
  let page = paginationModel.page
  let pageSize = paginationModel.pageSize
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: { searchTerm, page: page + 1, pageSize, categoryId: filters?.categoryId, brandId: filters?.brandId }, fetchPolicy: "cache-and-network"
  });

  return {
    products: data?.listProductos.productos || [],
    totalCount: data?.listProductos.totalCount,
    loading,
    error,
    refetch,
    
  };
}

export function useProductActions() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT, {refetchQueries: ['GetProducts']});
  const [updateProduct] = useMutation(UPDATE_PRODUCT, {refetchQueries: ['GetProducts']});
  const [createProduct] = useMutation(CREATE_PRODUCT, {refetchQueries: ['GetProducts']});
  const [importProducts] = useMutation(IMPORT_PRODUCTS, {refetchQueries: ['GetProducts']});
  
  return {
    deleteProduct: (id: string) => deleteProduct({ variables: { id } }),
    updateProduct: (id: string, input: ProductInput) => updateProduct({ variables: { id, input } }),
    createProduct: (input: ProductInput) => createProduct({ variables: { input } }),
    importProducts: (data: any) => importProducts({ variables: { data } })
  };
}


