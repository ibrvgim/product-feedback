import { useQuery } from '@tanstack/react-query';
import { getCompany } from '../../data/company/companyAPI';

function useGetCompany() {
  const { isPending, data: companyData } = useQuery({
    queryKey: ['company'],
    queryFn: getCompany,
  });

  return {
    isPending,
    companyData,
    isAuthenticated: companyData?.role === 'authenticated',
  };
}

export default useGetCompany;
