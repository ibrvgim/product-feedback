import styles from '../styles/ui/LoginForm.module.css';
import Button from '../components/common/Button';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import {
  closeAllWindows,
  openRegisterWindow,
} from '../slices/modalWindowSlice';
import { useForm } from 'react-hook-form';
import { FormData } from '../types/types';
import useSigninCompany from '../hooks/company/useSigninCompany.ts';
import MiniSpinner from '../components/common/MiniSpinner';

function LoginForm() {
  const { isLogining, loginCompany } = useSigninCompany();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    dispatch(closeAllWindows());
    dispatch(openRegisterWindow());
  }

  function handleOnSubmit(data: FormData) {
    const { email, password } = data;
    if (email && password) loginCompany({ email, password });
    if (isLogining) dispatch(closeAllWindows());
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Login to Your Account</h1>

        <img src='/icons/login.svg' alt='welcome image' draggable={false} />
      </div>

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.inputsBox}>
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor='email'>
                E-mail
                {errors.email?.message && (
                  <span>{errors.email?.message.toString()}</span>
                )}
              </label>

              <div className={styles.input}>
                <span>
                  <IoMdMail />
                </span>
                <input
                  className={errors.email?.message ? styles.inputError : ''}
                  id='email'
                  type='email'
                  placeholder='ex. mindhub@company.com'
                  {...register('email', {
                    required: 'Fill in the field',
                    validate: (value) =>
                      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ||
                      'Invalid e-mail address',
                  })}
                  defaultValue='mindhub@company.com'
                />
              </div>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor='password'>
              Password
              {errors.password?.message && (
                <span>{errors.password?.message.toString()}</span>
              )}
            </label>

            <div className={styles.input}>
              <span className={styles.lockIcon}>
                <IoMdLock />
              </span>
              <input
                className={errors.password?.message ? styles.inputError : ''}
                id='password'
                type='password'
                placeholder='Minimum 8 characters'
                {...register('password', {
                  required: 'Fill in the field',
                  minLength: {
                    value: 8,
                    message: 'Minimum 8 characters',
                  },
                })}
                defaultValue='mindhub1703'
              />
            </div>
          </div>
        </div>

        <div className={styles.finalContainer}>
          <div className={styles.noAccount}>
            <p>Do not have an account yet?</p>
            <button onClick={handleRegister}>Register Company</button>
          </div>

          <div className={styles.buttonsContainer}>
            <div className={styles.cancelButton}>
              <Button
                style='outline'
                handleClick={() => dispatch(closeAllWindows())}
              >
                Cancel
              </Button>
            </div>

            <Button disabled={isLogining}>
              {isLogining ? <MiniSpinner /> : 'Continue'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
