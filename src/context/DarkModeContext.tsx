import { createContext, useContext, useEffect } from 'react';
import { Children } from '../types/types';
import { useLocalStorageState } from '../hooks/other/useLocalStorage';

const DarkModeContext = createContext({});

const userDefaultTheme = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

function DarkModeProvider({ children }: Children) {
  const [theme, setTheme] = useLocalStorageState(userDefaultTheme, 'theme');

  function handleTheme() {
    setTheme((theme: boolean) => !theme);
  }

  useEffect(() => {
    theme
      ? document.documentElement.classList.add('dark-mode')
      : document.documentElement.classList.remove('dark-mode');
  }, [theme]);

  const values = {
    theme,
    handleTheme,
  };

  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) throw new Error('Context out of the range.');

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
