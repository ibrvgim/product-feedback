import styles from '../../../styles/components/RoadMapItem.module.css';
import FilterButton from '../../common/FilterButton';
import { FaRegComments } from 'react-icons/fa6';

interface Props {
  color: string;
}

function RoadMapItem({ color }: Props) {
  return (
    <div
      className={styles.container}
      style={{ borderTop: `7px solid var(--color-${color})` }}
    >
      <p className={styles.heading}>More comprehensive report</p>
      <p className={styles.text}>
        It would be great to see a more detailed breakdown of solutions.
      </p>

      <div>
        <FilterButton fixed='true'>Feature</FilterButton>

        <div className={styles.feedbackComments}>
          <span className={styles.commentIcon}>
            <FaRegComments />
          </span>
          <span>17</span>
        </div>
      </div>
    </div>
  );
}

export default RoadMapItem;
