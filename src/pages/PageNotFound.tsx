import Button from '../components/common/Button';
import Section from '../components/common/Section';
import styles from '../styles/pages/PageNotFound.module.css';

function PageNotFound() {
  return (
    <Section>
      <div className={styles.container}>
        <img
          className={styles.image}
          src='/icons/not_found.svg'
          alt='page not found image'
          draggable={false}
        />

        <p>Sorry. Page not found!</p>

        <Button path='/' replace={true}>
          Go Home
        </Button>
      </div>
    </Section>
  );
}

export default PageNotFound;
