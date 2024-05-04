import styles from '../../../styles/components/RoadMapContainer.module.css';
import LoadMore from './LoadMore';
import RoadMapItem from './RoadMapItem';

function RoadMapContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.plannedContainer}>
        <div>
          <p className={styles.header}>Planned ( 2 )</p>
          <p className={styles.description}>Ideas prioritized for research</p>
        </div>

        <div className={styles.cardsContainer}>
          <RoadMapItem color='orange' />
          <RoadMapItem color='orange' />
        </div>
      </div>

      <div className={styles.progressContainer}>
        <div>
          <p className={styles.header}>In Progress ( 3 )</p>
          <p className={styles.description}>Currently developing</p>
        </div>

        <div className={styles.cardsContainer}>
          <RoadMapItem color='purple' />
          <RoadMapItem color='purple' />
          <RoadMapItem color='purple' />
        </div>
        <LoadMore />
      </div>

      <div className={styles.releasedContainer}>
        <div>
          <p className={styles.header}>Released ( 1 )</p>
          <p className={styles.description}>Released features</p>
        </div>

        <div className={styles.cardsContainer}>
          <RoadMapItem color='cyan' />
        </div>
      </div>
    </div>
  );
}

export default RoadMapContainer;
