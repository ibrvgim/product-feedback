import styles from '../../styles/components/Section.module.css';
import SmallDarkModeButton from './SmallDarkModeButton';

interface Props {
  children: React.ReactNode;
  showMode?: boolean;
}

function Section({ children, showMode = true }: Props) {
  return (
    <section>
      {showMode && <SmallDarkModeButton />}
      <div className={styles.container}>{children}</div>
    </section>
  );
}

export default Section;
