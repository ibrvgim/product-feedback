import styles from '../../../styles/components/FeedbacksContainer.module.css';
import { useParams } from 'react-router-dom';
import useGetCompany from '../../../hooks/company/useGetCompany';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import Pagination from '../../common/Pagination';
import FeedbacksHeader from './FeedbacksHeader';
import FeedbackItem from './FeedbackItem';
import FeedbacksEmpty from './FeedbacksEmpty';
import { useState } from 'react';
import { ITEM_PER_PAGE } from '../../../constants/constants';
import { useSelector } from 'react-redux';
import { getFeedbacksByFilter } from '../../../utilities/getFeedbacksByFilter';
import { FeedbackObject, States } from '../../../types/types';
import useResponsiveDesign from '../../../hooks/other/useResponsiveDesign';

function FeedbacksContainer() {
  const [pagination, setPagination] = useState(1);
  const { isPending } = useGetCompany();
  const { isPending: isGettingFeedback, getFeedbacks } = useGetFeedbacks();
  const { id } = useParams();
  const sortBy = useSelector((state: States) => state.sortBy.value);
  const filter = useSelector((state: States) => state.sortBy.filter);
  const { smallScreen } = useResponsiveDesign();

  if (!id || !getFeedbacks) return;
  const allFeedbacks = getFeedbacksByFilter(id, getFeedbacks, filter) || [];

  let managePaginationMethod = smallScreen
    ? allFeedbacks?.sort((a, b) => Number(b.upvotes) - Number(a.upvotes))
    : allFeedbacks
        ?.sort((a, b) => Number(b.upvotes) - Number(a.upvotes))
        .slice((pagination - 1) * ITEM_PER_PAGE, pagination * ITEM_PER_PAGE);

  if (sortBy.toLowerCase() === 'least votes') {
    managePaginationMethod = smallScreen
      ? allFeedbacks?.sort((a, b) => Number(a.upvotes) - Number(b.upvotes))
      : allFeedbacks
          ?.sort((a, b) => Number(a.upvotes) - Number(b.upvotes))
          .slice((pagination - 1) * ITEM_PER_PAGE, pagination * ITEM_PER_PAGE);
  }

  const pagesNumber = Math.ceil(allFeedbacks?.length / ITEM_PER_PAGE);

  function handleNextPage() {
    if (pagesNumber > pagination) setPagination((page) => (page += 1));
  }

  function handlePreviousPage() {
    if (pagination > 1) setPagination((page) => (page -= 1));
  }

  if (isPending || isGettingFeedback) return <FullSpinnerPage />;

  return (
    <div className={styles.container}>
      <FeedbacksHeader />

      {managePaginationMethod?.length === 0 ? (
        <FeedbacksEmpty />
      ) : (
        <div className={styles.feedbacksContainer}>
          {managePaginationMethod?.map((item: FeedbackObject) => (
            <FeedbackItem
              key={item.id}
              id={item.id}
              companyID={id}
              title={item.title}
              description={item.description}
              commentsNumber={item?.comments?.length}
              category={item.category}
              votes={item.upvotes}
            />
          ))}

          {allFeedbacks.length > ITEM_PER_PAGE && !smallScreen && (
            <div className={styles.paginationContainer}>
              <Pagination
                pagesNumber={pagesNumber}
                pagination={pagination}
                setPagination={setPagination}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FeedbacksContainer;
