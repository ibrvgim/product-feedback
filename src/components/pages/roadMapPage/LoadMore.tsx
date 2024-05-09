import styles from '../../../styles/components/LoadMore.module.css';
import { IoIosArrowDown } from 'react-icons/io';

function LoadMore({ handleLoadMore }: { handleLoadMore: () => void }) {
  return (
    <button className={styles.button} onClick={handleLoadMore}>
      <IoIosArrowDown className={styles.icon} />
    </button>
  );
}

export default LoadMore;
