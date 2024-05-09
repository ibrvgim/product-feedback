import styles from '../../styles/components/Pagination.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  pagination: number;
  pagesNumber: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}
function Pagination({
  setPagination,
  pagination,
  pagesNumber,
  handleNextPage,
  handlePreviousPage,
}: Props) {
  return (
    <div className={styles.container}>
      <button className={styles.previousButton} onClick={handlePreviousPage}>
        <IoIosArrowBack className={styles.icon} />
      </button>

      <div className={styles.pagesContainer}>
        {Array.from({ length: pagesNumber }, (_, item) => item).map((item) => (
          <button
            className={pagination === item + 1 ? styles.active : ''}
            key={item}
            onClick={() => setPagination(item + 1)}
          >
            {item + 1}
          </button>
        ))}
      </div>

      <button className={styles.nextButton} onClick={handleNextPage}>
        <IoIosArrowForward className={styles.icon} />
      </button>
    </div>
  );
}

export default Pagination;
