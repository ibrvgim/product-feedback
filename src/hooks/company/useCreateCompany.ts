import { useMutation } from '@tanstack/react-query';
import { createCompany as createCompanyAPI } from '../../data/company/companyAPI';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../../slices/modalWindowSlice';
import useInitialStoring from '../feedbacks/useInitialStoring';
import { handleID } from '../../utilities/handleID';

function useCreateCompany() {
  const { createInitialData } = useInitialStoring();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isPending: isCreating, mutate: createCompany } = useMutation({
    mutationFn: createCompanyAPI,

    onSuccess: (data) => {
      // @ts-expect-error complicated type
      const { id, companyId, companyName } = handleID(data);

      dispatch(closeAllWindows());
      toast.success('Account created successfully!');
      navigate(`/${id}`, {
        replace: true,
      });

      if (companyId) createInitialData({ companyName, companyId });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createCompany };
}

export default useCreateCompany;
