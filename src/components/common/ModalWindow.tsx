import styles from '../../styles/components/ModalWindow.module.css';
import { useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';

interface Props {
  children: React.ReactNode;
  closeOption?: boolean;
}

function ModalWindow({ children, closeOption = true }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.container}>
      {closeOption && (
        <button className={styles.close}>
          <IoIosClose />
        </button>
      )}

      {children}
    </div>
  );
}

export default ModalWindow;
