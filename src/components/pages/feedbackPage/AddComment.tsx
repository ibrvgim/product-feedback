import styles from '../../../styles/components/AddComment.module.css';
import { useEffect, useState } from 'react';
import Button from '../../common/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import { getAllFeedbacks } from '../../../utilities/getAllFeedbacks';
import { useAddComment } from '../../../hooks/feedbacks/useCreateFeedback';
import MiniSpinner from '../../common/MiniSpinner';
import useGetCompany from '../../../hooks/company/useGetCompany';
import {
  FeedbackObject,
  UserInfo,
  UserInitialData,
} from '../../../types/types';
import useResponsiveDesign from '../../../hooks/other/useResponsiveDesign';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import { getRandomAvatar } from '../../../utilities/helpers';

function AddComment() {
  useEffect(() => {
    const userDataString = localStorage.getItem('user');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    }
  }, []);

  const [user, setUser] = useState<UserInitialData | null>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const { feedbackID } = useParams();
  const id = searchParams.get('company');
  const { getFeedbacks } = useGetFeedbacks();
  const { isPosting, postComment } = useAddComment();
  const { isPending, isAuthenticated, companyData } = useGetCompany();
  const { smallScreen } = useResponsiveDesign();

  if (!id || !getFeedbacks) return;

  const allFeedbacks: FeedbackObject[] =
    getAllFeedbacks(id, getFeedbacks) || [];

  if (!allFeedbacks) return;
  const companyID = id.slice(-36);
  let userInfo: UserInfo;

  const [currentFeedback] = allFeedbacks.filter(
    (item: { id: string | number }) => item.id === Number(feedbackID)
  );
  if (!currentFeedback) return;

  const allComments = currentFeedback?.comments || [];

  if (!user && !isAuthenticated) return;

  if (isAuthenticated && companyID === companyData?.id) {
    userInfo = {
      image: 'avatars/director.png',
      name: companyData?.user_metadata.companyName,
      username: 'admin',
    };
  } else {
    userInfo = {
      image: user?.image || getRandomAvatar(),
      name: `${user?.firstName} ${user?.lastName}`,
      username: user?.nickname || '',
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

  if (isPending) return <FullSpinnerPage />;

  return (
    <div className={styles.container}>
      <h3>Add Comment</h3>

      <div>
        {error && <label htmlFor='comment'>{error}</label>}
        <textarea
          className={error ? styles.invalidInput : ''}
          id='comment'
          name='comment'
          rows={smallScreen ? 2 : 4}
          placeholder={
            smallScreen
              ? 'Add Comments...'
              : 'Just leave your thoughts and suggestions...'
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={300}
        />
      </div>

      <div className={styles.submitContainer}>
        <p>
          <span>{value ? 300 - value.length : 300}</span>{' '}
          {smallScreen ? 'chr.' : 'characters left'}
        </p>
        <Button handleClick={handleOnSubmit} disabled={isPosting}>
          {isPosting ? <MiniSpinner /> : smallScreen ? 'Post' : 'Post Comment'}
        </Button>
      </div>
    </div>
  );
}

export default AddComment;
