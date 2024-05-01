import styles from '../../../styles/components/FeedbacksContainer.module.css';
import Pagination from '../../common/Pagination';
import FeedbackItem from './FeedbackItem';
// import FeedbacksEmpty from './FeedbacksEmpty';
import FeedbacksHeader from './FeedbacksHeader';

function FeedbacksContainer() {
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
