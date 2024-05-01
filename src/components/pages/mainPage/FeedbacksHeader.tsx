import styles from '../../../styles/components/FeedbacksHeader.module.css';
import Button from '../../common/Button';
import { FaPlus } from 'react-icons/fa6';

function FeedbacksHeader() {
  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.icon}
          src='/icons/idea.png'
          alt='idea icon'
          draggable={false}
        />
        <h3>8 Suggestions</h3>
        <div className={styles.sort}>
          <span>Sort by:</span>
          <select>
            <option>most</option>
            <option>least</option>
          </select>
        </div>
      </div>

      <Button>
        <FaPlus style={{ fontSize: '1.3rem' }} /> Add Feedback
      </Button>
    </div>
  );
}

export default FeedbacksHeader;
