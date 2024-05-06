import styles from '../styles/ui/RegistrationForm.module.css';
import Button from '../components/common/Button';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { closeAllWindows, openLoginWindow } from '../slices/modalWindowSlice';
import { useForm } from 'react-hook-form';
import useCreateCompany from '../hooks/company/useCreateCompany';
import MiniSpinner from '../components/common/MiniSpinner';
import { CompanyFormData } from '../types/types';

function RegistrationForm() {
  const { isCreating, createCompany } = useCreateCompany();
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  function handleMyCompany(e: React.FormEvent) {
    e.preventDefault();
    dispatch(closeAllWindows());
    dispatch(openLoginWindow());
  }

  function handleOnSubmit(data: CompanyFormData) {
    const { email, password, companyName } = data;
    if (email && password && companyName)
      createCompany({ email, password, companyName });
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Create Company Account</h1>

        <img src='/icons/welcome.svg' alt='welcome image' draggable={false} />
      </div>

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.inputsBox}>
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor='company'>
                Company Name
                {errors.companyName?.message && (
                  <span>{errors.companyName?.message.toString()}</span>
                )}
              </label>

              <div className={styles.input}>
                <span>
                  <HiBuildingLibrary />
                </span>
                <input
                  className={
                    errors.companyName?.message ? styles.inputError : ''
                  }
                  id='company'
                  type='text'
                  placeholder='ex. Mindhub'
                  {...register('companyName', {
                    required: 'Fill in the field',
                    minLength: {
                      value: 5,
                      message: 'Minimum 5 characters',
                    },
                    validate: (value) =>
                      /[^\w.!@#$%^&*()_+-=]/g.test(value) ||
                      'Symbols and numbers are not allowed',
                  })}
                />
              </div>
            </div>

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
                />
              </div>
            </div>
          </div>

          <div>
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
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor='confirmPassword'>
                Confirm Password
                {errors.confirmPassword?.message && (
                  <span>{errors.confirmPassword?.message.toString()}</span>
                )}
              </label>

              <div className={styles.input}>
                <span className={styles.lockIcon}>
                  <IoMdLock />
                </span>
                <input
                  className={
                    errors.confirmPassword?.message ? styles.inputError : ''
                  }
                  id='confirmPassword'
                  type='password'
                  placeholder='Minimum 8 characters'
                  {...register('confirmPassword', {
                    required: 'Fill in the field',
                    minLength: {
                      value: 8,
                      message: 'Minimum 8 characters',
                    },
                    validate: (value) =>
                      value === getValues().password || 'Password mismatch',
                  })}
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
            <Button
              style='outline'
              handleClick={() => dispatch(closeAllWindows())}
            >
              Cancel
            </Button>
            <Button disabled={isCreating}>
              {isCreating ? <MiniSpinner /> : 'Create account'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
