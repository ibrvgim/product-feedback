import { FeedbackObject } from '../types/types';

export function getFeedbacksByCategory(
  category: string,
  allFeedbacks: FeedbackObject[]
) {
  return allFeedbacks?.filter(
    (item: { status: string }) => item?.status.toLowerCase() === category
  );
}
