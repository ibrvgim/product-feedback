import styles from '../../styles/components/Pagination.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.previousButton}>
        <IoIosArrowBack className={styles.icon} />
      </button>

      <div className={styles.pagesContainer}>
        <button className={styles.active}>1</button>
        <button>2</button>
        <button>3</button>
      </div>

      <button className={styles.nextButton}>
        <IoIosArrowForward className={styles.icon} />
      </button>
    </div>
  );
}

export default Pagination;
