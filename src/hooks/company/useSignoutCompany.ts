import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logoutCompany } from '../../data/company/companyAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../../slices/modalWindowSlice';

function useSignoutCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isPending: isSigningout, mutate: signout } = useMutation({
    mutationFn: logoutCompany,

    onSuccess: () => {
      navigate('/', { replace: true });
      dispatch(closeAllWindows());
      queryClient.invalidateQueries({ queryKey: ['company'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isSigningout, signout };
}

export default useSignoutCompany;
