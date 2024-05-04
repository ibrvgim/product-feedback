import styles from '../../styles/components/SmallDarkModeButton.module.css';

import { useDarkMode } from '../../context/DarkModeContext';
import { DarkMode } from '../../types/types';
import { IoSunny, IoMoon } from 'react-icons/io5';

function SmallDarkModeButton() {
  const { theme, handleTheme }: DarkMode = useDarkMode();

  return (
    <button className={styles.theme} onClick={handleTheme}>
      {theme ? (
        <IoMoon className={styles.moon} />
      ) : (
        <IoSunny className={styles.sun} />
      )}
    </button>
  );
}

export default SmallDarkModeButton;
