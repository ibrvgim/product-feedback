import styles from '../../../styles/components/LoadMore.module.css';
import { IoIosArrowDown } from 'react-icons/io';

function LoadMore() {
  return (
    <button className={styles.button}>
      <IoIosArrowDown className={styles.icon} />
    </button>
  );
}

export default LoadMore;
