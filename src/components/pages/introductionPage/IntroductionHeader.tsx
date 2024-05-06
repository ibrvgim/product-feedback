import { useDispatch } from 'react-redux';
import {
  toggleLoginWindow,
  toggleRegisterWindow,
} from '../../../slices/modalWindowSlice';
import styles from '../../../styles/components/IntroductionHeader.module.css';
import Button from '../../common/Button';
import Logo from '../../common/Logo';
import SmallDarkModeButton from '../../common/SmallDarkModeButton';

function IntroductionHeader() {
  const dispatch = useDispatch();

  function handleLoginWindow() {
    dispatch(toggleLoginWindow());
  }

  function handleRegisterWindow() {
    dispatch(toggleRegisterWindow());
  }

  return (
    <div className={styles.header}>
      <Logo />

      <div className={styles.buttonsContainer}>
        <SmallDarkModeButton />
        <Button style='outline' handleClick={handleLoginWindow}>
          My Company
        </Button>
        <Button handleClick={handleRegisterWindow}>Register Company</Button>
      </div>
    </div>
  );
}

export default IntroductionHeader;
