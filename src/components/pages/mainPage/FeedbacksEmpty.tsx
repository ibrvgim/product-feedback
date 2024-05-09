import { useParams } from 'react-router-dom';
import styles from '../../../styles/components/FeedbacksEmpty.module.css';
import Button from '../../common/Button';
import { RiStickyNoteAddFill } from 'react-icons/ri';

function FeedbacksEmpty() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <div>
        <img
          src='/icons/no_feedback.svg'
          alt='blanks icon'
          className={styles.icon}
          draggable={false}
        />
        <h1>There is no feedback yet!</h1>
        <p>Got a suggestion? Found a bug that needs to be fixed?</p>
        <p>Just share with us.</p>
      </div>

      <Button path={`/feedback/form?company=${id}`}>
        <RiStickyNoteAddFill style={{ fontSize: '2rem', margin: '0 4rem' }} />
      </Button>
    </div>
  );
}

export default FeedbacksEmpty;
