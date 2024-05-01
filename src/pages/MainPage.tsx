import styles from '../styles/pages/MainPage.module.css';
import Section from '../components/common/Section';
import FeedbacksContainer from '../components/pages/mainPage/FeedbacksContainer';
import SideNavigation from '../components/pages/mainPage/SideNavigation';

function MainPage() {
  return (
    <Section>
      <div className={styles.container}>
        <SideNavigation />
        <FeedbacksContainer />
      </div>
    </Section>
  );
}

export default MainPage;
