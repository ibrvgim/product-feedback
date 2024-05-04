import styles from '../../../styles/components/StepCard.module.css';

interface Props {
  step: number | string;
  header: string;
  detail: string;
}

function StepCard({ step, header, detail }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.header}>{header}</p>
      <button className={styles.step}>{step}</button>
      <p className={styles.description}>{detail}</p>
    </div>
  );
}

export default StepCard;
