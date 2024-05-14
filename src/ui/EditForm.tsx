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
import { FeedbackObject } from '../types/types';

interface Data {
  title?: string;
  description?: string;
}

function EditForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const { isPending, getFeedbacks } = useGetFeedbacks();
  const [searchParams] = useSearchParams();
  const { feedbackID } = useParams();
  const companyID = searchParams.get('company')?.slice(-36);
  const { isUpdating, updateFeedback } = useUpdateFeedback();
  const [value, setValue] = useState(formatString('Feature'));

  if (!companyID || !getFeedbacks) return;

  const allFeedbacks: FeedbackObject[] =
    getAllFeedbacks(companyID, getFeedbacks) || [];

  const currentFeedback = allFeedbacks.find(
    (item) => Number(item.id) === Number(feedbackID)
  );

  if (!currentFeedback) return;

  const { title, description } = currentFeedback;

  function handleOnSubmit(data: Data) {
    const { title, description } = data;
    if (!companyID) return;

    const isEditted =
      currentFeedback?.title.toLowerCase() !== title?.toLowerCase() ||
      currentFeedback?.category.toLowerCase() !== value?.toLowerCase() ||
      currentFeedback?.description.toLowerCase() !== description?.toLowerCase();

    const feedbackIndex = allFeedbacks?.findIndex(
      (item) => Number(item.id) === Number(feedbackID)
    );

    if (!title || !description || !value || !currentFeedback) return;

    const newFeedbacks: FeedbackObject[] = allFeedbacks?.slice();
    newFeedbacks?.splice(feedbackIndex, 1, {
      ...currentFeedback,
      title: title,
      description: description,
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
                  maxLength: {
                    value: 30,
                    message: 'Maximum 30 characters',
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
            <div className={styles.cancelButton}>
              <Button style='outline' handleClick={handleCancel}>
                Cancel
              </Button>
            </div>
            <Button>{isUpdating ? <MiniSpinner /> : 'Save Changes'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
