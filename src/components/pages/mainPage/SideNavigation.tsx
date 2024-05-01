import styles from '../../../styles/components/SideNavigation.module.css';
import FilterButton from '../../common/FilterButton';

function SideNavigation() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Company Name</h2>
        <p>Feedback Board</p>
      </div>

      <div className={styles.filters}>
        <FilterButton>All</FilterButton>
        <FilterButton>UI</FilterButton>
        <FilterButton>UX</FilterButton>
        <FilterButton>Enhancement</FilterButton>
        <FilterButton>Feature</FilterButton>
        <FilterButton>Bug</FilterButton>
      </div>

      <div className={styles.roadmap}>
        <div className={styles.roadmapHeader}>
          <p>Roadmap</p>

          <button className={styles.viewButton}>More</button>
        </div>

        <ul className={styles.roadmapList}>
          <li>
            <div>
              <button className={styles.planned}>&nbsp;</button>
              <p>Planned</p>
            </div>

            <span>2</span>
          </li>

          <li>
            <div>
              <button className={styles.progress}>&nbsp;</button>
              <p>In Progress</p>
            </div>

            <span>3</span>
          </li>

          <li>
            <div>
              <button className={styles.released}>&nbsp;</button>
              <p>Released</p>
            </div>

            <span>1</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavigation;
