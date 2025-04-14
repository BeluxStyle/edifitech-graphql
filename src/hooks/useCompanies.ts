import { useQuery, useMutation } from '@apollo/client';
import { GET_COMPANIES } from '../graphql/queries/companies';
import { DELETE_COMPANY, UPDATE_COMPANY, CREATE_COMPANY, REMOVE_USER_FROM_COMPANY } from '../graphql/mutations/companies';
import { CompanyInput } from '../types';

export function useCompanies() {
  
  const { data, loading, error, refetch } = useQuery(GET_COMPANIES, {fetchPolicy: "cache-and-network"
  });

  return {
    companies: data?.listCompanies || [],
    totalCount: data?.listCompanies.length,
    loading,
    error,
    refetch,
    
  };
}

export function useCompanyActions() {
  const [deleteCompany] = useMutation(DELETE_COMPANY, {refetchQueries: ['GetCompanies']});
  const [updateCompany] = useMutation(UPDATE_COMPANY, {refetchQueries: ['GetCompanies']});
  const [createCompany] = useMutation(CREATE_COMPANY, {refetchQueries: ['GetCompanies']});
  const [removeUserFromCompany] = useMutation(REMOVE_USER_FROM_COMPANY, {refetchQueries: ['GetUsers','GetCompanies']});
  
  return {
    deleteCompany: (id: string) => deleteCompany({ variables: { id } }),
    updateCompany: (id: string, input: CompanyInput) => updateCompany({ variables: { id, input } }),
    createCompany: (input: CompanyInput) => createCompany({ variables: { input } }),
    removeUserFromCompany:(userId: string, companyId: string) => removeUserFromCompany({ variables: { userId, companyId } }),
  };
}


