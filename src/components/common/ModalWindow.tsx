import styles from '../../styles/components/ModalWindow.module.css';
import { useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../../slices/modalWindowSlice';

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

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {closeOption && (
        <button
          className={styles.close}
          onClick={() => dispatch(closeAllWindows())}
        >
          <IoIosClose />
        </button>
      )}

      {children}
    </div>
  );
}

export default ModalWindow;
