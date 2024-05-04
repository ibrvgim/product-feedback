import styles from '../../styles/components/ModalWindow.module.css';
import { useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Children } from '../../types/types';

function ModalWindow({ children }: Children) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.close}>
        <IoIosClose />
      </button>

      {children}
    </div>
  );
}

export default ModalWindow;
