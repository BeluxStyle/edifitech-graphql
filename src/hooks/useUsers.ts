import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, GET_ME, GET_MY_DEVICES } from '../graphql/queries/users';
import { DELETE_USER, UPDATE_USER, CREATE_USER, CHANGE_PASSWORD, CHECK_PASSWORD, REGISTER_DEVICE, UNREGISTER_DEVICE } from '../graphql/mutations/users';
import { RegisterDeviceInput } from 'types';


export function useUsers() {
  
  const { data, loading, error, refetch } = useQuery(GET_USERS, {fetchPolicy: "cache-and-network"
  });

  return {
    users: data?.listUsers || [],
    totalCount: data?.listUsers.length,
    loading,
    error,
    refetch,
    
  };
}

export function useMe() {
  
  const { data, loading, error, refetch } = useQuery(GET_ME, {fetchPolicy: "cache-and-network"
  });

  return {
    me: data?.me || [],
    loading,
    error,
    refetch,
    
  };
}

export function useDevice() {
  
  const { data, loading, error, refetch } = useQuery(GET_MY_DEVICES, {fetchPolicy: "cache-and-network"
  });

  return {
    myDevices: data?.myDevices || [],
    loading,
    error,
    refetch,
    
  };
}

export function useUserActions() {
  const [deleteUser] = useMutation(DELETE_USER, {refetchQueries: ['GetUsers','GetMe']});
  const [updateUser] = useMutation(UPDATE_USER, {refetchQueries: ['GetUsers','GetMe']});
  const [createUser] = useMutation(CREATE_USER, {refetchQueries: ['GetUsers','GetMe']});
  const [changePassword] = useMutation(CHANGE_PASSWORD, {refetchQueries: ['GetUsers','GetMe']});
  const [checkPassword] = useMutation(CHECK_PASSWORD, {refetchQueries: ['GetUsers','GetMe']});
  const [registerDevice] = useMutation(REGISTER_DEVICE, {refetchQueries: ['GetMyDevices']})
  const [unregisterDevice] = useMutation(UNREGISTER_DEVICE, {refetchQueries: ['GetMyDevices']})
  

  
  return {
    deleteUser: (id: string) => deleteUser({ variables: { id } }),
    updateUser: (id: string, name: string, email: string, roleId: string) => updateUser({ variables: { id, name, email, roleId } }),
    createUser: (name: string, email: string, password: string) => createUser({ variables: { name, email, password } }),
    changePassword: (id: string, password: string) => changePassword({ variables: { id, password } }),
    checkPassword: (id: string, password:string) => checkPassword({ variables: { id, password } }),
    registerDevice: (input: RegisterDeviceInput) => registerDevice({ variables: { input } }),
    unregisterDevice: (id: string) => unregisterDevice({ variables: { id } })
  };
}


