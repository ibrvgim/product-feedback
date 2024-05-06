import { useSelector } from 'react-redux';
import styles from '../../styles/components/Section.module.css';
import UserDataForm from '../../ui/UserDataForm';
import ModalWindow from './ModalWindow';
import SmallDarkModeButton from './SmallDarkModeButton';

interface Props {
  children: React.ReactNode;
  showMode?: boolean;
}

function Section({ children, showMode = true }: Props) {
  const { userForm } = useSelector((state) => state.modalWindow);

  return (
    <>
      <section>
        {showMode && <SmallDarkModeButton />}
        <div className={styles.container}>{children}</div>
      </section>

      {userForm && (
        <ModalWindow closeOption={false}>
          <UserDataForm />
        </ModalWindow>
      )}
    </>
  );
}

export default Section;
