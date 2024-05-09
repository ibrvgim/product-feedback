import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFeedback as createFeedbackAPI } from '../../data/feedback/feedbackAPI';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function useDeleteFeedback() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteFeedback } = useMutation({
    mutationFn: createFeedbackAPI,

    onSuccess: () => {
      navigate(-1);
      toast.success('Feedback deleted successfully!');
      queryClient.invalidateQueries({ queryKey: ['feedbacks'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeleting, deleteFeedback };
}

export default useDeleteFeedback;
