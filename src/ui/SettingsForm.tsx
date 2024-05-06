import styles from '../styles/ui/SettingsForm.module.css';
import Button from '../components/common/Button';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { toggleSettingWindow } from '../slices/modalWindowSlice';

function SettingsForm() {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(toggleSettingWindow());
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Settings</h1>

        <img src='/icons/settings.svg' alt='settings image' draggable={false} />
      </div>

      <form>
        <div className={styles.inputsBox}>
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor='company'>
                Change Company Name {false && <span>Fill in the area</span>}
              </label>

              <div className={styles.input}>
                <span>
                  <HiBuildingLibrary />
                </span>
                <input id='company' type='text' placeholder='ex. Mindhub' />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor='email' className={styles.emailLabel}>
                E-mail {false && <span>Fill in the area</span>}
              </label>

              <div className={styles.input}>
                <span>
                  <IoMdMail />
                </span>
                <input
                  id='email'
                  type='email'
                  defaultValue='john.smith@gmail.com'
                  disabled={true}
                />
              </div>
            </div>
          </div>

          <div>
            <div className={styles.inputContainer}>
              <label htmlFor='password'>
                Change Password {false && <span>Fill in the area</span>}
              </label>

              <div className={styles.input}>
                <span className={styles.lockIcon}>
                  <IoMdLock />
                </span>
                <input
                  id='password'
                  type='password'
                  placeholder='Minimum 8 characters'
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor='confirmPassword'>
                Confirm Password {false && <span>Fill in the area</span>}
              </label>

              <div className={styles.input}>
                <span className={styles.lockIcon}>
                  <IoMdLock />
                </span>
                <input
                  id='confirmPassword'
                  type='password'
                  placeholder='Minimum 8 characters'
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <Button style='outline' handleClick={handleClose}>
            Cancel
          </Button>
          <Button>Save Changes</Button>
        </div>
      </form>
    </div>
  );
}

export default SettingsForm;
