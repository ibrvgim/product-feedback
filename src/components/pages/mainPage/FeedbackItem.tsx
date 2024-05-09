import styles from '../../../styles/components/FeedbackItem.module.css';
import FilterButton from '../../common/FilterButton';
import { FaRegComments } from 'react-icons/fa6';
import VoteButton from '../../common/VoteButton';
import { formatString } from '../../../utilities/helpers';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string | number;
  companyID: string;
  title: string;
  description: string;
  commentsNumber: string | number;
  category: string;
  votes: string | number;
}

function FeedbackItem({
  id,
  companyID,
  title,
  description,
  commentsNumber,
  category,
  votes,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <VoteButton votes={votes} />

      <div
        className={styles.interactionContainer}
        onClick={() => navigate(`/feedback/${id}?company=${companyID}`)}
      >
        <div className={styles.feedbackDescription}>
          <h3>{formatString(title)}</h3>
          <p>{formatString(description)}</p>
          <FilterButton fixed='true'>{formatString(category)}</FilterButton>
        </div>

        <div className={styles.feedbackComments}>
          <span className={styles.commentIcon}>
            <FaRegComments />
          </span>
          <span>{commentsNumber ? commentsNumber : 0}</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
