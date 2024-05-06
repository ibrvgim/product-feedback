import { useMutation } from '@tanstack/react-query';
import { initialDataStoring } from '../../data/feedback/feedbackAPI';
import toast from 'react-hot-toast';

function useInitialStoring() {
  const { mutate: createInitialData } = useMutation({
    mutationFn: initialDataStoring,

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createInitialData };
}

export default useInitialStoring;
