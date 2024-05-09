import styles from '../../../styles/components/AddComment.module.css';
import { useEffect, useState } from 'react';
import Button from '../../common/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import { getAllFeedbacks } from '../../../utilities/getAllFeedbacks';
import { useAddComment } from '../../../hooks/feedbacks/useCreateFeedback';
import MiniSpinner from '../../common/MiniSpinner';
import useGetCompany from '../../../hooks/company/useGetCompany';

function AddComment() {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const [user, setUser] = useState(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const { feedbackID } = useParams();
  const id = searchParams.get('company');
  const { getFeedbacks } = useGetFeedbacks();
  const { isPosting, postComment } = useAddComment();
  if (!id || !getFeedbacks) return;
  const allFeedbacks = getAllFeedbacks(id, getFeedbacks);
  const { isAuthenticated, companyData } = useGetCompany();
  if (!allFeedbacks) return;
  const companyID = id.slice(-36);
  let userInfo;

  const [currentFeedback] = allFeedbacks.filter(
    (item: { id: string | number }) => item.id === Number(feedbackID)
  );
  if (!currentFeedback) return;

  const allComments = currentFeedback?.comments || [];

  if (!user) return;

  if (isAuthenticated && companyID === companyData?.id) {
    userInfo = {
      image: 'avatars/director.png',
      name: companyData?.user_metadata.companyName,
      username: 'admin',
    };
  } else {
    userInfo = {
      image: user.image,
      name: `${user?.firstName} ${user?.lastName}`,
      username: user?.nickname,
    };
  }

  function handleOnSubmit() {
    if (value?.length < 20) {
      setError('Minimum 20 characters');
      return;
    } else {
      setError('');
    }

    const newFeedback = {
      ...currentFeedback,
      comments: [
        ...allComments,
        {
          id: Date.now(),
          content: value,
          user: userInfo,
          replies: [],
        },
      ],
    };

    const feedbackIndex = allFeedbacks?.findIndex(
      (item: { id: string | number }) => item.id === Number(feedbackID)
    );
    const feedbackItem = allFeedbacks?.slice();

    feedbackItem?.splice(feedbackIndex, 1, newFeedback);
    if (!feedbackItem) return;

    postComment({ companyID, feedbackItem: [...feedbackItem] });
    setValue('');
  }

  return (
    <div className={styles.container}>
      <h3>Add Comment</h3>

      <div>
        {error && <label htmlFor='comment'>{error}</label>}
        <textarea
          className={error ? styles.invalidInput : ''}
          id='comment'
          name='comment'
          rows={4}
          placeholder='Just leave your thoughts and suggestions...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={300}
        />
      </div>

      <div className={styles.submitContainer}>
        <p>
          <span>{value ? 300 - value.length : 300}</span> characters left
        </p>
        <Button handleClick={handleOnSubmit} disabled={isPosting}>
          {isPosting ? <MiniSpinner /> : 'Post Comment'}
        </Button>
      </div>
    </div>
  );
}

export default AddComment;
