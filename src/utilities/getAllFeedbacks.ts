interface FeedbackItem {
  company_id: string;
  feedbacks: {
    feedbacks: [];
  };
}

export function getAllFeedbacks(id: string, getFeedbacks: FeedbackItem[]) {
  if (!id || !getFeedbacks) return;
  const getID = id?.slice(-36);

  const allFeedbacks = getFeedbacks?.find((item) => item.company_id === getID)
    ?.feedbacks.feedbacks;

  return allFeedbacks || [];
}
