import styles from '../../styles/components/GoBack.module.css';
import { IoIosArrowBack } from 'react-icons/io';

function GoBack() {
  return (
    <button className={styles.button}>
      <span>
        <IoIosArrowBack />
      </span>
      Go Back
    </button>
  );
}

export default GoBack;
