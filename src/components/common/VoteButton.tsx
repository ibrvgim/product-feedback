import styles from '../../styles/components/VoteButton.module.css';
import { IoIosArrowUp } from 'react-icons/io';

interface Props {
  showNumber?: boolean;
}

function VoteButton({ showNumber = true }: Props) {
  return (
    <button className={`${styles.voteContainer}`}>
      {/* ${styles.voted} */}

      <span className={styles.icon}>
        <IoIosArrowUp />
      </span>
      {showNumber && <span className={styles.votesNumber}>112</span>}
    </button>
  );
}

export default VoteButton;
