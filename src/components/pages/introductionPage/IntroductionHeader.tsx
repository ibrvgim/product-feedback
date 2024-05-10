import { useDispatch } from 'react-redux';
import {
  openLoginWindow,
  openRegisterWindow,
} from '../../../slices/modalWindowSlice';
import styles from '../../../styles/components/IntroductionHeader.module.css';
import Button from '../../common/Button';
import Logo from '../../common/Logo';
import SmallDarkModeButton from '../../common/SmallDarkModeButton';
import useGetCompany from '../../../hooks/company/useGetCompany';
import { useNavigate } from 'react-router-dom';

function IntroductionHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, companyData } = useGetCompany();

  function handleLoginWindow() {
    if (isAuthenticated) navigate(`/${companyData?.id}`, { replace: true });
    else dispatch(openLoginWindow());
  }

  function handleRegisterWindow() {
    dispatch(openRegisterWindow());
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
