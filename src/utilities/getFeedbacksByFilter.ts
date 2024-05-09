import { FeedbackObject } from '../types/types';

interface FeedbackItem {
  company_id: string;
  feedbacks: {
    feedbacks: FeedbackObject[];
  };
}

export function getFeedbacksByFilter(
  id: string,
  getFeedbacks: FeedbackItem[],
  filter: string = 'all'
) {
  if (!id || !getFeedbacks) return;
  const getID = id?.slice(-36);

  let allFeedbacks;

  if (filter.toLowerCase() === 'all')
    allFeedbacks = getFeedbacks?.find((item) => item.company_id === getID)
      ?.feedbacks.feedbacks;

  if (filter.toLowerCase() === 'ui')
    allFeedbacks = getFeedbacks
      ?.find((item) => item.company_id === getID)
      ?.feedbacks.feedbacks.filter(
        (item) => item.category.toLowerCase() === 'ui'
      );

  if (filter.toLowerCase() === 'ux')
    allFeedbacks = getFeedbacks
      ?.find((item) => item.company_id === getID)
      ?.feedbacks.feedbacks.filter(
        (item) => item.category.toLowerCase() === 'ux'
      );

  if (filter.toLowerCase() === 'enhancement')
    allFeedbacks = getFeedbacks
      ?.find((item) => item.company_id === getID)
      ?.feedbacks.feedbacks.filter(
        (item) => item.category.toLowerCase() === 'enhancement'
      );

  if (filter.toLowerCase() === 'feature')
    allFeedbacks = getFeedbacks
      ?.find((item) => item.company_id === getID)
      ?.feedbacks.feedbacks.filter(
        (item) => item.category.toLowerCase() === 'feature'
      );

  if (filter.toLowerCase() === 'bug')
    allFeedbacks = getFeedbacks
      ?.find((item) => item.company_id === getID)
      ?.feedbacks.feedbacks.filter(
        (item) => item.category.toLowerCase() === 'bug'
      );

  return allFeedbacks || [];
}
