import styles from '../../../styles/components/FeedbacksHeader.module.css';
import Button from '../../common/Button';
import { FaPlus } from 'react-icons/fa6';
import Select from '../../common/Select';

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
          <Select
            options={[
              'Most votes',
              'Least votes',
              'Most Comments',
              'Least Comments',
            ]}
          />
        </div>
      </div>

      <Button path='/feedback/form'>
        <FaPlus style={{ fontSize: '1.2rem' }} /> Add Feedback
      </Button>
    </div>
  );
}

export default FeedbacksHeader;
