import { useDispatch } from 'react-redux';
import styles from '../../styles/components/ConfirmationWindow.module.css';
import { toggleLogoutWindow } from '../../slices/modalWindowSlice';

function ConfirmationWindow() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p>
        Are you sure you want to <span>sign out</span>?
      </p>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.cancelButton}
          onClick={() => dispatch(toggleLogoutWindow())}
        >
          Cancel
        </button>
        <button className={styles.exitButton}>Sign out</button>
      </div>
    </div>
  );
}

export default ConfirmationWindow;
