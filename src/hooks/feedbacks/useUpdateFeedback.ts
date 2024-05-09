import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFeedback as createFeedbackAPI } from '../../data/feedback/feedbackAPI';
import toast from 'react-hot-toast';

function useUpdateFeedback() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateFeedback } = useMutation({
    mutationFn: createFeedbackAPI,

    onSuccess: () => {
      toast.success('Feedback updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['feedbacks'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateFeedback };
}

export default useUpdateFeedback;
