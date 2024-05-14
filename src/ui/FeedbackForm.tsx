import styles from '../styles/ui/FeedbackForm.module.css';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import GoBack from '../components/common/GoBack';
import Select from '../components/common/Select';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useGetFeedbacks from '../hooks/feedbacks/useGetFeedbacks';
import { getAllFeedbacks } from '../utilities/getAllFeedbacks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCreateFeedback from '../hooks/feedbacks/useCreateFeedback';
import MiniSpinner from '../components/common/MiniSpinner';
import { FeedbackObject } from '../types/types';

interface DataType {
  title?: string;
  description?: string;
}

function FeedbackForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [value, setValue] = useState('Feature');
  const [seacrhParams] = useSearchParams();
  const { getFeedbacks } = useGetFeedbacks();
  const { isCreating, createFeedback } = useCreateFeedback();

  const id = seacrhParams?.get('company');
  if (!id || !getFeedbacks) return;

  const allFeedbacks: FeedbackObject[] =
    getAllFeedbacks(id, getFeedbacks) || [];

  const companyID = id?.slice(-36);

  function handleCancel() {
    navigate(-1);
  }

  function handleOnSubmit(data: DataType) {
    const { title, description } = data;

    if (companyID)
      createFeedback({
        companyID,
        feedbackItem: [
          {
            id: Date.now(),
            title: title || '',
            category: value,
            upvotes: 0,
            status: 'suggestion',
            description: description || '',
            comments: [],
          },
          ...allFeedbacks,
        ],
      });
  }

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.goBackContainer}>
          <GoBack />
        </div>

        <div className={styles.formContainer}>
          <img
            className={styles.formIcon}
            src='/icons/form.png'
            alt='form icon'
            draggable={false}
          />
          <h1>Create New Feedback</h1>

          <form onSubmit={handleSubmit(handleOnSubmit)}>
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
                rows={5}
                placeholder='Include any specific comments on what should be improved, added, etc.'
                {...register('description', {
                  required: 'Fill in the field',
                  minLength: {
                    value: 20,
                    message: 'Minimum 20 characters',
                  },
                })}
              />
            </div>

            <div className={styles.buttonsContainer}>
              <Button style='outline' handleClick={handleCancel}>
                Cancel
              </Button>
              <Button disabled={isCreating}>
                {isCreating ? <MiniSpinner /> : 'Add Feedback'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default FeedbackForm;
