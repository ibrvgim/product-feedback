import useGetCompany from '../../../hooks/company/useGetCompany';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import styles from '../../../styles/components/FeedbacksContainer.module.css';
import Pagination from '../../common/Pagination';
import FeedbackItem from './FeedbackItem';
// import FeedbacksEmpty from './FeedbacksEmpty';
import FeedbacksHeader from './FeedbacksHeader';

function FeedbacksContainer() {
  const { isPending } = useGetCompany();

  if (isPending) return <FullSpinnerPage />;

  return (
    <div className={styles.container}>
      <FeedbacksHeader />

      {/* <FeedbacksEmpty /> */}
      <div className={styles.feedbacksContainer}>
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />

        <Pagination />
      </div>
    </div>
  );
}

export default FeedbacksContainer;
