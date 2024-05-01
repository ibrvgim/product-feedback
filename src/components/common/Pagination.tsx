import styles from '../../styles/components/Pagination.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination() {
  return (
    <div className={styles.container}>
      <button>
        <IoIosArrowBack />
      </button>

      <input type='text' value={1} />

      <button>
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
