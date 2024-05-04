import styles from '../../styles/components/ThemeMode.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { IoSunny, IoMoon } from 'react-icons/io5';
import { DarkMode } from '../../types/types';

function ThemeMode() {
  const { theme, handleTheme }: DarkMode = useDarkMode();

  return (
    <div className={styles.container}>
      <span className={styles.sun}>
        <IoSunny />
      </span>

      <div>
        <input
          className={styles.input}
          type='checkbox'
          id='switch'
          checked={theme}
          onChange={handleTheme}
        />
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
