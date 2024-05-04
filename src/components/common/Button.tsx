import styles from '../../styles/components/Button.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  style?: string;
  path?: string;
  replace?: boolean;
}

function Button({
  children,
  style = 'primary',
  path = '',
  replace = false,
}: Props) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path, { replace: replace })}
      className={`${styles.button} ${styles[style]}`}
    >
      {children}
    </button>
  );
}

export default Button;
