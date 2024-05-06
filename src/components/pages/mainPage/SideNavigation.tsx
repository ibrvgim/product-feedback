import styles from '../../../styles/components/SideNavigation.module.css';
import { useNavigate } from 'react-router-dom';
import FilterButton from '../../common/FilterButton';
import ThemeMode from '../../common/ThemeMode';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../../common/ModalWindow';
import ConfirmationWindow from '../../common/ConfirmationWindow';
import {
  toggleLogoutWindow,
  toggleSettingWindow,
} from '../../../slices/modalWindowSlice';

function SideNavigation() {
  const navigate = useNavigate();
  const { logoutWindow } = useSelector((state) => state.modalWindow);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconsContainer}>
            <button
              className={styles.settingItem}
              onClick={() => dispatch(toggleSettingWindow())}
            >
              <IoSettingsOutline />
            </button>

            <button
              className={styles.exitIcon}
              onClick={() => dispatch(toggleLogoutWindow())}
            >
              <IoMdLogOut />
            </button>
          </div>
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
              onClick={() => navigate('/road-map/id')}
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

      {logoutWindow && (
        <ModalWindow closeOption={false}>
          <ConfirmationWindow />
        </ModalWindow>
      )}
    </>
  );
}

export default SideNavigation;
