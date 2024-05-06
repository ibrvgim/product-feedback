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

function MainPage() {
  const { settingForm } = useSelector((state) => state.modalWindow);
  const { isPending, getFeedbacks } = useGetFeedbacks();
  const { id } = useParams();
  const getID = id?.slice(-36);

  const filter = getFeedbacks?.find((item) => item.company_id === getID);

  if (isPending) return <FullSpinnerPage />;
  if (!filter) return <PageNotFound />;

  return (
    <>
      <Section showMode={false}>
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
