import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/Button.module.css';

interface Props {
  children: React.ReactNode;
  style?: string;
  path?: string;
}

function Button({ children, style = 'primary', path = '' }: Props) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`${styles.button} ${styles[style]}`}
    >
      {children}
    </button>
  );
}

export default Button;
