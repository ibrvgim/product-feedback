import { useEffect, useState } from 'react';
import styles from '../../../styles/components/ReplyComment.module.css';
import Button from '../../common/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import { getAllFeedbacks } from '../../../utilities/getAllFeedbacks';
import { useAddComment } from '../../../hooks/feedbacks/useCreateFeedback';
import MiniSpinner from '../../common/MiniSpinner';
import useGetCompany from '../../../hooks/company/useGetCompany';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';

function ReplyComment({
  id,
  toggleReply,
}: {
  id: number | string;
  toggleReply: () => void;
}) {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const [user, setUser] = useState(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const companyID = searchParams.get('company')?.slice(-36);
  const { feedbackID } = useParams();
  const { getFeedbacks } = useGetFeedbacks();
  const { isPosting, postComment } = useAddComment();
  const { companyData, isAuthenticated, isPending } = useGetCompany();
  if (!companyID || !getFeedbacks) return;
  let userInfo;

  const allFeddbacks = getAllFeedbacks(companyID, getFeedbacks);

  const currentFeedback =
    allFeddbacks?.find(
      (item: { id: string | number }) => item.id === Number(feedbackID)
    ) || [];

  const getAllComments = currentFeedback?.comments || [];
  const currentComment =
    getAllComments.find((item: { id: string | number }) => item.id === id) ||
    [];

  const allReplies = currentComment.replies;

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

  function handleReply() {
    if (value.length < 10) {
      setError('Minimum 10 characters');
      return;
    } else setError('');

    const newComment = {
      ...currentComment,
      replies: [
        ...allReplies,
        {
          id: Date.now(),
          content: value,
          replyingTo: currentComment.user.username,
          user: userInfo,
        },
      ],
    };

    const findIndexComment =
      getAllComments?.findIndex(
        (item: { id: string | number }) => item.id === id
      ) || [];
    const commentItem = getAllComments.slice();
    commentItem.splice(findIndexComment, 1, newComment);

    const newFeedback = {
      ...currentFeedback,
      comments: [...commentItem],
    };

    const findIndexFeedback = allFeddbacks?.findIndex(
      (item: { id: string | number }) => item.id === Number(feedbackID)
    );
    if (findIndexFeedback && findIndexFeedback < 0) return;
    const feedbackItem = allFeddbacks?.slice();
    feedbackItem?.splice(findIndexFeedback, 1, newFeedback);

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
          rows={2}
          placeholder='Reply to the comment...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <Button style='reply' handleClick={handleReply}>
        {isPosting ? <MiniSpinner /> : 'Post Reply'}
      </Button>
    </div>
  );
}

export default ReplyComment;
