import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../../styles/components/RoadMapItem.module.css';
import FilterButton from '../../common/FilterButton';
import { FaRegComments } from 'react-icons/fa6';
import { formatString } from '../../../utilities/helpers';

interface Props {
  color: string;
  item: ItemType;
}

interface ItemType {
  id: string;
  title: string;
  category: string;
  description: string;
  comments: [];
  status: string;
}

function RoadMapItem({ color, item }: Props) {
  const navigate = useNavigate();
  const { roadID } = useParams();

  function handleCard() {
    navigate(`/feedback/${item.id}?company=${roadID}`);
  }

  return (
    <div
      className={styles.container}
      style={{ borderTop: `7px solid var(--color-${color})` }}
      onClick={handleCard}
    >
      <p className={styles.heading}>{item.title}</p>
      <p className={styles.text}>{item.description}</p>

      <div>
        <FilterButton fixed='true'>{formatString(item.category)}</FilterButton>

        <div className={styles.feedbackComments}>
          <span className={styles.commentIcon}>
            <FaRegComments />
          </span>
          <span>{item?.comments?.length || 0}</span>
        </div>
      </div>
    </div>
  );
}

export default RoadMapItem;
