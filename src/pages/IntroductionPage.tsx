import styles from '../styles/pages/IntroductionPage.module.css';
import IntroductionHeader from '../components/pages/introductionPage/IntroductionHeader';
import StepCard from '../components/pages/introductionPage/StepCard';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';

function IntroductionPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <IntroductionHeader />

        <div className={styles.heading}>
          <div>
            <h1>
              Free and easiest way to get <span>feedback</span> from your users
            </h1>
            <p>
              Do you have a product and want to receive feedback from users?
              Then you have come to the right place, register your company and
              start getting users' opinions about your product and keep them
              updated with new features.
            </p>
            <Button>Let's Start</Button>
          </div>

          <img
            className={styles.image}
            src='/icons/sign.svg'
            alt='registartion page image'
            draggable={false}
          />
        </div>

        <div className={styles.stepsContainer}>
          <h1>
            Just take <span>three</span> steps
          </h1>

          <div>
            <StepCard
              step={1}
              header='Register'
              detail='Fill out the form and create your company account.'
            />
            <StepCard
              step={2}
              header='Share'
              detail='Share a personal link belonging to your company with users.'
            />
            <StepCard
              step={3}
              header='Collect'
              detail='Start collecting users feedback and manage it easily.'
            />
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}

export default IntroductionPage;
