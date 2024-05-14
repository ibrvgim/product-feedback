import styles from '../../../styles/components/ReplyComment.module.css';
import { useEffect, useState } from 'react';
import Button from '../../common/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import { getAllFeedbacks } from '../../../utilities/getAllFeedbacks';
import { useAddComment } from '../../../hooks/feedbacks/useCreateFeedback';
import MiniSpinner from '../../common/MiniSpinner';
import useGetCompany from '../../../hooks/company/useGetCompany';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import {
  Comments,
  FeedbackObject,
  UserInfo,
  UserInitialData,
} from '../../../types/types';
import useResponsiveDesign from '../../../hooks/other/useResponsiveDesign';
import { getRandomAvatar } from '../../../utilities/helpers';

function ReplyComment({
  id,
  toggleReply,
}: {
  id: number | string;
  toggleReply: () => void;
}) {
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData !== null) {
      const user = JSON.parse(userData);
      setUser(user);
    }
  }, []);

  const [user, setUser] = useState<UserInitialData | null>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const companyID = searchParams.get('company')?.slice(-36);
  const { feedbackID } = useParams();
  const { getFeedbacks } = useGetFeedbacks();
  const { isPosting, postComment } = useAddComment();
  const { companyData, isAuthenticated, isPending } = useGetCompany();
  const { smallScreen } = useResponsiveDesign();

  if (!companyID || !getFeedbacks) return;
  let userInfo: UserInfo;

  const allFeddbacks: FeedbackObject[] =
    getAllFeedbacks(companyID, getFeedbacks) || [];

  if (allFeddbacks.length === 0) return;

  const currentFeedback = allFeddbacks.find(
    (item: { id: string | number }) => item.id === Number(feedbackID)
  );

  const getAllComments = currentFeedback?.comments;
  const currentComment = getAllComments?.find(
    (item: { id: string | number }) => item.id === id
  );

  const allReplies = currentComment?.replies || [];

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

  function handleReply() {
    if (value.length < 10) {
      setError('Minimum 10 characters');
      return;
    } else setError('');

    if (!currentComment) return;

    const newComment: Comments = {
      ...currentComment,
      replies: [
        ...allReplies,
        {
          id: Date.now(),
          content: value,
          replyingTo: currentComment?.user.username || '',
          user: userInfo,
        },
      ],
    };

    const findIndexComment = getAllComments?.findIndex(
      (item: { id: string | number }) => item.id === id
    );

    if (!findIndexComment && findIndexComment !== 0) return;

    const commentItem = getAllComments?.slice();
    commentItem?.splice(findIndexComment, 1, newComment);

    if (!commentItem || !currentFeedback) return;

    const newFeedback: FeedbackObject = {
      ...currentFeedback,
      comments: [...commentItem],
    };

    const findIndexFeedback = allFeddbacks?.findIndex(
      (item: { id: string | number }) => item.id === Number(feedbackID)
    );

    if (findIndexFeedback && findIndexFeedback < 0) return;
    const feedbackItem = allFeddbacks?.slice();
    feedbackItem?.splice(findIndexFeedback, 1, newFeedback);

    if (!companyID) return;

    postComment({ companyID, feedbackItem: [...feedbackItem] });
    setValue('');
    toggleReply();
  }

  if (isPending) return <FullSpinnerPage />;

  return (
    <div className={styles.container}>
      <div className={styles.inputArea}>
        {error && <label htmlFor='reply'>{error}</label>}
        <textarea
          className={error ? styles.invalidInput : ''}
          id='reply'
          name='reply'
          rows={smallScreen ? 1 : 2}
          placeholder={smallScreen ? 'Reply...' : 'Reply to the comment...'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <Button style='reply' handleClick={handleReply}>
        {isPosting ? <MiniSpinner /> : smallScreen ? 'Post' : 'Post Reply'}
      </Button>
    </div>
  );
}

export default ReplyComment;
