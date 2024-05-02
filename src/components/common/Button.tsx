import styles from '../../styles/components/Button.module.css';

interface Props {
  children: React.ReactNode;
  style?: string;
}

function Button({ children, style = 'primary' }: Props) {
  return (
    <button className={`${styles.button} ${styles[style]}`}>{children}</button>
  );
}

export default Button;
