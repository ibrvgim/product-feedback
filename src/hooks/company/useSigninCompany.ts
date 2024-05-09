import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginMyCompany } from '../../data/company/companyAPI';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../../slices/modalWindowSlice';
import { handleID } from '../../utilities/handleID';

function useSigninCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isPending: isLogining, mutate: loginCompany } = useMutation({
    mutationFn: loginMyCompany,

    onSuccess: (data) => {
      const { id } = handleID(data);

      dispatch(closeAllWindows());
      navigate(`/${id}`, {
        replace: true,
      });
      queryClient.invalidateQueries({ queryKey: ['company'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLogining, loginCompany };
}

export default useSigninCompany;
