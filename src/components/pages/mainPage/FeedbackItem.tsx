import styles from '../../../styles/components/FeedbackItem.module.css';
import FilterButton from '../../common/FilterButton';
import { FaRegComments } from 'react-icons/fa6';
import VoteButton from '../../common/VoteButton';

function FeedbackItem() {
  return (
    <div className={styles.container}>
      <VoteButton />

      <div className={styles.interactionContainer}>
        <div className={styles.feedbackDescription}>
          <h3>Add a dark mode option</h3>
          <p>
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
          <FilterButton fixed='true'>Enhancement</FilterButton>
        </div>

        <div className={styles.feedbackComments}>
          <span className={styles.commentIcon}>
            <FaRegComments />
          </span>
          <span>17</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
