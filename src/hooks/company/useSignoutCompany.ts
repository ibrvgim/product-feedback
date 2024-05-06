import { useMutation } from '@tanstack/react-query';
import { logoutCompany } from '../../data/company/companyAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function useSignoutCompany() {
  const navigate = useNavigate();

  const { isPending: isSigningout, mutate: signout } = useMutation({
    mutationFn: logoutCompany,

    onSuccess: () => {
      navigate('/', { replace: true });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isSigningout, signout };
}

export default useSignoutCompany;
