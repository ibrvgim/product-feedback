interface ItemType {
  status: string;
}

export function getFeedbacksByCategory(
  category: string,
  allFeedbacks: ItemType[]
) {
  return allFeedbacks?.filter(
    (item: { status: string }) => item?.status.toLowerCase() === category
  );
}
