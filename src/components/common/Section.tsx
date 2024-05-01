import styles from '../../styles/components/Section.module.css';
import { Children } from '../../types/types';

function Section({ children }: Children) {
  return <section className={styles.container}>{children}</section>;
}

export default Section;
