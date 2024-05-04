import styles from '../../../styles/components/IntroductionHeader.module.css';
import Button from '../../common/Button';
import Logo from '../../common/Logo';
import SmallDarkModeButton from '../../common/SmallDarkModeButton';

function IntroductionHeader() {
  return (
    <div className={styles.header}>
      <Logo />

      <div className={styles.buttonsContainer}>
        <SmallDarkModeButton />
        <Button style='outline'>My Company</Button>
        <Button>Register Company</Button>
      </div>
    </div>
  );
}

export default IntroductionHeader;
