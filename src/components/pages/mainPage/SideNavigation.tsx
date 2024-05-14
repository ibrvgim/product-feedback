import styles from '../../../styles/components/SideNavigation.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import FilterButton from '../../common/FilterButton';
import ThemeMode from '../../common/ThemeMode';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../../common/ModalWindow';
import ConfirmationWindow from '../../common/ConfirmationWindow';
import {
  openLogoutWindow,
  openSettingWindow,
} from '../../../slices/modalWindowSlice';
import { IoFootstepsOutline } from 'react-icons/io5';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import useGetCompany from '../../../hooks/company/useGetCompany';
import { getFeedbacksByCategory } from '../../../utilities/getFeedbacksByCategory';
import { getAllFeedbacks } from '../../../utilities/getAllFeedbacks';
import { FeedbackObject, States } from '../../../types/types';

function SideNavigation() {
  const navigate = useNavigate();
  const { logoutWindow } = useSelector((state: States) => state.modalWindow);
  const dispatch = useDispatch();

  // GET FEEDBACKS
  const { isPending, getFeedbacks } = useGetFeedbacks();
  const { id } = useParams();
  const getID = id?.slice(-36);
  const filter = getFeedbacks?.find((item) => item.company_id === getID);

  // GET COMPANY
  const { isAuthenticated, companyData } = useGetCompany();
  const matchAccount = getID === companyData?.id;

  function handleExitButton() {
    dispatch(openLogoutWindow());
  }

  if (!id || !getFeedbacks) return;

  const allFeedbacks: FeedbackObject[] =
    getAllFeedbacks(id, getFeedbacks) || [];

  const plannedCategory = getFeedbacksByCategory('planned', allFeedbacks);
  const progressCategory = getFeedbacksByCategory(
    'in - progress',
    allFeedbacks
  );
  const releasedCategory = getFeedbacksByCategory('released', allFeedbacks);

  if (isPending) return <FullSpinnerPage />;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconsContainer}>
            <button
              className={styles.roadmapIcon}
              onClick={() => navigate(`/road-map/${id}`)}
            >
              <IoFootstepsOutline />
            </button>

            {isAuthenticated && matchAccount && (
              <>
                <button
                  className={styles.settingItem}
                  onClick={() => dispatch(openSettingWindow())}
                >
                  <IoSettingsOutline />
                </button>

                <button className={styles.exitIcon} onClick={handleExitButton}>
                  <IoMdLogOut />
                </button>
              </>
            )}
          </div>
          <h2>{filter.company_name}</h2>
          <p>Feedback Board</p>
        </div>

        <div className={styles.filters}>
          {['All', 'UI', 'UX', 'Enhancement', 'Feature', 'Bug'].map((item) => (
            <FilterButton key={item} item={item}>
              {item}
            </FilterButton>
          ))}
        </div>

        <div className={styles.roadmap}>
          <div className={styles.roadmapHeader}>
            <p>Roadmap</p>

            <button
              className={styles.viewButton}
              onClick={() => navigate(`/road-map/${id}`)}
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

              <span>{plannedCategory.length || 0}</span>
            </li>

            <li>
              <div>
                <span className={styles.progress}>&nbsp;</span>
                <p>In Progress</p>
              </div>

              <span>{progressCategory.length || 0}</span>
            </li>

            <li>
              <div>
                <span className={styles.released}>&nbsp;</span>
                <p>Released</p>
              </div>

              <span>{releasedCategory.length || 0}</span>
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
