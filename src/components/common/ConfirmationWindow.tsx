import styles from '../../styles/components/ConfirmationWindow.module.css';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../../slices/modalWindowSlice';
import useSignoutCompany from '../../hooks/company/useSignoutCompany';
import MiniSpinner from './MiniSpinner';

function ConfirmationWindow() {
  const dispatch = useDispatch();
  const { isSigningout, signout } = useSignoutCompany();

  function handleSignout() {
    signout();
  }

  return (
    <div className={styles.container}>
      <p>
        Are you sure you want to <span>sign out</span>?
      </p>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.cancelButton}
          onClick={() => dispatch(closeAllWindows())}
        >
          Cancel
        </button>
        <button
          className={styles.exitButton}
          onClick={handleSignout}
          disabled={isSigningout}
        >
          {isSigningout ? <MiniSpinner style='var(--color-red)' /> : 'Sign out'}
        </button>
      </div>
    </div>
  );
}

export default ConfirmationWindow;
