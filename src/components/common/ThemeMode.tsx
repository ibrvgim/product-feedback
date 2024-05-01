import styles from '../../styles/components/ThemeMode.module.css';
import { IoSunny, IoMoon } from 'react-icons/io5';

function ThemeMode() {
  return (
    <div className={styles.container}>
      <span className={styles.sun}>
        <IoSunny />
      </span>

      <div>
        <input className={styles.input} type='checkbox' id='switch' />
        <label className={styles.label} htmlFor='switch'>
          &nbsp;
        </label>
      </div>

      <span className={styles.moon}>
        <IoMoon />
      </span>
    </div>
  );
}

export default ThemeMode;
