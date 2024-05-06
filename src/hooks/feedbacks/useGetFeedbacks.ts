import { useQuery } from '@tanstack/react-query';
import { getFeedbacks as getFeedbacksAPI } from '../../data/feedback/feedbackAPI';

function useGetFeedbacks() {
  const { isPending, data: getFeedbacks } = useQuery({
    queryKey: ['feedbacks'],
    queryFn: getFeedbacksAPI,
  });

  return { isPending, getFeedbacks };
}

export default useGetFeedbacks;
