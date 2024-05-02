import styles from '../styles/pages/FullSpinnerPage.module.css';

function FullSpinnerPage() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}>&nbsp;</span>
    </div>
  );
}

export default FullSpinnerPage;
