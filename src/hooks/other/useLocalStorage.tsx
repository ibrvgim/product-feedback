import { useState, useEffect } from 'react';

interface UserData {
  firstName: string;
  lastName: string;
  nickname: string;
}

export function useLocalStorageState(
  initialState: boolean | UserData,
  key: string
) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
