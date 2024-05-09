import styles from '../../../styles/components/RoadMapContainer.module.css';
import { useParams } from 'react-router-dom';
import RoadMapItem from './RoadMapItem';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import { getAllFeedbacks } from '../../../utilities/getAllFeedbacks';
import { getFeedbacksByCategory } from '../../../utilities/getFeedbacksByCategory';

interface ItemType {
  id?: string;
  title?: string;
  category?: string;
  description?: string;
  comments?: [];
  status?: string;
}

function RoadMapContainer() {
  const { roadID } = useParams();
  const { isPending, getFeedbacks } = useGetFeedbacks();
  if (!roadID || !getFeedbacks) return;
  const allFeedbacks = getAllFeedbacks(roadID, getFeedbacks);

  const plannedCategory = getFeedbacksByCategory('planned', allFeedbacks);
  const progressCategory = getFeedbacksByCategory(
    'in - progress',
    allFeedbacks
  );
  const releasedCategory = getFeedbacksByCategory('released', allFeedbacks);

  if (isPending) return <FullSpinnerPage />;

  return (
    <div className={styles.container}>
      <div className={styles.plannedContainer}>
        <div>
          <p className={styles.header}>
            Planned ( {plannedCategory?.length || 0} )
          </p>
          <p className={styles.description}>Ideas prioritized for research</p>
        </div>

        <div className={styles.cardsContainer}>
          {plannedCategory?.map((item: ItemType) => (
            <RoadMapItem color='orange' key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.progressContainer}>
        <div>
          <p className={styles.header}>
            In Progress ( {progressCategory?.length || 0} )
          </p>
          <p className={styles.description}>Currently developing</p>
        </div>

        <div className={styles.cardsContainer}>
          {progressCategory?.map((item: ItemType) => (
            <RoadMapItem color='purple' key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.releasedContainer}>
        <div>
          <p className={styles.header}>
            Released ( {releasedCategory?.length || 0} )
          </p>
          <p className={styles.description}>Released features</p>
        </div>

        <div className={styles.cardsContainer}>
          {releasedCategory?.map((item: ItemType) => (
            <RoadMapItem color='cyan' key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadMapContainer;
