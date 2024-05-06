import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCompanyNameInFeedbacks } from '../../data/feedback/feedbackAPI';
import toast from 'react-hot-toast';

function useUpdateCompanyameFeedbacks() {
  const queryClient = useQueryClient();

  const { mutate: updateNameInFeedback } = useMutation({
    mutationFn: updateCompanyNameInFeedbacks,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedbacks'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateNameInFeedback };
}

export default useUpdateCompanyameFeedbacks;
