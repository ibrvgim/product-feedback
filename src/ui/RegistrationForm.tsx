import styles from '../styles/ui/RegistrationForm.module.css';
import Button from '../components/common/Button';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { closeAllWindows, toggleLoginWindow } from '../slices/modalWindowSlice';

function RegistrationForm() {
  const dispatch = useDispatch();

  function handleMyCompany(e: React.FormEvent) {
    e.preventDefault();
    dispatch(closeAllWindows());
    dispatch(toggleLoginWindow());
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Create Company Account</h1>

        <img src='/icons/welcome.svg' alt='welcome image' draggable={false} />
      </div>

      <form>
        <div className={styles.inputsBox}>
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor='company'>
                Company Name {false && <span>Fill in the area</span>}
              </label>

              <div className={styles.input}>
                <span>
                  <HiBuildingLibrary />
                </span>
                <input id='company' type='text' placeholder='ex. Mindhub' />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor='email'>
                E-mail {false && <span>Fill in the area</span>}
              </label>

              <div className={styles.input}>
                <span>
                  <IoMdMail />
                </span>
                <input
                  id='email'
                  type='email'
                  placeholder='ex. mindhub@company.com'
                />
              </div>
            </div>
          </div>

          <div>
            <div className={styles.inputContainer}>
              <label htmlFor='password'>
                Password {false && <span>Fill in the area</span>}
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

        <div className={styles.finalContainer}>
          <div className={styles.accountExist}>
            <p>Already have an account?</p>
            <button onClick={handleMyCompany}>My Company</button>
          </div>

          <div className={styles.buttonsContainer}>
            <Button style='outline'>Cancel</Button>
            <Button>Create account</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
