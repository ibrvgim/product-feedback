import styles from '../styles/ui/LoginForm.module.css';
import Button from '../components/common/Button';
import { IoMdMail, IoMdLock } from 'react-icons/io';

function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Login to Your Account</h1>

        <img src='/icons/login.svg' alt='welcome image' draggable={false} />
      </div>

      <form>
        <div className={styles.inputsBox}>
          <div>
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
        </div>

        <div className={styles.finalContainer}>
          <div className={styles.noAccount}>
            <p>Do not have an account yet?</p>
            <button>Register Company</button>
          </div>

          <div className={styles.buttonsContainer}>
            <Button style='outline'>Cancel</Button>
            <Button>Continue</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
