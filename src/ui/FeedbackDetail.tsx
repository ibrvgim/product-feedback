import styles from '../styles/ui/FeedbackDetail.module.css';
import Section from '../components/common/Section';
import GoBack from '../components/common/GoBack';
import FilterButton from '../components/common/FilterButton';
import Button from '../components/common/Button';
import { BiSolidEditAlt } from 'react-icons/bi';
import { IoTrash } from 'react-icons/io5';
import VoteButton from '../components/common/VoteButton';
import CommentsBox from '../components/pages/feedbackPage/CommentsBox';
import AddComment from '../components/pages/feedbackPage/AddComment';

function FeedbackDetail() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.goBackContainer}>
          <GoBack />

          <div className={styles.buttonsContainer}>
            <Button style='edit'>
              <BiSolidEditAlt />
            </Button>
            <Button style='delete'>
              <IoTrash />
            </Button>
          </div>
        </div>

        <div className={styles.feedbackContent}>
          <div>
            <FilterButton fixed='true'>Feature</FilterButton>
            <p>Add a dark mode option</p>

            <div className={styles.voteContainer}>
              <VoteButton showNumber={false} />
            </div>
          </div>

          <p>
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
        </div>

        <div className={styles.commentsContainer}>
          <CommentsBox />
        </div>

        <div className={styles.addComments}>
          <AddComment />
        </div>
      </div>
    </Section>
  );
}

export default FeedbackDetail;
