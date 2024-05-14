import { FeedbacksRoot } from '../types/types';

export function getAllFeedbacks(id: string, getFeedbacks: FeedbacksRoot[]) {
  const getID = id.slice(-36);

  const allFeedbacks = getFeedbacks.find((item) => item.company_id === getID)
    ?.feedbacks.feedbacks;

  return allFeedbacks;
}
