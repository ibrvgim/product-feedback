import styles from '../../styles/components/MiniSpinner.module.css';

interface Props {
  space?: boolean;
}

function MiniSpinner({ space = true }: Props) {
  return (
    <span
      className={
        space ? styles.loader : `${styles.loader} ${styles.borderless}`
      }
    >
      &nbsp;
    </span>
  );
}

export default MiniSpinner;
