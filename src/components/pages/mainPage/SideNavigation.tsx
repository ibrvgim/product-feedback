import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/components/SideNavigation.module.css';
import FilterButton from '../../common/FilterButton';
import ThemeMode from '../../common/ThemeMode';

function SideNavigation() {
  const navigate = useNavigate();

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

          <button
            className={styles.viewButton}
            onClick={() => navigate('/road-map')}
          >
            More
          </button>
        </div>

        <ul className={styles.roadmapList}>
          <li>
            <div>
              <span className={styles.planned}>&nbsp;</span>
              <p>Planned</p>
            </div>

            <span>2</span>
          </li>

          <li>
            <div>
              <span className={styles.progress}>&nbsp;</span>
              <p>In Progress</p>
            </div>

            <span>3</span>
          </li>

          <li>
            <div>
              <span className={styles.released}>&nbsp;</span>
              <p>Released</p>
            </div>

            <span>1</span>
          </li>
        </ul>
      </div>

      <ThemeMode />
    </div>
  );
}

export default SideNavigation;
