import styles from '../../../styles/components/CommentItem.module.css';
import { useState } from 'react';
import ReplyComment from './ReplyComment';
import useGetCompany from '../../../hooks/company/useGetCompany';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAllFeedbacks } from '../../../utilities/getAllFeedbacks';

interface Props {
  item: {
    id: number | string;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  };
}

function CommentItem({ item }: Props) {
  const { id, content, user } = item;
  const [reply, setReply] = useState(false);
  const { isPending, companyData } = useGetCompany();
  const { getFeedbacks } = useGetFeedbacks();
  const [searchParams] = useSearchParams();
  const companyID = searchParams.get('company');
  const { feedbackID } = useParams();

  if (!companyID || !getFeedbacks) return;

  const allFeedbacks = getAllFeedbacks(companyID, getFeedbacks);
  const getFeedbackItem = allFeedbacks?.find(
    (item) => item?.id === Number(feedbackID)
  );

  const isAdmin =
    companyData?.user_metadata.companyName.toLowerCase() ===
    user?.name.toLowerCase();

  function toggleReply() {
    setReply((reply) => !reply);
  }

  if (isPending) return <FullSpinnerPage />;
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img
          className={styles.userImage}
          src={`/${user.image}`}
          alt='user image'
        />
        <div className={styles.userComment}>
          <p className={isAdmin ? styles.admin : styles.userName}>
            {user.name}
          </p>
          <p className={isAdmin ? styles.adminTag : styles.userTag}>
            {isAdmin ? '' : '@'}
            {user.username}
          </p>
          <p className={styles.userText}>{content}</p>
        </div>
        {getFeedbackItem?.status.toLowerCase() !== 'released' &&
          getFeedbackItem?.status.toLowerCase() !== 'in - progress' && (
            <button className={styles.replyButton} onClick={toggleReply}>
              Reply
            </button>
          )}
      </div>
      {reply && <ReplyComment id={id} toggleReply={toggleReply} />}
    </div>
  );
}

export default CommentItem;
