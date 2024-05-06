import styles from '../styles/ui/SettingsForm.module.css';
import Button from '../components/common/Button';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../slices/modalWindowSlice';
import { useForm } from 'react-hook-form';
import useUpdateCompany from '../hooks/company/useUpdateCompany';
import MiniSpinner from '../components/common/MiniSpinner';
import useGetCompany from '../hooks/company/useGetCompany';
import FullSpinnerPage from '../pages/FullSpinnerPage';

interface FormData {
  password?: string;
  companyName?: string;
}

function SettingsForm() {
  const { isPending, companyData } = useGetCompany();
  const { isUpdating, updateCompanyData } = useUpdateCompany();
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  if (!companyData?.user_metadata) return;
  const { companyName, email } = companyData.user_metadata;

  function handleClose() {
    dispatch(closeAllWindows());
  }

  function handleOnSubmit(data: FormData) {
    const { password, companyName } = data;
    if (password || companyName) updateCompanyData({ password, companyName });
    dispatch(closeAllWindows());
  }

  if (isPending) return <FullSpinnerPage />;

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Settings</h1>

        <img src='/icons/settings.svg' alt='settings image' draggable={false} />
      </div>

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.inputsBox}>
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor='company'>
                Change Company Name
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
                    minLength: {
                      value: 5,
                      message: 'Minimum 5 characters',
                    },
                    validate: (value) =>
                      /[^.!@#$%^&*()_+-=]/g.test(value) ||
                      'Symbols are not allowed',
                  })}
                  defaultValue={companyName}
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor='email' className={styles.emailLabel}>
                E-mail
              </label>

              <div className={styles.input}>
                <span>
                  <IoMdMail />
                </span>
                <input
                  id='email'
                  type='email'
                  defaultValue={email}
                  disabled={true}
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

        <div className={styles.buttonsContainer}>
          <Button style='outline' handleClick={handleClose}>
            Cancel
          </Button>
          <Button>{isUpdating ? <MiniSpinner /> : 'Save Changes'}</Button>
        </div>
      </form>
    </div>
  );
}

export default SettingsForm;
