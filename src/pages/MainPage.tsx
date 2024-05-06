import styles from '../styles/pages/MainPage.module.css';
import Section from '../components/common/Section';
import FeedbacksContainer from '../components/pages/mainPage/FeedbacksContainer';
import SideNavigation from '../components/pages/mainPage/SideNavigation';
import { useSelector } from 'react-redux';
import ModalWindow from '../components/common/ModalWindow';
import SettingsForm from '../ui/SettingsForm';

function MainPage() {
  const { settingForm } = useSelector((state) => state.modalWindow);

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
