import styles from '../../styles/components/Button.module.css';
import { Children } from '../../types/types';

function Button({ children }: Children) {
  return (
    <button className={`${styles.button} ${styles.primary}`}>{children}</button>
  );
}

export default Button;
