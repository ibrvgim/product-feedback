import styles from '../../../styles/components/FeedbacksEmpty.module.css';
import Button from '../../common/Button';
import { RiStickyNoteAddFill } from 'react-icons/ri';

function FeedbacksEmpty() {
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

      <Button path='/feedback/form'>
        <RiStickyNoteAddFill style={{ fontSize: '2rem' }} />
      </Button>
    </div>
  );
}

export default FeedbacksEmpty;
