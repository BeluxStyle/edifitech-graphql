import { useQuery, useMutation } from '@apollo/client';
import { GET_ROLES } from '../graphql/queries/roles';
import { DELETE_ROLE, UPDATE_ROLE, CREATE_ROLE } from '../graphql/mutations/roles';
import { RoleInput } from '../types';

export function useRoles() {
  
  const { data, loading, error, refetch } = useQuery(GET_ROLES, {fetchPolicy: "cache-and-network"
  });

  return {
    roles: data?.listRoles || [],
    totalCount: data?.listRoles.length,
    loading,
    error,
    refetch,
    
  };
}

export function useRoleActions() {
  const [deleteRole] = useMutation(DELETE_ROLE, {refetchQueries: ['GetRoles']});
  const [updateRole] = useMutation(UPDATE_ROLE, {refetchQueries: ['GetRoles']});
  const [createRole] = useMutation(CREATE_ROLE, {refetchQueries: ['GetRoles']});
  
  return {
    deleteRole: (id: string) => deleteRole({ variables: { id } }),
    updateRole: (id: string, name: string, level: number) => updateRole({ variables: { id, name, level } }),
    createRole: (name: string, level: number) => createRole({ variables: { name, level } }),
  };
}


