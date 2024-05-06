import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCompany } from '../../data/company/companyAPI';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../../slices/modalWindowSlice';
import { useNavigate } from 'react-router-dom';
import useUpdateCompanyameFeedbacks from '../feedbacks/useUpdateCompanyName';
import { handleID } from '../../utilities/handleID';

function useUpdateCompany() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { updateNameInFeedback } = useUpdateCompanyameFeedbacks();

  const { isPending: isUpdating, mutate: updateCompanyData } = useMutation({
    mutationFn: updateCompany,

    onSuccess: (data) => {
      const { companyId, companyName, id } = handleID(data);

      dispatch(closeAllWindows());
      toast.success('Updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['company'] });
      navigate(`/${id}`, {
        replace: true,
      });

      updateNameInFeedback({ companyId, companyName });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateCompanyData };
}

export default useUpdateCompany;
