import styles from '../styles/ui/UserDataForm.module.css';
import Button from '../components/common/Button';
import { FiAtSign } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../slices/modalWindowSlice';
import useGetCompany from '../hooks/company/useGetCompany';
import FullSpinnerPage from '../pages/FullSpinnerPage';
import { useParams, useSearchParams } from 'react-router-dom';
import { getRandomAvatar } from '../utilities/helpers';

interface Data {
  firstName?: string;
  lastName?: string;
  nickname?: string;
}

function UserDataForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const { isPending, isAuthenticated, companyData } = useGetCompany();
  const avatar = getRandomAvatar();
  const [searchParams] = useSearchParams();
  const getID = searchParams.get('company');
  const { id } = useParams();
  const matchPage =
    getID?.slice(-36) === companyData?.id || id?.slice(-36) === companyData?.id;
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user !== null) {
      JSON.parse(user);
    }

    if (user || (isAuthenticated && matchPage)) dispatch(closeAllWindows());
  }, [dispatch, user, isAuthenticated, matchPage]);

  function onSubmit(data: Data) {
    localStorage.setItem(
      'user',
      JSON.stringify({ ...data, image: avatar, votedFeedbacks: [] })
    );
    location.reload();
  }

  if (isPending) return <FullSpinnerPage />;

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Personal Information</h1>
        <p>To continue, you must fill out this form.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='firstName'>
            First Name
            {errors?.firstName?.message && (
              <span>{errors?.firstName?.message.toString()}</span>
            )}
          </label>
          <input
            className={errors?.firstName?.message ? styles.inputsError : ''}
            id='firstName'
            type='text'
            placeholder='ex. John'
            {...register('firstName', {
              required: 'Fill in the field',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
              validate: (value) =>
                /^[^\d@#!$%^*()_=.,-]*$/g.test(value) === true ||
                'Symbols and numbers are not allowed',
            })}
          />
        </div>

        <div>
          <label htmlFor='lastName'>
            Last Name
            {errors?.lastName?.message && (
              <span>{errors?.lastName?.message.toString()}</span>
            )}
          </label>
          <input
            className={errors?.lastName?.message ? styles.inputsError : ''}
            id='lastName'
            type='text'
            placeholder='ex. Smith'
            {...register('lastName', {
              required: 'Fill in the field',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
              validate: (value) =>
                /^[^\d@#!$%^*()_=.,-]*$/g.test(value) === true ||
                'Symbols and numbers are not allowed',
            })}
          />
        </div>

        <div>
          <label htmlFor='nickname'>
            Nickname
            {errors?.nickname?.message && (
              <span>{errors?.nickname?.message.toString()}</span>
            )}
          </label>
          <div className={styles.nicknameContainer}>
            <span>
              <FiAtSign />
            </span>
            <input
              className={errors?.nickname?.message ? styles.inputsError : ''}
              type='text'
              placeholder='ex. john.smith'
              {...register('nickname', {
                required: 'Fill in the field',
                minLength: {
                  value: 5,
                  message: 'Minimum 5 characters',
                },
                validate: (value) =>
                  /^[^\d@#!$%^*()=,-]*$/g.test(value) === true ||
                  'Symbols and numbers are not allowed',
              })}
            />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button>Continue</Button>
        </div>
      </form>
    </div>
  );
}

export default UserDataForm;
