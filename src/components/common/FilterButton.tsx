import styles from '../../styles/components/FilterButton.module.css';
import { Children } from '../../types/types';

function FilterButton({ children }: Children) {
  return <button className={`${styles.button}`}>{children}</button>;
}

export default FilterButton;
