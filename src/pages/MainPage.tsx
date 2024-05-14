import styles from '../styles/pages/MainPage.module.css';
import Section from '../components/common/Section';
import FeedbacksContainer from '../components/pages/mainPage/FeedbacksContainer';
import SideNavigation from '../components/pages/mainPage/SideNavigation';
import { useSelector } from 'react-redux';
import ModalWindow from '../components/common/ModalWindow';
import SettingsForm from '../ui/SettingsForm';
import useGetFeedbacks from '../hooks/feedbacks/useGetFeedbacks';
import FullSpinnerPage from './FullSpinnerPage';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { States } from '../types/types';
import useResponsiveDesign from '../hooks/other/useResponsiveDesign';

function MainPage() {
  const { settingForm } = useSelector((state: States) => state.modalWindow);
  const { isPending, getFeedbacks } = useGetFeedbacks();
  const { id } = useParams();
  const getID = id?.slice(-36);
  const { mediumScreen } = useResponsiveDesign();

  const filter = getFeedbacks?.find((item) => item.company_id === getID);

  if (isPending) return <FullSpinnerPage />;
  if (!filter) return <PageNotFound />;

  return (
    <>
      <Section showMode={mediumScreen}>
        <div className={styles.container}>
          <SideNavigation />
          <FeedbacksContainer />
        </div>
      </Section>

      {settingForm && (
        <ModalWindow>
          <SettingsForm />
        </ModalWindow>
      )}
    </>
  );
}

export default MainPage;
