import styles from '../../styles/components/VoteButton.module.css';
import { IoIosArrowUp } from 'react-icons/io';

interface Props {
  showNumber?: boolean;
  votes: string | number;
}

function VoteButton({ showNumber = true, votes }: Props) {
  return (
    <button className={`${styles.voteContainer}`}>
      {/* ${styles.voted} */}

      <span className={styles.icon}>
        <IoIosArrowUp />
      </span>
      {showNumber && <span className={styles.votesNumber}>{votes}</span>}
    </button>
  );
}

export default VoteButton;
