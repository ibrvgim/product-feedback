import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFeedback as createFeedbackAPI } from '../../data/feedback/feedbackAPI';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

function useCreateFeedback() {
  const navigate = useNavigate();
  const [seacrhParams] = useSearchParams();
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createFeedback } = useMutation({
    mutationFn: createFeedbackAPI,

    onSuccess: (data) => {
      const companyID = seacrhParams.get('company');
      const currentSubmitted = data[0]?.feedbacks.feedbacks[0]?.id;

      navigate(`/feedback/${currentSubmitted}?company=${companyID}`);
      toast.success('Feedback created successfully!');
      queryClient.invalidateQueries({ queryKey: ['feedbacks'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createFeedback };
}

export default useCreateFeedback;

export function useAddComment() {
  const queryClient = useQueryClient();

  const { isPending: isPosting, mutate: postComment } = useMutation({
    mutationFn: createFeedbackAPI,

    onSuccess: () => {
      toast.success('Feedback created successfully!');
      queryClient.invalidateQueries({ queryKey: ['feedbacks'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPosting, postComment };
}
