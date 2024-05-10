import styles from '../styles/ui/EditForm.module.css';
import Button from '../components/common/Button';
import Select from '../components/common/Select';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeAllWindows } from '../slices/modalWindowSlice';
import useGetFeedbacks from '../hooks/feedbacks/useGetFeedbacks';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAllFeedbacks } from '../utilities/getAllFeedbacks';
import { formatString } from '../utilities/helpers';
import useUpdateFeedback from '../hooks/feedbacks/useUpdateFeedback';
import FullSpinnerPage from '../pages/FullSpinnerPage';
import MiniSpinner from '../components/common/MiniSpinner';
import toast from 'react-hot-toast';

function EditForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const { isPending, getFeedbacks } = useGetFeedbacks();
  const [searchParams] = useSearchParams();
  const { feedbackID } = useParams();
  const companyID = searchParams.get('company');
  const { isUpdating, updateFeedback } = useUpdateFeedback();
  //   if (!companyID || !getFeedbacks) return;

  const allFeedbacks = getAllFeedbacks(companyID, getFeedbacks);
  const currentFeedback = allFeedbacks?.find(
    (item) => Number(item.id) === Number(feedbackID)
  );
  const { title, category, description } = currentFeedback;

  const [value, setValue] = useState(formatString(category));

  function handleOnSubmit(data) {
    const { title, description } = data;
    if (!companyID) return;

    const isEditted =
      currentFeedback.title.toLowerCase() !== title.toLowerCase() ||
      currentFeedback?.category.toLowerCase() !== value?.toLowerCase() ||
      currentFeedback.description.toLowerCase() !== description.toLowerCase();

    const feedbackIndex = allFeedbacks?.findIndex(
      (item) => Number(item.id) === Number(feedbackID)
    );

    const newFeedbacks = allFeedbacks?.slice();
    newFeedbacks?.splice(feedbackIndex, 1, {
      ...currentFeedback,
      title,
      description,
      category: value,
    });

    if (isEditted) {
      updateFeedback({
        companyID,
        feedbackItem: [...newFeedbacks],
      });
    } else {
      toast.error('No changes detected.');
    }
    dispatch(closeAllWindows());
  }

  function handleCancel() {
    dispatch(closeAllWindows());
  }

  if (isPending) return <FullSpinnerPage />;
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <img
          className={styles.formIcon}
          src='/icons/edit.svg'
          alt='form icon'
          draggable={false}
        />
        <h1>Edit Feedback</h1>

        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className={styles.topInputsContainer}>
            <div>
              <label htmlFor='title'>
                Feedback Title
                {errors?.title?.message && (
                  <span>{errors?.title?.message.toString()}</span>
                )}
              </label>
              <input
                className={errors?.title?.message ? styles.invalidInput : ''}
                id='title'
                type='text'
                placeholder='Add a short descriptive title'
                {...register('title', {
                  required: 'Fill in the field',
                  minLength: {
                    value: 10,
                    message: 'Minimum 10 characters',
                  },
                })}
                defaultValue={title}
              />
            </div>

            <div>
              <label htmlFor='category'>Feedback Category</label>

              <Select
                formStyle={true}
                value={value}
                setValue={setValue}
                options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']}
              />
            </div>
          </div>

          <div>
            <label htmlFor='details'>
              Feedback Details
              {errors?.description?.message && (
                <span>{errors?.description?.message.toString()}</span>
              )}
            </label>
            <textarea
              className={
                errors?.description?.message ? styles.invalidInput : ''
              }
              id='description'
              rows={4}
              placeholder='Include any specific comments on what should be improved, added, etc.'
              {...register('description', {
                required: 'Fill in the field',
                minLength: {
                  value: 20,
                  message: 'Minimum 20 characters',
                },
              })}
              defaultValue={description}
            />
          </div>

          <div className={styles.buttonsContainer}>
            <Button style='outline' handleClick={handleCancel}>
              Cancel
            </Button>
            <Button>{isUpdating ? <MiniSpinner /> : 'Save Changes'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
